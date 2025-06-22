import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../../../shared/ui/Button";
import useDeleteItem from "../../../../features/DetailProduct/useDeleteItem";
import { closeDeleteModal } from "../../../../features/DetailProduct/modalSlice";

const DeleteConfirmModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate: deleteItem, isLoading } = useDeleteItem();
  const { deleteModal } = useSelector((state) => state.modal);

  const handleDelete = () => {
    deleteItem(deleteModal.itemPk, {
      onSuccess: (data) => {
        dispatch(closeDeleteModal());
        toast.success(data || "삭제가 완료되었습니다!");
        navigate("/");
      },
      onError: (error) => {
        const message = error.response?.data || error.message;
        toast.error(`삭제 실패: ${message}`);
      },
    });
  };

  if (!deleteModal.isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80">
        <h2 className="text-lg font-semibold mb-4">정말 삭제하시겠습니까?</h2>
        <p className="text-sm text-gray-600 mb-6">
          삭제하면 되돌릴 수 없습니다. 계속 진행할까요?
        </p>
        <div className="flex justify-end gap-3">
          <Button color="rose" onClick={handleDelete} disabled={isLoading}>
            {isLoading ? "삭제 중..." : "삭제하기"}
          </Button>
          <Button
            color="gray"
            onClick={() => dispatch(closeDeleteModal())}
            disabled={isLoading}
          >
            취소
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
