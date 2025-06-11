import { LuShoppingCart, LuTrash, LuTrash2 } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from "../../features/cart/cartSlice";

const CartItemList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="border border-gray-300 rounded-md p-6 bg-white">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <LuShoppingCart className="w-5 h-5 text-indigo-500" />
        주문내역
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">장바구니가 비어 있습니다.</p>
      ) : (
        <ul className="space-y-6">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b border-gray-200 pb-4"
            >
              {/*이미지 + 아이템 정보보*/}
              <div className="flex items-center gap-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.price.toLocaleString()} G
                  </p>
                </div>
              </div>

              {/*수량+가격*/}
              <div className="flex items-center gap-6">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="w-6 h-6 text-md flex items-center justify-center border-r px-1 text-gray-700 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="w-6 h-6 text-md flex items-center justify-center border-l px-1 text-gray-700 cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <p className="text-indigo-600 font-semibold min-w-[60px] text-right">
                  {(item.price * item.quantity).toLocaleString()}G
                </p>

                {/*아이템 삭제*/}
                <LuTrash2
                  onClick={() => dispatch(deleteItem(item.id))}
                  className="cursor-pointer"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartItemList;
