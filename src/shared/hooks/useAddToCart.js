import axiosInstance from "../api/axios";
import { toast } from "react-toastify";

const useAddToCart = () => {
  const addToCart = async (product, count) => {
    if (!product || typeof count !== "number" || count <= 0) {
      toast.warn("잘못된 요청입니다.");
      return;
    }

    const stock = Number(product.itemInventory);

    if (isNaN(stock) || stock <= 0 || count > stock) {
      toast.warn("아이템의 잔여 수량이 없습니다.");
      return;
    }

    try {
      const res = await axiosInstance.post("/cart", {
        itemPk: product.itemPk,
        quantity: count,
      });

      toast.success(
        `"${product.itemName}"이(가) 장바구니에 추가되었습니다. (수량: ${res.data.quantity})`
      );
      console.log("장바구니 응답:", res.data);
    } catch (err) {
      toast.error("장바구니 추가에 실패했습니다.");
      console.error("장바구니 에러:", err);
    }
  };

  return addToCart;
};

export default useAddToCart;
