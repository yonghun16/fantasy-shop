import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../shared/api/axios";
import { toast } from "react-toastify";

const deleteItem = async (itemPk) => {
  const response = await axiosInstance.delete(`/item/${itemPk}`);
  return response.data;
};

const useDeleteItem = () => {
  return useMutation({
    mutationFn: deleteItem,
    onSuccess: (data) => {
      toast.success(data || "삭제 완료되었습니다.");
    },
    onError: (error) => {
      const message = error.response?.data || error.message;
      toast.error(`삭제 실패: ${message}`);
    },
  });
};

export default useDeleteItem;
