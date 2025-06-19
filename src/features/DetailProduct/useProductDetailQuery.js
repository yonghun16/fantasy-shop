import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../shared/api/axios";

// 상품 상세 정보를 가져오는 비동기 함수
const fetchProductDetail = async (id) => {
  const { data } = await axiosInstance.get(`/item/${id}`);
  return data; // 응답받은 데이터 반환
};

// 상품 상세 정보를 가져오는 커스텀 훅
const useProductDetailQuery = (id) => {
  return useQuery({
    // queryKey는 캐시와 관련된 고유 키 (상품 id별로 따로 캐싱됨)
    queryKey: ["productDetail", id],

    // 데이터를 가져오는 함수 (id가 필요)
    queryFn: () => fetchProductDetail(id),

    // id가 존재할 때만 쿼리 실행 (undefined나 null이면 실행 안 함)
    enabled: !!id,

    // 5분 동안은 다시 요청하지 않고 기존 데이터를 재사용함
    staleTime: 1000 * 60 * 5,

    // 캐시된 데이터는 10분 이후 자동으로 제거됨
    cacheTime: 1000 * 60 * 10,
  });
};

export default useProductDetailQuery;
