import clsx from "clsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";

/* assets */
import { LuPencil, LuUpload } from "react-icons/lu";
import { Button } from "../../shared/ui/Button";
import axiosInstance from "../../shared/api/axios";
import { toast } from "react-toastify";
import loadingImg from "../../assets/images/loading.jpg"


const ProfileImageSection = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const userData = useSelector((state) => state.user.userData);

  const isAdmin = useSelector((state) => state.user.userData.isAdmin);
  const [previewImage, setPreviewImage] = useState(userData.profileImageUrl);
  const [isLoading, setIsLoading] = useState(true);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setPreviewImage(userData.profileImageUrl);
  }, [userData.profileImageUrl]);

  // 이미지 업로드 처리 함수
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
      console.log(res.data)
      // 서버에서 응답된 이미지 URL로 업데이트
      setPreviewImage(res.data.profileImageUrl);
    } catch (err) {
      toast.error("프로필 업로드 실패");
      console.error(err);
    }
  };

  return (
    <div className="md:w-1/3 flex flex-col self-center md:self-start">
      <div className="flex flex-col items-center">
        <div className="relative">
          {/* 프로필 이미지 */}
          <img
            src={
              isLoading
                ? loadingImg
                : `${BASE_URL}${previewImage}`
            }
            alt=" "
            className="w-50 h-50 rounded-full object-cover border-none"
            onLoad={() => setIsLoading(false)}
          />

          {/* 숨겨진 파일 선택 input */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />

          {/* 프로필 이미지 편집 버튼 */}
          <button
            className="absolute bottom-3 right-3 bg-indigo-500 text-white p-3 rounded-full shadow cursor-pointer hover:bg-indigo-400 transition-colors duration-100"
            onClick={() => fileInputRef.current.click()}
          >
            <LuPencil size={20} />
          </button>
        </div>

        {/* 아이템 등록 버튼 */}
        <Button
          color="rose"
          icon={<LuUpload size={20} />}
          className={clsx(
            " mt-4 font-semibold ",
            isAdmin && "flex",
            !isAdmin && "hidden"
          )}
        >
          <Link to="/uploadproduct">아이템 등록</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProfileImageSection;
