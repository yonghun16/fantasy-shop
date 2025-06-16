import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../../shared/api/axios";

const useProductDetail = () => {
  const { id } = useParams(); //상품 id 추출
  const [product, setProduct] = useState(null); // 상품 데이터 상태
  const [count, setCount] = useState(1); // 사용자가 선택한 수량
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/item/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("상품 정보를 불러오는 데 실패했습니다.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  // 수량 증가 함수
  const handleIncrease = () => {
    if (product && count < product.itemInventory) {
      setCount((prev) => prev + 1);
    }
  };

  // 수량 감소 함수
  const handleDecrease = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return {
    product,
    count,
    handleIncrease,
    handleDecrease,
    loading,
    error,
  };
};

export default useProductDetail;
