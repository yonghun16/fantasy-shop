import { format } from "date-fns";
import { Button } from "../../shared/ui/Button";

const OrderDetailModal = ({ isOpen, onClose, order }) => {
  if (!isOpen || !order) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-full max-w-md shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold mb-4">주문 상세</h2>

        <div className="mb-3">
          <strong>주문 번호:</strong> #{order.paymentPk}
        </div>

        <div className="mb-3">
          <strong>결제일:</strong>{" "}
          {format(new Date(order.paymentDate), "yyyy-MM-dd HH:mm")}
        </div>

        <div className="mb-3">
          <strong>총 금액:</strong> {order.totalPrice.toLocaleString()} G
        </div>

        <div className="mt-4">
          <strong>아이템 목록:</strong>
          <ul className="mt-3 space-y-3">
            {order.items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-8 h-8 object-cover rounded"
                />
                <span>
                  {item.name} / {item.quantity}개
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Button onClick={onClose} className="mt-5">
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailModal;
