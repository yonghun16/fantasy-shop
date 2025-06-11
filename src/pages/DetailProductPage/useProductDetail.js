import { useParams } from "react-router-dom";
import { useState } from "react";
import { dummyProducts } from "../LandingPage/dummyProducts";

// 상세 페이지에서 사용할 데이터를 제공하는 커스텀 훅
const useProductDetail = () => {
  // URL에서 id 파라미터 추출
  const { id } = useParams();

  // id에 해당하는 제품 데이터를 찾음
  const product = dummyProducts.find((item) => item.id === id);

  // 사용자가 선택한 제품 수량 (기본값은 1)
  const [count, setCount] = useState(1);

  // 수량 감소 함수 (최소 1까지만 줄어들 수 있음)
  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  // 수량 증가 함수 (재고 수량을 초과할 수 없음)
  const handleIncrease = () => {
    if (product && count < product.quantity) setCount((prev) => prev + 1);
  };

  // 컴포넌트에서 사용할 데이터와 함수들을 반환
  return {
    product, // 제품 정보 객체
    count, // 현재 선택된 수량
    handleIncrease, // 수량 증가 함수
    handleDecrease, // 수량 감소 함수
  };
};

export default useProductDetail;
