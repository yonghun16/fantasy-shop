import { useState } from "react";
import OrderItemRow from "./OrderItemRow";
import OrderDetailModal from "./OrderDetailModal";
import useGetOrderDetail from "../../features/history/useGetOrderDetail";

const OrderList = ({ orders }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { orderDetail, fetchOrderDetail, setOrderDetail } = useGetOrderDetail();

  const handleOrderClick = async (paymentPk) => {
    const detail = await fetchOrderDetail(paymentPk);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setOrderDetail(null);
  };

  return (
    <>
      {orders.map((order) => (
        <OrderItemRow
          key={order.paymentPk}
          order={order}
          onClick={() => handleOrderClick(order.paymentPk)}
        />
      ))}

      <OrderDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        orderDetail={orderDetail}
      />
    </>
  );
};

export default OrderList;
