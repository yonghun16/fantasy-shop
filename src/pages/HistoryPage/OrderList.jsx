import { useState } from "react";
import { mockOrders } from "./mockData";
import OrderItemRow from "./OrderItemRow";
import useMockPaymentDetail from "../../features/history/useMockPaymentDetail";
import OrderDetailModal from "./OrderDetailModal";

const OrderList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { order, fetchOrderDetail, setOrder } = useMockPaymentDetail();

  const handleOrderClick = async (paymentPk) => {
    await fetchOrderDetail(paymentPk);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setOrder(null);
  };

  return (
    <>
      {mockOrders.map((order) => (
        <OrderItemRow
          key={order.paymentPk}
          order={order}
          onClick={() => handleOrderClick(order.paymentPk)}
        />
      ))}

      <OrderDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        order={order}
      />
    </>
  );
};

export default OrderList;
