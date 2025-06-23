import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../shared/api/axios";

const deleteItem = async (itemPk) => {
  const response = await axiosInstance.delete(`/item/${itemPk}`);
  return response.data;
};

const useDeleteItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      // 상품 목록 쿼리 무효화 → 자동 재요청 (refetch)
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export default useDeleteItem;
