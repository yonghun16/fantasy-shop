import { useNavigate } from "react-router-dom";
import { postItem } from "../../shared/api/itemUpload";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

export const useItemUpload = (resetForm) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const uploadItem = async (payload) => {
    try {
      const res = await postItem(payload);
      toast.success(`"${res.itemName}" 아이템이 등록 되었습니다`);

      queryClient.invalidateQueries({ queryKey: ["products"] });

      if (resetForm) resetForm();
      navigate("/");
    } catch (err) {
      toast.error("등록에 실패했습니다.");
    }
  };

  return { uploadItem };
};
