import { LuShoppingCart } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../features/cart/cartSlice";

const CartItemList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="border border-gray-400 rounded p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <LuShoppingCart className="w-5 h-5 text-indigo-500" />
        주문내역
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">장바구니가 비어 있습니다.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center gap-4 border-b border-gray-300 pb-4"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-16 h-16 rounded object-cover"
              />

              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.price.toLocaleString()}원
                </p>
                <div className="flex items-center mt-2 w-fit">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="w-5 h-5 text-md flex items-center justify-center border border-indigo-500 rounded-md cursor-pointer mr-2"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="w-5 h-5 text-md flex items-center justify-center border border-indigo-500 rounded-md cursor-pointer ml-2"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="font-semibold">
                {(item.price * item.quantity).toLocaleString()}원
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartItemList;
