import { useCallback } from "react";
import { useSelector } from "react-redux";
import { postPayment } from "../../shared/api/cart";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export const usePayment = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart?.items ?? []);
  const { id } = useParams();

  const handlePayment = useCallback(async () => {
    try {
      const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      const payload = {
        paymentPk: null,
        paymentDate: new Date().toISOString(),
        totalPrice,
        paymentStatus: "paid",
        items: cartItems.map((item) => ({
          itemPk: item.id,
          itemName: item.name,
          quantity: item.quantity,
          priceAtOrderTime: item.price,
        })),
      };
      if (payload.totalPrice > 0) {
        await postPayment(payload);
        toast.success("결제가 완료되었습니다");
        navigate(`/history/${id}`);
      } else {
        toast.error("장바구니에 아이템을 추가해주세요.");
      }
    } catch (error) {
      console.log("결제오류", error);
      toast.error("결제에 실패했습니다.");
    }
  }, [cartItems]);
  return { handlePayment };
};
