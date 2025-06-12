import { LuCreditCard } from "react-icons/lu";
import { Button } from "../../shared/ui/Button";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const itemTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="border border-gray-300 rounded p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <LuCreditCard className="w-5 h-5 text-indigo-500" />
        결제
      </h2>

      {/* 카드 정보 */}
      <div className="bg-gray-100 px-5 py-3 rounded flex justify-between items-center mb-4 text-sm">
        <span className="text-gray-800">주인님카드 **** 5987 </span>
        <button className="text-indigo-400 font-medium cursor-pointer">
          변경
        </button>
      </div>

      {/* 금액 상세 */}
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-600">아이템 총액</span>
        <span>{itemTotal.toLocaleString()}G</span>
      </div>

      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-600">할인</span>
        <span>0 G</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-sm text-gray-600">배달비</span>
        <span>0 G</span>
      </div>

      {/* 총 결제 금액 */}
      <div className="flex justify-between font-semibold text-lg mb-6">
        <span>총 결제금액</span>
        <span className="text-pink-600">{itemTotal.toLocaleString()}G</span>
      </div>

      <Button color="indigo" size="md" className="w-full cursor-pointer">
        결제하기
      </Button>
    </div>
  );
};
export default CartSummary;
