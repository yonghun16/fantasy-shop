import { useState } from "react";
import { getPaymentDetail } from "../../shared/api/history";

const useGetOrderDetail = () => {
  const [orderDetail, setOrderDetail] = useState(null);
  const [error, setError] = useState(null);

  const fetchOrderDetail = async (paymentPk) => {
    setError(null);

    try {
      const res = await getPaymentDetail(paymentPk);
      setOrderDetail(res.data);
      return res.data;
    } catch (err) {
      console.error("주문 상세 조회 실패", err);
      setError(err);
    }
  };

  return {
    orderDetail,
    error,
    fetchOrderDetail,
    setOrderDetail,
  };
};

export default useGetOrderDetail;
