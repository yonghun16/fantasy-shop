import { useState, useEffect, useMemo } from "react";
import axiosInstance from "../../../shared/api/axios";

const ITEMS_PER_PAGE = 10;

const useProductFilter = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = ["모든 아이템", "검", "활", "지팡이", "방패"];
  const sortOptions = ["최신 등록순", "낮은 가격순", "높은 가격순"];

  // 검색 input 상태 (입력창용)
  const [inputValue, setInputValue] = useState("");

  // 실제 검색에 반영되는 검색어 상태
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("모든 아이템");
  const [sortOption, setSortOption] = useState("최신 등록순");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      const params = {};
      params.itemCategory =
        activeCategory === "모든 아이템" ? "all" : activeCategory;
      if (searchTerm.trim()) params.itemNameKeyword = searchTerm.trim();

      try {
        const res = await axiosInstance.get("/item", { params });
        setProducts(res.data);
      } catch (err) {
        console.error(err);
        setError("상품 정보를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    setCurrentPage(1);
  }, [activeCategory, searchTerm]);

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

  // 검색 버튼 클릭 시 호출: 입력된 inputValue를 실제 검색어에 반영하고 페이지 초기화
  const handleSearch = () => {
    setSearchTerm(inputValue);
    setCurrentPage(1);
  };

  // 카테고리 변경 시 호출: 선택된 카테고리로 변경, 페이지 초기화
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
    loading,
    error,
    handleSearch,
  };
};

export default useProductFilter;
