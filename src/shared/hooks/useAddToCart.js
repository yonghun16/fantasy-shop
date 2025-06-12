import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addItem } from "../../features/cart/cartSlice";

const useAddToCart = () => {
  // Redux store에 액션을 보내기 위해 dispatch 함수를 가져옵니다.
  const dispatch = useDispatch();

  // product - 상품 정보 객체입니다. (id, name, price, image 등을 포함)
  // quantity - 추가할 수량입니다. 기본값은 1입니다.
  const addToCart = (product, quantity = 1) => {
    // product 객체에서 필요한 값만 구조 분해 할당으로 추출합니다.
    const { id, name, price, image } = product;

    // Redux store에 addItem 액션을 보냅니다.
    // 이 액션은 cartSlice에서 처리되어 장바구니 상태가 업데이트됩니다.
    dispatch(
      addItem({
        id: Number(id), // 더미데이터의 id는 string이기 때문에 number로 변환
        name,
        price,
        quantity,
        imageUrl: image,
      })
    );

    // 사용자에게 알림 메시지를 보여줍니다.
    toast.success("장바구니에 아이템이 추가되었습니다!");
  };

  return addToCart;
};

export default useAddToCart;
