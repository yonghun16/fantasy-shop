import { Button } from "../../../../shared/ui/Button";
import useDeleteItem from "../../../../features/DetailProduct/useDeleteItem";

const DeleteConfirmModal = ({ isOpen, onClose, itemPk, onDeleteSuccess }) => {
  const { mutate: deleteItem } = useDeleteItem();

  const handleDelete = () => {
    deleteItem(itemPk, {
      onSuccess: () => {
        onDeleteSuccess?.();
        onClose();
      },
    });
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-xl w-80">
          <h2 className="text-lg font-semibold mb-4">정말 삭제하시겠습니까?</h2>
          <p className="text-sm text-gray-600 mb-6">
            삭제하면 되돌릴 수 없습니다. 계속 진행할까요?
          </p>
          <div className="flex justify-end gap-3">
            <Button color="rose" onClick={handleDelete}>
              삭제하기
            </Button>
            <Button color="gray" onClick={onClose}>
              취소
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteConfirmModal;
