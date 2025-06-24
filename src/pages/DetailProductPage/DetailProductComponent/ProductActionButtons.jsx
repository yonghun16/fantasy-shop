import { useDispatch } from "react-redux";
import { LuShoppingCart, LuRefreshCcw, LuPackageX } from "react-icons/lu";
import { Button } from "../../../shared/ui/Button";
import useProductActions from "../../../features/DetailProduct/useProductActions";
import {
  openEditModal,
  openDeleteModal,
} from "../../../features/modal/modalSlice";

const ProductActionButtons = ({ product, count }) => {
  const { isAdmin, handleAddToCart } = useProductActions(product, count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-3">
      <Button
        color="indigo"
        size="md"
        className="w-full flex justify-center gap-2"
        icon={<LuShoppingCart />}
        iconPosition="left"
        onClick={handleAddToCart}
      >
        장바구니에 담기
      </Button>

      {isAdmin && (
        <div className="flex flex-wrap gap-3">
          <Button
            color="rose"
            size="md"
            className="flex-1 flex justify-center gap-2"
            icon={<LuRefreshCcw />}
            iconPosition="left"
            onClick={() => dispatch(openEditModal(product))}
          >
            아이템 정보 수정하기
          </Button>

          <Button
            color="gray"
            size="md"
            className="flex-1"
            icon={<LuPackageX />}
            onClick={() => dispatch(openDeleteModal(product.itemPk))}
          >
            아이템 삭제하기
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductActionButtons;
