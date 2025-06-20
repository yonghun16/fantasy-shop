import axiosInstance from "../api/axios";
import { toast } from "react-toastify";

const useAddToCart = () => {
  const addToCart = async (product, count) => {
    if (!product || typeof count !== "number" || count <= 0) {
      toast.warn("잘못된 요청입니다.");
      return;
    }

    const stock = Number(product.itemInventory);

    if (isNaN(stock) || stock <= 0) {
      toast.warn("아이템의 잔여 수량이 없습니다.");
      return;
    }

    try {
      // 1. 장바구니 데이터 가져오기
      const cartRes = await axiosInstance.get("/cart");

      // 2. 같은 itemPk가 담겨 있는지 확인
      const cartItem = cartRes.data.find(
        (item) => item.itemPk === product.itemPk
      );

      const existingQuantity = cartItem ? cartItem.quantity : 0;

      // 3. 재고 초과 여부 확인
      if (existingQuantity + count > stock) {
        toast.warn(
          `"${product.itemName}"은(는) 최대 ${stock}개까지 담을 수 있습니다. (현재 장바구니에 ${existingQuantity}개 담김)`
        );
        return;
      }

      // 4. 장바구니 추가
      const res = await axiosInstance.post("/cart", {
        itemPk: product.itemPk,
        quantity: count,
      });

      toast.success(
        `"${product.itemName}"이(가) 장바구니에 추가되었습니다. (총 수량: ${res.data.quantity})`
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
