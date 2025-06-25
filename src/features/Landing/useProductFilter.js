import { useEffect, useMemo, useState } from "react";
import useProductsQuery from "./useProductsQuery";
import useDebounce from "./useDebounce";

const ITEMS_PER_PAGE = 10;

const useProductFilter = () => {
  const categories = [
    { label: "모든 아이템", value: "all" },
    { label: "검", value: "sword" },
    { label: "활", value: "bow" },
    { label: "지팡이", value: "wand" },
    { label: "방패", value: "shield" },
  ];
  const sortOptions = ["최신 등록순", "낮은 가격순", "높은 가격순"];

  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortOption, setSortOption] = useState("최신 등록순");
  const [currentPage, setCurrentPage] = useState(1);
  const [autoSuggestList, setAutoSuggestList] = useState([]);

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
    setSearchTerm(inputValue.replace(/\s+/g, "")); // 검색어 공백 제거 후 검색
    setCurrentPage(1);
    setAutoSuggestList([]);
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleAutoSuggestClick = (itemName) => {
    setInputValue(itemName); // 검색창에는 원본 그대로 보여줌
    setSearchTerm(itemName.replace(/\s+/g, "")); // 서버 요청은 공백 제거
    setCurrentPage(1);
    setAutoSuggestList([]);
  };

  const debouncedInput = useDebounce(inputValue, 300);

  useEffect(() => {
    if (!debouncedInput.trim()) {
      setAutoSuggestList([]);
      return;
    }

    const normalizedInput = debouncedInput.toLowerCase().replace(/\s+/g, "");

    const suggestions = products.filter((item) => {
      const normalizedItemName = item.itemName
        .toLowerCase()
        .replace(/\s+/g, "");
      return normalizedItemName.includes(normalizedInput);
    });

    setAutoSuggestList(suggestions.slice(0, 5));
  }, [debouncedInput, products]);

  return {
    inputValue,
    setInputValue,
    searchTerm,
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
    autoSuggestList,
    handleAutoSuggestClick,
  };
};

export default useProductFilter;
