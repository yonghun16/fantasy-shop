import { useState, useMemo } from "react";
import { dummyProducts } from "./dummyProducts";
import BannerImages from "./bannerImages";
import CategoryFilter from "./CategoryFilter";
import SearchAndSort from "./SearchAndSort";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";

// 카테고리 목록
const categories = [
  "모든 아이템",
  "검",
  "활",
  "해머",
  "도끼",
  "지팡이",
  "마법서",
  "방패",
  "방어구",
];

// 정렬 옵션 목록
const sortOptions = ["최신 등록순", "낮은 가격순", "높은 가격순"];

// 한 페이지당 보여줄 아이템 수
const ITEMS_PER_PAGE = 10;

// 정렬 함수 매핑: 옵션별 정렬 기준 정의
const sortFunctions = {
  "최신 등록순": (a, b) => b.id - a.id, // id 기준 내림차순
  "낮은 가격순": (a, b) => a.price - b.price, // 가격 오름차순
  "높은 가격순": (a, b) => b.price - a.price, // 가격 내림차순
};

const LandingPage = () => {
  // 검색어 상태 (입력 필터용)
  const [searchTerm, setSearchTerm] = useState("");
  // 현재 선택된 카테고리 상태
  const [activeCategory, setActiveCategory] = useState("모든 아이템");
  // 현재 선택된 정렬 옵션 상태
  const [sortOption, setSortOption] = useState("최신 등록순");
  // 현재 페이지 번호 상태 (페이지네이션용)
  const [currentPage, setCurrentPage] = useState(1);

  // setter 함수 래핑: 상태 변경 시 페이지 번호를 1로 초기화하여
  // 검색어나 카테고리, 정렬이 바뀔 때 항상 첫 페이지로 돌아가도록 처리
  const resetPageAndSet = (setter) => (value) => {
    setter(value);
    setCurrentPage(1);
  };

  // 검색어, 카테고리, 정렬 상태 변경 핸들러
  const handleSearchChange = resetPageAndSet(setSearchTerm);
  const handleCategoryChange = resetPageAndSet(setActiveCategory);
  const handleSortChange = resetPageAndSet(setSortOption);

  // 필터링 및 정렬된 상품 목록 계산 (의존성: searchTerm, activeCategory, sortOption)
  const filteredProducts = useMemo(() => {
    // 1) 검색어로 상품명 필터링
    // 2) 카테고리 필터링 (전체 아이템일 경우 모두 포함)
    const filtered = dummyProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeCategory === "모든 아이템" || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

    // 필터링된 결과를 현재 선택된 정렬 옵션 기준으로 정렬하여 반환
    return filtered.sort(sortFunctions[sortOption]);
  }, [searchTerm, activeCategory, sortOption]);

  // 전체 페이지 수 계산 (총 필터링된 상품 수 / 페이지당 아이템 수)
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  // 현재 페이지에 보여줄 상품 목록 슬라이스 (의존성: filteredProducts, currentPage)
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // 이전 페이지 이동 (1페이지 미만으로 내려가지 않음)
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // 다음 페이지 이동 (마지막 페이지 넘지 않음)
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="w-full">
      {/* 상단 배너 이미지 */}
      <BannerImages />

      {/* 카테고리 필터 */}
      <CategoryFilter
        categories={categories} // 카테고리 목록 전달
        activeCategory={activeCategory} // 현재 선택된 카테고리
        setActiveCategory={handleCategoryChange} // 카테고리 변경 함수
      />

      {/* 카테고리와 검색/정렬 사이 구분선 */}
      <div className="border-b border-gray-200 mb-6 w-full"></div>

      {/* 검색어 입력 및 정렬 옵션 선택 컴포넌트 */}
      <SearchAndSort
        searchTerm={searchTerm} // 현재 검색어
        setSearchTerm={handleSearchChange} // 검색어 변경 함수
        sortOption={sortOption} // 현재 정렬 옵션
        setSortOption={handleSortChange} // 정렬 옵션 변경 함수
        sortOptions={sortOptions} // 정렬 옵션 목록
      />

      {/* 현재 페이지에 보여줄 상품 */}
      <ProductGrid products={paginatedProducts} />

      {/* 페이지네이션 */}
      <Pagination
        currentPage={currentPage} // 현재 페이지 번호
        totalPages={totalPages} // 전체 페이지 수
        onPrev={handlePrevPage} // 이전 페이지 버튼 클릭
        onNext={handleNextPage} // 다음 페이지 버튼 클릭
      />
    </div>
  );
};

export default LandingPage;
