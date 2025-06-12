import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addItem } from "../../features/cart/cartSlice";

const useAddToCart = () => {
  const dispatch = useDispatch();

  const addToCart = (product, quantity = 1) => {
    const { id, name, price, image } = product;

    dispatch(
      addItem({
        id: Number(id),
        name,
        price,
        quantity,
        imageUrl: image,
      })
    );

    toast.success("장바구니에 아이템이 추가되었습니다!");
  };

  return addToCart;
};

export default useAddToCart;
