import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../shared/api/axios";
import { toast } from "react-toastify";

const useProfileImageUpload = () => {
  const userData = useSelector((state) => state.user.userData);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [previewImage, setPreviewImage] = useState(userData.profileImageUrl);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setPreviewImage(userData.profileImageUrl);
  }, [userData.profileImageUrl]);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // 미리보기용 URL 설정
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);

    // FormData로 서버 업로드
    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      const res = await axiosInstance.put("/users/me", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("프로필 이미지가 업로드되었습니다.");
      setPreviewImage(res.data.profileImageUrl);
    } catch (err) {
      toast.error("프로필 업로드 실패");
      console.error(err);
    }
  };

  return {
    BASE_URL,
    previewImage,
    isLoading,
    setIsLoading,
    handleImageChange,
  };
};

export default useProfileImageUpload;
