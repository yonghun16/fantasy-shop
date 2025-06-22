import { useNavigate } from "react-router-dom";
import { postItem } from "../../shared/api/itemUpload";
import { toast } from "react-toastify";

export const useItemUpload = (resetForm) => {
  const navigate = useNavigate();

  const uploadItem = async (payload) => {
    try {
      const res = await postItem(payload);
      toast.success(`${res.itemDescription} 아이템이 등록 되었습니다`);
      if (resetForm) resetForm();
      navigate("/");
    } catch (err) {
      toast.error("등록에 실패했습니다.");
    }
  };

  return { uploadItem };
};
