import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../shared/api/axios";
import { toast } from "react-toastify";

const useProfileImageUpload = () => {
  const userData = useSelector((state) => state.user.userData);
  const [previewImage, setPreviewImage] = useState(userData.profileImageUrl);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userData.profileImageUrl) {
      setPreviewImage(userData.profileImageUrl);
    }
  }, [userData.profileImageUrl]);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // 프론트에서 미리보기용
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);

    // 서버에 업로드
    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      const res = await axiosInstance.put("/users/me", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("프로필 이미지가 업로드되었습니다.");
      // 실제 이미지 반영 (보통 서버에서 이미지 URL을 돌려줌)
      if (res.data?.profileImageUrl) {
        setPreviewImage(res.data.profileImageUrl);
      }
    } catch (err) {
      toast.error("프로필 업로드 실패");
      console.error(err);
    }
  };

  return {
    previewImage,
    isLoading,
    setIsLoading,
    handleImageChange,
  };
};

export default useProfileImageUpload;
