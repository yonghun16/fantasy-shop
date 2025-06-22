import { format } from "date-fns";

const OrderItemRow = ({ order, onClick }) => {
  return (
    <div
      key={order.paymentPk}
      className="grid grid-cols-3 p-4 border-b border-gray-300 text-sm items-center"
    >
      {/* 주문 ID */}
      <div
        className="text-indigo-600 font-medium cursor-pointer text-left"
        onClick={onClick}
      >
        #{order.paymentPk}
      </div>

      {/* 날짜 */}
      <div>{format(new Date(order.paymentDate), "MMM dd, yyyy, h:mm a")}</div>

      {/* 총 금액 */}
      <div className="text-right text-rose-500 font-semibold">
        {order.totalPrice.toLocaleString()} G
      </div>
    </div>
  );
};

export default OrderItemRow;
