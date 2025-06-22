import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../shared/api/axios";
import { toast } from "react-toastify";

const useEditProduct = (onSuccessCallback) => {
  return useMutation({
    mutationFn: async ({ productPk, formData }) => {
      return await axiosInstance.put(`/item/${productPk}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => {
      // 새로고침 후 보여줄 메시지를 로컬스토리지에 저장
      localStorage.setItem("toastMessage", "상품 정보가 수정되었습니다.");
      if (typeof onSuccessCallback === "function") onSuccessCallback();
    },
    onError: (error) => {
      console.error(error);
      toast.error("상품 수정 실패");
    },
  });
};

export default useEditProduct;
