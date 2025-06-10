import { LuCreditCard } from "react-icons/lu";
import { Button } from "../../shared/ui/Button";

const CartSummary = () => {
  return (
    <div className="border border-gray-400 rounded p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <LuCreditCard className="w-5 h-5 text-indigo-500" />
        결제
      </h2>

      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-600">아이템 총액</span>
        <span>Gold</span>
      </div>

      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-600">할인</span>
        <span>- 0.00 Gold</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-sm text-gray-600">배달비</span>
        <span>0.00 Gold</span>
      </div>

      <div className="flex justify-between font-semibold text-lg mb-6">
        <span>총 결제금액</span>
        <span className="text-pink-600"> Gold</span>
      </div>

      <Button color="indigo" size="md" className="w-full">
        결제하기
      </Button>
    </div>
  );
};
export default CartSummary;
