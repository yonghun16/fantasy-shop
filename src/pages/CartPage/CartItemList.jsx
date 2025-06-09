import { LuShoppingCart } from "react-icons/lu";

const CartItemList = () => {
  return (
    <div className="border rounded p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <LuShoppingCart className="w-5 h-5 text-indigo-500" />
        주문내역
      </h2>
    </div>
  );
};

export default CartItemList;
