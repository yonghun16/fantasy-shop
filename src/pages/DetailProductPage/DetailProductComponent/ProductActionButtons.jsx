import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { LuShoppingCart, LuRefreshCcw, LuPackageX } from "react-icons/lu";
import { Button } from "../../../shared/ui/Button";
import { useNavigate } from "react-router-dom";
import useAddToCart from "../../../shared/hooks/useAddToCart";
import EditProductModal from "./DetailProductModal/EditProductModal";
import DeleteConfirmModal from "./DetailProductModal/DeleteConfirmModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductActionButtons = ({ product, count }) => {
  const addToCart = useAddToCart();
  const navigate = useNavigate();

  // 수정 모달, 삭제 모달의 열림 여부 상태
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // 현재 로그인한 사용자가 관리자(admin)인지 여부 확인
  const isAdmin = useSelector((state) => state.user.userData?.isAdmin);

  // 새로고침 후 localStorage에 저장된 토스트 메시지가 있으면 띄워주기
  useEffect(() => {
    const toastMessage = localStorage.getItem("toastMessage");
    if (toastMessage) {
      toast.success(toastMessage);
      localStorage.removeItem("toastMessage"); // 메시지 제거
    }
  }, []);

  // 장바구니 담기 클릭 핸들러
  const handleAddToCart = () => {
    // localStorage에서 accessToken 읽기
    const token = localStorage.getItem("accessToken");
    if (!token) {
      // 로그인 안된 상태면 로그인 페이지로 이동
      navigate("/login");
      toast.warn("장바구니는 로그인 후 이용 가능합니다.");
      return;
    }
    // 로그인 되어있으면 장바구니 추가 실행
    addToCart(product, count);
  };

  // 삭제 성공 시 메인 페이지로 이동
  const handleDeleteSuccess = () => navigate("/");

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* 장바구니 담기 버튼 */}
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

        {/* 관리자만 볼 수 있는 수정/삭제 버튼 */}
        {isAdmin && (
          <div className="flex gap-3">
            {/* 아이템 수정 버튼 */}
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

            {/* 아이템 삭제 버튼 */}
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

      {/* 수정 모달 */}
      <EditProductModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        product={product}
      />

      {/* 삭제 확인 모달 */}
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
