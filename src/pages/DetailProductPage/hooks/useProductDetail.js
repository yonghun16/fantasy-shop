import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../../shared/api/axios";

const useProductDetail = () => {
  // URL에서 상품 id 추출
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //  상품 상세 데이터를 비동기로 가져오는 함수
  //  의존성 배열에 id 포함 (id가 변경되면 다시 호출됨)
  const fetchProduct = useCallback(async () => {
    try {
      setLoading(true); // 요청 시작 시 로딩 상태 true
      const { data } = await axiosInstance.get(`/item/${id}`);
      console.log(data);

      setProduct(data); // 받아온 상품 데이터 저장
    } catch (err) {
      console.error(err); // 디버깅용 콘솔 출력
      setError("상품 정보를 불러오는 데 실패했습니다.");
    } finally {
      setLoading(false); // 요청 종료 시 로딩 상태 false
    }
  }, [id]);

  // 컴포넌트 마운트 시 혹은 id 변경 시 상품 정보를 불러옴
  useEffect(() => {
    if (id) fetchProduct(); // id가 존재할 경우에만 요청 실행
  }, [id, fetchProduct]);

  // 수량 증가 함수 - 재고(itemInventory)를 초과하지 않도록 제한
  const handleIncrease = () => {
    if (product && count < product.itemInventory) {
      setCount(count + 1);
    }
  };

  // 수량 감소 함수 - 최소 수량은 1
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return {
    product,
    count,
    loading,
    error,
    handleIncrease,
    handleDecrease,
  };
};

export default useProductDetail;
