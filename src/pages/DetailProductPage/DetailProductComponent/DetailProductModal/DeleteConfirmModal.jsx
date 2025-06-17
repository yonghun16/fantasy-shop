import axiosInstance from "../../../../shared/api/axios";
import { Button } from "../../../../shared/ui/Button";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ isOpen, onClose, itemPk, onDeleteSuccess }) => {
  if (!isOpen) return null;

  const handleDelete = async () => {
    try {
      const res = await axiosInstance.delete(`/item/${itemPk}`);
      toast.success(res.data); // 서버 메시지 출력
      onDeleteSuccess?.(); // 삭제 성공 후 콜백
      onClose(); // 모달 닫기
    } catch (error) {
      toast.error("삭제 실패: " + (error.response?.data || error.message));
    }
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80">
        <h2 className="text-lg font-semibold mb-4">정말 삭제하시겠습니까?</h2>
        <p className="text-sm text-gray-600 mb-6">
          삭제하면 되돌릴 수 없습니다. 계속 진행할까요?
        </p>
        <div className="flex justify-end gap-3">
          <Button color="gray" onClick={onClose}>
            취소
          </Button>
          <Button color="rose" onClick={handleDelete}>
            삭제하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
