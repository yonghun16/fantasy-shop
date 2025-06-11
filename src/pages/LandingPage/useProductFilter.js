// hooks/useProductFilter.js
import { useState, useMemo } from "react";
import { dummyProducts } from "./dummyProducts";

// 한 페이지에 보여줄 아이템 개수
const ITEMS_PER_PAGE = 10;

const useProductFilter = () => {
  // 카테고리 목록
  const categories = ["모든 아이템", "검", "활", "지팡이", "방패"];

  // 정렬 기준 목록
  const sortOptions = ["최신 등록순", "낮은 가격순", "높은 가격순"];

  // 검색어 상태, 사용자가 입력하는 상품 이름 검색어
  const [searchTerm, setSearchTerm] = useState("");
  // 현재 선택된 카테고리 상태
  const [activeCategory, setActiveCategory] = useState("모든 아이템");
  // 현재 선택된 정렬 옵션 상태
  const [sortOption, setSortOption] = useState("최신 등록순");
  // 현재 페이지 번호 상태
  const [currentPage, setCurrentPage] = useState(1);

  // 아이템 목록을 검색어, 카테고리, 정렬 조건에 따라 필터링하고 정렬함
  const filteredProducts = useMemo(() => {
    return dummyProducts
      .filter((product) => {
        // 검색어가 상품 이름에 포함되어야 하고,
        // 또는 "모든 아이템" 카테고리를 선택했거나
        // 아이템 카테고리가 현재 선택된 카테고리와 같아야 함
        return (
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (activeCategory === "모든 아이템" ||
            product.category === activeCategory)
        );
      })
      .sort((a, b) => {
        // 정렬 옵션에 따라 아이템 정렬
        if (sortOption === "낮은 가격순") return a.price - b.price; // 가격 오름차순
        if (sortOption === "높은 가격순") return b.price - a.price; // 가격 내림차순
        return b.id - a.id; // 기본값: 최신 등록순 (id가 클수록 최신)
      });
  }, [searchTerm, activeCategory, sortOption]); // 의존성 배열: 이 값들이 바뀌면 다시 계산

  // 필터된 아이템을 기준으로 총 페이지 수 계산
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  // 현재 페이지에 보여줄 아이템 시작 인덱스 계산
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // 현재 페이지에 해당하는 아이템 목록 (페이지네이션된 결과)
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // 이전 페이지로 이동하는 함수 (첫 페이지가 아니면 1페이지 감소)
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // 다음 페이지로 이동하는 함수 (마지막 페이지가 아니면 1페이지 증가)
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // 상태, 함수, 옵션 목록을 반환해서 컴포넌트에서 사용 가능하도록 함
  return {
    searchTerm, // 검색어 상태
    setSearchTerm, // 검색어 변경 함수
    activeCategory, // 현재 선택된 카테고리
    setActiveCategory, // 카테고리 변경 함수
    sortOption, // 현재 선택된 정렬 옵션
    setSortOption, // 정렬 옵션 변경 함수
    currentPage, // 현재 페이지 번호
    setCurrentPage, // 페이지 번호 변경 함수
    totalPages, // 전체 페이지 수
    paginatedProducts, // 현재 페이지에 보여줄 상품 목록
    handlePrevPage, // 이전 페이지 이동 함수
    handleNextPage, // 다음 페이지 이동 함수
    categories, // 카테고리 옵션 목록
    sortOptions, // 정렬 옵션 목록
  };
};

export default useProductFilter;
