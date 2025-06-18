import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../shared/api/axios";

// 상품 목록을 서버에서 가져오는 비동기 함수
const fetchProducts = async ({ queryKey }) => {
  // queryKey 배열에서 각각의 값을 구조 분해
  const [_key, category, keyword] = queryKey;

  // API 요청에 사용할 쿼리 파라미터 설정
  const params = {
    // category가 "모든 아이템"이면 서버에는 "all"로 전달, 아니면 그대로 사용
    itemCategory: category === "모든 아이템" ? "all" : category,
  };

  // keyword가 존재할 경우, itemNameKeyword로 추가
  if (keyword.trim()) {
    params.itemNameKeyword = keyword.trim();
  }

  const { data } = await axiosInstance.get("/item", { params });
  return data;
};

// 상품 목록을 가져오는 커스텀 훅
const useProductsQuery = (category, keyword) => {
  return useQuery({
    // queryKey: 이 쿼리의 고유 식별자 (category와 keyword가 바뀌면 자동으로 refetch됨)
    queryKey: ["products", category, keyword],

    // 데이터를 불러오는 함수 (queryKey가 인자로 전달)
    queryFn: fetchProducts,

    // 5분 동안은 다시 요청하지 않고 기존 데이터를 재사용함
    staleTime: 1000 * 60 * 5,

    // 캐시된 데이터는 10분 이후 자동으로 제거됨
    cacheTime: 1000 * 60 * 10,
  });
};

export default useProductsQuery;
