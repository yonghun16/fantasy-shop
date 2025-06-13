import { useState } from "react";
import { getPaymentDetail } from "../../shared/api/payment";

const usePAymentDetail = () => {
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);

  const fetchOrderDetail = async (paymentPk) => {
    setError(null);

    try {
      const res = await getPaymentDetail(paymentPk);
      setOrder(data);
    } catch (err) {
      console.error("주문 상세 조회 실패", err);
      setError(err);
    }
  };
  return {
    order,
    error,
    fetchOrderDetail,
    setOrder,
  };
};

export default usePAymentDetail;
