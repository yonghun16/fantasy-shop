import { useCallback } from "react";
import axiosInstance from "../../../../shared/api/axios";
import { Button } from "../../../../shared/ui/Button";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ isOpen, onClose, itemPk, onDeleteSuccess }) => {
  // 삭제 요청을 처리하는 함수
  const handleDelete = useCallback(async () => {
    try {
      const response = await axiosInstance.delete(`/item/${itemPk}`);
      toast.success(response.data);
      onDeleteSuccess?.();
      onClose();
    } catch (error) {
      const message = error.response?.data || error.message;
      toast.error(`삭제 실패: ${message}`);
    }
  }, [itemPk, onDeleteSuccess, onClose]);

  return (
    isOpen && (
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-xl w-80">
          {/* 모달 제목 */}
          <h2 className="text-lg font-semibold mb-4">정말 삭제하시겠습니까?</h2>

          {/* 경고 메시지 */}
          <p className="text-sm text-gray-600 mb-6">
            삭제하면 되돌릴 수 없습니다. 계속 진행할까요?
          </p>

          <div className="flex justify-end gap-3">
            {/* 삭제 버튼 */}
            <Button color="rose" onClick={handleDelete}>
              삭제하기
            </Button>

            {/* 취소 버튼 */}
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
