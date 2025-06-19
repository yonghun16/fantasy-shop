import { useMemo, useState } from "react";
import useProductsQuery from "./useProductsQuery";

const ITEMS_PER_PAGE = 10;

const useProductFilter = () => {
  const categories = ["모든 아이템", "검", "활", "지팡이", "방패"];
  const sortOptions = ["최신 등록순", "낮은 가격순", "높은 가격순"];

  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("모든 아이템");
  const [sortOption, setSortOption] = useState("최신 등록순");
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: products = [],
    isLoading,
    error,
  } = useProductsQuery(activeCategory, searchTerm);

  const filteredProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      if (sortOption === "낮은 가격순") return a.itemPrice - b.itemPrice;
      if (sortOption === "높은 가격순") return b.itemPrice - a.itemPrice;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }, [products, sortOption]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    start,
    start + ITEMS_PER_PAGE
  );

  const handlePrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((p) => Math.min(p + 1, totalPages));

  const handleSearch = () => {
    setSearchTerm(inputValue);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return {
    inputValue,
    setInputValue,
    searchTerm,
    setSearchTerm,
    activeCategory,
    handleCategoryChange,
    sortOption,
    setSortOption,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedProducts,
    handlePrevPage,
    handleNextPage,
    categories,
    sortOptions,
    loading: isLoading,
    error: error?.message || null,
    handleSearch,
  };
};

export default useProductFilter;
