import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/* import assets */
import { LuShoppingCart } from "react-icons/lu";
import avatarImg from "../../../../assets/images/noavatar.png";
import loadingImg from "../../../../assets/images/loading.jpg";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const HeaderIcons = () => {
  const userData = useSelector((state) => state.user.userData);
  const [isLoading, setIsLoading] = useState(true);
  const userPk = userData?.userPk || "notlogin";
  const profileImageUrl = userData?.profileImageUrl || avatarImg;

  return (
    <div className="flex gap-4 items-center">
      {/* 장바구니 버튼 */}
      <Link to={`/cart/${userPk}`} aria-label="장바구니">
        <LuShoppingCart className="text-gray-600 text-2xl hover:text-indigo-500" />
      </Link>

      {/* 내프로필 버튼 */}
      <Link to={`/myprofile/${userPk}`} aria-label="프로필 페이지">
        <img
          src={
            isLoading
              ? loadingImg
              : `${BASE_URL}${profileImageUrl}`
          }
          alt=" "
          className="w-7 h-7 rounded-full object-cover"
          onLoad={() => setIsLoading(false)}
        />


      </Link>
    </div>
  );
};

export default HeaderIcons;
