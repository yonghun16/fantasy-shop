import { format } from "date-fns";
const OrderList = ({ orders }) => {
  return (
    <>
      {orders.map((order) => (
        <div
          key={order.paymentPk}
          className="grid grid-cols-4 p-4 border-b border-gray-300 text-sm items-start"
        >
          {/* 주문 ID */}
          <div
            className="text-indigo-600 font-medium cursor-pointer"
            onClick={() => {
              alert("/");
            }}
          >
            #{order.paymentPk}
          </div>

          {/* 날짜 */}
          <div>
            {format(new Date(order.paymentDate), "MMM dd, yyyy, h:mm a")}
          </div>

          {/* 아이템 목록 */}
          <div className="space-y-2">
            {order.items?.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-8 h-8 rounded object-cover"
                />
                <span>
                  {item.name} ({item.quantity})
                </span>
              </div>
            ))}
          </div>

          {/* 총 금액 */}
          <div className="text-right text-pink-600 font-semibold">
            {order.totalPrice.toLocaleString()} G
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderList;
