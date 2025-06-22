import { LuMinus, LuPlus, LuShoppingCart, LuTrash2 } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useCartItems } from "../../features/cart/useCartItems";
import useDeleteCartItems from "../../features/cart/useDeleteCartItems";
import {
  decreaseQuantityAsync,
  increaseQuantityAsync,
} from "../../features/cart/cartThunk";

const CartItemList = () => {
  const dispatch = useDispatch();
  useCartItems();
  const cartItems = useSelector((state) => state.cart.items);
  const isLoading = useSelector((state) => state.cart.isLoading);

  console.log(cartItems);

  const { handleDeleteCartItem } = useDeleteCartItems();

  return (
    <div className="border border-gray-300 rounded-md p-6 bg-white">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <LuShoppingCart className="w-5 h-5 text-indigo-500" />
        주문내역
      </h2>

      {isLoading ? (
        <div className="flex justify-center m-10">Loading...</div>
      ) : cartItems.length === 0 ? (
        <p className="text-gray-500">장바구니가 비어 있습니다.</p>
      ) : (
        <ul className="space-y-6">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex flex-wrap items-start justify-between border-b border-gray-200 pb-4"
            >
              {/* 이미지 + 아이템 정보 */}
              <div className="flex items-center gap-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <p className="font-medium whitespace-nowrap">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {(item?.price ?? 0).toLocaleString()} G
                  </p>
                </div>
              </div>

              {/* 수량 + 가격 + 삭제 버튼 */}
              <div className="flex items-center gap-6 mt-4 w-full justify-end sm:mt-0 sm:w-auto">
                <div className="flex items-center border rounded-md">
                  <LuMinus
                    onClick={() => dispatch(decreaseQuantityAsync(item))}
                    className="w-6 h-6 text-lg font-bold flex items-center justify-center border-r px-1 text-gray-700 cursor-pointer"
                  />
                  <span className="w-6 text-center">{item.quantity}</span>
                  <LuPlus
                    onClick={() => dispatch(increaseQuantityAsync(item))}
                    className="w-6 h-6 text-lg font-bold flex items-center justify-center border-l px-1 text-gray-700 cursor-pointer"
                  />
                </div>
                <p className="text-indigo-600 font-semibold min-w-[60px] text-right">
                  {(item?.price ?? 0) * (item?.quantity ?? 0).toLocaleString()} G
                </p>
                <LuTrash2
                  onClick={() => handleDeleteCartItem(item.cartPk)}
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
