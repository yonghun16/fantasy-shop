import { useState, useMemo, useEffect } from "react";
import axiosInstance from "../../shared/api/axios";

const ITEMS_PER_PAGE = 10;

const useProductFilter = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = ["모든 아이템", "검", "활", "지팡이", "방패"];
  const sortOptions = ["최신 등록순", "낮은 가격순", "높은 가격순"];
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("모든 아이템");
  const [sortOption, setSortOption] = useState("최신 등록순");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axiosInstance.get("/item");
        setProducts(response.data);
      } catch (err) {
        setError("상품 정보를 불러오는 데 실패했습니다.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        return (
          product.itemName.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (activeCategory === "모든 아이템" ||
            product.itemCategory === activeCategory)
        );
      })
      .sort((a, b) => {
        if (sortOption === "낮은 가격순") return a.itemPrice - b.itemPrice;
        if (sortOption === "높은 가격순") return b.itemPrice - a.itemPrice;
        // 최신 등록순 정렬은 createdAt 기준으로 내림차순 정렬 (더 최신이 위로)
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
  }, [products, searchTerm, activeCategory, sortOption]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return {
    searchTerm,
    setSearchTerm,
    activeCategory,
    setActiveCategory,
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
  };
};

export default useProductFilter;
