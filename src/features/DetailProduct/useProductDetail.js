import { useParams } from "react-router-dom";
import { useState } from "react";
import useProductDetailQuery from "./useProductDetailQuery";

const useProductDetail = () => {
  const { id } = useParams(); // 상품 ID 추출
  const { data: product, isLoading, error } = useProductDetailQuery(id);

  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (product && count < product.itemInventory) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return {
    product,
    count,
    loading: isLoading,
    error: error?.message || null,
    handleIncrease,
    handleDecrease,
  };
};

export default useProductDetail;
