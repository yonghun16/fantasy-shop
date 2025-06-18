import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/* import assets */
import { LuShoppingCart } from "react-icons/lu";
import avatarImg from "../../../assets/images/noavatar.png";


const HeaderIcons = () => {
  const userData = useSelector((state) => state.user.userData);
  const userPk = userData?.userPk || "notlogin";
  const profileImageUrl = userData?.profileImageUrl || avatarImg;

  return (
    <div className="flex gap-4 items-center">
      <Link to={`/cart/${userPk}`} aria-label="장바구니">
        <LuShoppingCart className="text-gray-600 text-2xl hover:text-indigo-500" />
      </Link>

      <Link to={`/myprofile/${userPk}`} aria-label="프로필 페이지">
        <img
          src={profileImageUrl}
          alt="profile"
          className="w-7 h-7 rounded-full object-cover"
        />
      </Link>
    </div>
  );
};

export default HeaderIcons;
