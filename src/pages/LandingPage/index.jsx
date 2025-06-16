import BannerImages from "./bannerImages";
import CategoryFilter from "./CategoryFilter";
import SearchAndSort from "./SearchAndSort";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";
import useProductFilter from "./useProductFilter";

const LandingPage = () => {
  const {
    searchTerm, // 검색어 상태
    setSearchTerm, // 검색어 변경 함수
    activeCategory, // 선택된 카테고리
    setActiveCategory, // 카테고리 변경 함수
    sortOption, // 선택된 정렬 옵션
    setSortOption, // 정렬 옵션 변경 함수
    currentPage, // 현재 페이지 번호
    setCurrentPage, // 페이지 번호 변경 함수
    totalPages, // 전체 페이지 수
    paginatedProducts, // 현재 페이지에 해당하는 상품 리스트
    handlePrevPage, // 이전 페이지 이동 함수
    handleNextPage, // 다음 페이지 이동 함수
    categories, // 카테고리 목록
    sortOptions, // 정렬 옵션 목록
    loading,
    error,
  } = useProductFilter();

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      {/* 상단 배너 이미지 */}
      <BannerImages />

      {/* 카테고리 필터 */}
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={(cat) => {
          setActiveCategory(cat); // 선택된 카테고리 설정
          setCurrentPage(1); // 필터 변경 시 페이지 초기화
        }}
      />

      {/* 카테고리와 검색/정렬 사이 구분선 */}
      <div className="border-b border-gray-200 mb-6 w-full"></div>

      {/* 검색어 입력 및 정렬 옵션 선택 */}
      <SearchAndSort
        searchTerm={searchTerm}
        setSearchTerm={(term) => {
          setSearchTerm(term); // 검색어 업데이트
          setCurrentPage(1); // 검색 시 페이지 초기화
        }}
        sortOption={sortOption}
        setSortOption={setSortOption}
        sortOptions={sortOptions}
      />

      {/* 현재 페이지에 보여줄 아이템 */}
      <div>
        {loading ? (
          <div className="text-center py-20 text-gray-500">불러오는 중...</div>
        ) : error ? (
          <div className="text-center py-20 text-red-500">{error}</div>
        ) : (
          <ProductGrid products={paginatedProducts} />
        )}
      </div>

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
