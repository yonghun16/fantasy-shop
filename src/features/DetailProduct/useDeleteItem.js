import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../shared/api/axios";

const deleteItem = async (itemPk) => {
  const response = await axiosInstance.delete(`/item/${itemPk}`);
  return response.data;
};

const useDeleteItem = () => {
  return useMutation({
    mutationFn: deleteItem,
  });
};

export default useDeleteItem;
