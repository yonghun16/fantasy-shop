import BannerImages from "./LandingComponent/BannerImages";
import CategoryFilter from "./LandingComponent/CategoryFilter";
import SearchAndSort from "./LandingComponent/SearchAndSort";
import ProductGrid from "./LandingComponent/ProductGrid";
import Pagination from "./LandingComponent/Pagination";
import useProductFilter from "../../features/Landing/useProductFilter";

const LandingPage = () => {
  const {
    inputValue,
    setInputValue,
    activeCategory,
    handleCategoryChange,
    sortOption,
    setSortOption,
    currentPage,
    totalPages,
    paginatedProducts,
    handlePrevPage,
    handleNextPage,
    categories,
    sortOptions,
    loading,
    error,
    handleSearch,
  } = useProductFilter();

  return (
    <div className="w-full max-w-screen-xl mx-auto px-0 xl:px-4">
      <BannerImages />

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryChange}
      />

      <div className="border-b border-gray-200 mb-6 w-[97%] mx-auto"></div>

      <SearchAndSort
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSearch={handleSearch}
        sortOption={sortOption}
        setSortOption={setSortOption}
        sortOptions={sortOptions}
      />

      <div>
        {loading ? (
          <div className="text-center py-20 text-gray-500">불러오는 중...</div>
        ) : error ? (
          <div className="text-center py-20 text-red-500">{error}</div>
        ) : (
          <ProductGrid products={paginatedProducts} />
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={handlePrevPage}
        onNext={handleNextPage}
      />
    </div>
  );
};

export default LandingPage;
