import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteCartItems } from "../../shared/api/cart";
import { deleteItem } from "./cartSlice";

const useDeleteCartItems = () => {
  const dispatch = useDispatch();

  const handleDeleteCartItem = async (cartPk) => {
    try {
      await deleteCartItems(cartPk);
      dispatch(deleteItem(cartPk));
      toast.success("아이템이 삭제되었습니다.");
    } catch (err) {
      console.error("장바구니 아이템 삭제 실패", err);
      toast.error("삭제에 실패했습니다.");
    }
  };

  return { handleDeleteCartItem };
};

export default useDeleteCartItems;
