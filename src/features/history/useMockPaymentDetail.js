import { useState } from "react";
import { mockOrders } from "../../pages/HistoryPage/mockData";

const useMockPaymentDetail = () => {
  const [order, setOrder] = useState(null);

  const fetchOrderDetail = async (paymentPk) => {
    const found = mockOrders.find((o) => o.paymentPk === paymentPk);
    setOrder(found || null);
  };

  return {
    order,
    fetchOrderDetail,
    setOrder,
  };
};

export default useMockPaymentDetail;
