import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/* import assets */
import { LuShoppingCart } from "react-icons/lu";
import noAvatarImg from "../../../../assets/images/noavatar.png";
import loadingImg from "../../../../assets/images/loading.jpg";
const IMG_URL = import.meta.env.VITE_API_IMG_URL;


const HeaderIcons = () => {
  const userData = useSelector((state) => state.user.userData);

  const userPk = userData?.userPk || "notlogin";
  const [isLoading, setIsLoading] = useState(true);
  const profileImageUrl = userData?.profileImageUrl
    ? `${IMG_URL}${userData.profileImageUrl}`
    : noAvatarImg;

  return (
    <div className="flex gap-4 items-center">
      {/* 장바구니 버튼 */}
      <Link to={`/cart/${userPk}`} aria-label="장바구니">
        <LuShoppingCart className="text-gray-600 text-2xl hover:text-indigo-500" />
      </Link>

      {/* 내프로필 버튼 */}
      <Link to={`/myprofile/${userPk}`} aria-label="프로필 페이지">
        <img
          src={isLoading ? loadingImg : profileImageUrl}
          alt="프로필 이미지"
          className="w-7 h-7 rounded-full object-cover"
          onLoad={() => setIsLoading(false)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = noAvatarImg;
          }}
        />
      </Link>
    </div>
  );
};

export default HeaderIcons;
