import axiosInstance from "../api/axios";
import { toast } from "react-toastify";

const useAddToCart = () => {
  const addToCart = async (product, count) => {
    if (
      !product ||
      !product.quantity ||
      Number(count) <= 0 ||
      Number(product.quantity) <= 0
    ) {
      toast.warn("아이템의 잔여 수량이 없습니다.");
      return;
    }

    try {
      const response = await axiosInstance.post("/cart", {
        itemPk: product.itemPk,
        quantity: count,
      });

      const { quantity } = response.data;

      toast.success(
        `"${product.itemName}"이(가) 장바구니에 추가되었습니다. (수량: ${quantity})`
      );

      console.log("장바구니 응답:", response.data);
    } catch (error) {
      toast.error("장바구니 추가에 실패했습니다.");
      console.error("장바구니 에러:", error);
    }
  };

  return addToCart;
};

export default useAddToCart;
