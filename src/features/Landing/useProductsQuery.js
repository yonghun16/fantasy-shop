import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../shared/api/axios";

// 상품 목록을 서버에서 가져오는 비동기 함수
const fetchProducts = async ({ queryKey }) => {
  const [_key, category, keyword] = queryKey;

  const params = {};
  if (category !== "all") {
    params.itemCategory = category;
  }

  if (keyword.trim()) {
    params.itemNameKeyword = keyword.trim();
  }

  const { data } = await axiosInstance.get("/item", { params });
  return data;
};

// 상품 목록을 가져오는 커스텀 훅
const useProductsQuery = (category, keyword) => {
  return useQuery({
    queryKey: ["products", category, keyword],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};

export default useProductsQuery;
