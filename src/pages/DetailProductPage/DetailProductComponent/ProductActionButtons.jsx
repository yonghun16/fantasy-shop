import { useState } from "react";
import { useSelector } from "react-redux";
import { LuShoppingCart, LuRefreshCcw, LuPackageX } from "react-icons/lu";
import { Button } from "../../../shared/ui/Button";
import { useNavigate } from "react-router-dom";
import useAddToCart from "../../../shared/hooks/useAddToCart";
import EditProductModal from "./DetailProductModal/EditProductModal";
import DeleteConfirmModal from "./DetailProductModal/DeleteConfirmModal";
import "react-toastify/dist/ReactToastify.css";

const ProductActionButtons = ({ product, count }) => {
  const addToCart = useAddToCart();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const isAdmin = useSelector((state) => state.user.userData?.isAdmin);

  const handleAddToCart = () => addToCart(product, count);
  const handleDeleteSuccess = () => navigate("/");

  return (
    <>
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
          <div className="flex gap-3">
            <Button
              color="rose"
              size="md"
              className="flex-1 flex justify-center gap-2"
              icon={<LuRefreshCcw />}
              iconPosition="left"
              onClick={() => setIsEditing(true)}
            >
              아이템 정보 수정하기
            </Button>

            <Button
              color="gray"
              size="md"
              className="flex-1"
              icon={<LuPackageX />}
              onClick={() => setIsDeleting(true)}
            >
              아이템 삭제하기
            </Button>
          </div>
        )}
      </div>

      {/* 모달 영역 */}
      <EditProductModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        product={product}
      />

      <DeleteConfirmModal
        isOpen={isDeleting}
        onClose={() => setIsDeleting(false)}
        itemPk={product.itemPk}
        onDeleteSuccess={handleDeleteSuccess}
      />
    </>
  );
};

export default ProductActionButtons;
