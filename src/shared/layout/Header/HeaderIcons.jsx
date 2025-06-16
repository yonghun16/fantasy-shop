/* import libraries */
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

/* import assets */
import { LuShoppingCart } from "react-icons/lu";
import avatarImg from '../../../assets/images/noavatar.png';

/* UI */
const HeaderIcons = () => {
  /* import data */
  const importId = useSelector((state) => state.user.userData.userPk);
  const id = importId || 'notlogin';
  const profileImportImg = useSelector((state) => state.user.userData.profileImageUrl);
  const profileImg = profileImportImg || avatarImg;

  return (
    <div className="header__right-section flex gap-4">
      <Link to={`/cart/${id}`}>
        <LuShoppingCart className='text-gray-600 text-2xl hover:text-indigo-500' />
      </Link>

      <Link to={`/myprofile/${id}`}>
        <img
          className='w-7 h-7 rounded-full'
          src={profileImg}
          alt="profile"
        />
      </Link>
    </div>
  )
}

export default HeaderIcons
