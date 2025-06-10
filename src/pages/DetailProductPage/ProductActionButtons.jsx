import { FiShoppingCart, FiEdit } from "react-icons/fi";
import { Button } from "../../shared/ui/Button";

const ProductActionButtons = () => (
  <div className="flex flex-col gap-3">
    <Button
      color="indigo"
      size="md"
      className="w-full flex justify-center gap-2"
      icon={<FiShoppingCart />}
      iconPosition="left"
    >
      장바구니에 담기
    </Button>

    <div className="flex gap-3">
      <Button
        color="rose"
        size="md"
        className="flex-1 flex justify-center gap-2"
        icon={<FiEdit />}
        iconPosition="left"
      >
        아이템 정보 수정하기
      </Button>

      <Button color="gray" size="md" className="flex-1">
        아이템 삭제하기
      </Button>
    </div>
  </div>
);

export default ProductActionButtons;
