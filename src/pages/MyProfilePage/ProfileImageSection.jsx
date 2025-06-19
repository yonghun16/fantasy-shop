import clsx from "clsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/* assets */
import { LuPencil, LuUpload } from "react-icons/lu";
import { Button } from "../../shared/ui/Button";


const ProfileImageSection = ({userData}) => {
  const isAdmin = useSelector((state) => state.user.userData.isAdmin);

  console.log(userData)
  return (
    <div className="md:w-1/3 flex flex-col self-center md:self-start">
      <div className="flex flex-col items-center">
        <div className="relative">
          {/* 프로필 이미지 */}
          <img
            src={userData.profileImageUrl}
            alt="Profile"
            className="w-50 h-50 rounded-full object-cover border-4 border-white"
          />

          {/* 프로필 이미지 편집 버튼 */}
          <button className="absolute bottom-3 right-3 bg-indigo-500 text-white p-3 rounded-full shadow cursor-pointer hover:bg-indigo-400 transition-colors duration-100">
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
          <Link to="/uploadproduct">
            아이템 등록
          </Link>
        </Button>
      </div>
    </div >
  );
};

export default ProfileImageSection;
