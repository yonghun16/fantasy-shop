import { LuShoppingCart, LuRefreshCcw, LuPackageX } from "react-icons/lu";
import { Button } from "../../shared/ui/Button";
import "react-toastify/dist/ReactToastify.css";
import useAddToCart from "../../shared/hooks/useAddToCart";

const ProductActionButtons = ({ product, count }) => {
  const addToCart = useAddToCart();

  return (
    <div className="flex flex-col gap-3">
      <Button
        color="indigo"
        size="md"
        className="w-full flex justify-center gap-2"
        icon={<LuShoppingCart />}
        iconPosition="left"
        onClick={() => addToCart(product, count)}
      >
        장바구니에 담기
      </Button>

      <div className="flex gap-3">
        <Button
          color="rose"
          size="md"
          className="flex-1 flex justify-center gap-2"
          icon={<LuRefreshCcw />}
          iconPosition="left"
        >
          아이템 정보 수정하기
        </Button>

        <Button color="gray" size="md" className="flex-1" icon={<LuPackageX />}>
          아이템 삭제하기
        </Button>
      </div>
    </div>
  );
};

export default ProductActionButtons;
