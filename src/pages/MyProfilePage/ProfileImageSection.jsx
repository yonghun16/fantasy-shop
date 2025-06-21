import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";

/* hook */
import useProfileImageUpload from "../../features/myprofile/useProfileImageUpload";

/* assets */
import { LuPencil, LuUpload } from "react-icons/lu";
import { Button } from "../../shared/ui/Button";
import loadingImg from "../../assets/images/loading.jpg";


const ProfileImageSection = () => {
  const userData = useSelector((state) => state.user.userData);
  const isAdmin = userData.isAdmin;

  // 유저데이터의 이미지를 불러옴
  const {
    BASE_URL, previewImage,
    isLoading, setIsLoading,
    handleImageChange,
  } = useProfileImageUpload();

  const fileInputRef = useRef(null);

  return (
    <div className="md:w-1/3 flex flex-col self-center md:self-start">
      <div className="flex flex-col items-center">
        <div className="relative">

          {/* 프로필 사진 이미지 */}
          <img
            src={isLoading ? loadingImg : `${BASE_URL}${previewImage}`}
            alt=" "
            className="w-50 h-50 rounded-full object-cover border-none"
            onLoad={() => setIsLoading(false)}
          />

          {/* 프로필 이미지 변경 버튼 */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef} // 외부에서 이 input을 조작할 수 있도록 참조
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <button
            className="absolute bottom-3 right-3 bg-indigo-500 text-white p-3 rounded-full shadow cursor-pointer hover:bg-indigo-400 transition-colors duration-100"
            onClick={() => fileInputRef.current.click()}
          >
            <LuPencil size={20} />
          </button>
        </div>

        {/* 아이템 업로드 버튼(관리자만 보임) */}
        <Button
          color="rose"
          icon={<LuUpload size={20} />}
          className={clsx("mt-4 font-semibold", isAdmin ? "flex" : "hidden")}
        >
          <Link to="/uploadproduct">아이템 등록</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProfileImageSection;
