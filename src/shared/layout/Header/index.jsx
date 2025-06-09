/* import libraries */
import { Link } from 'react-router-dom'
import clsx from 'clsx';

/* import assets */
import logoImg from '../../../assets/images/logo.png'
import { LuShoppingCart } from "react-icons/lu";
import avagaImg from '../../../assets/images/noavatar.png';


/* tailwind styles */
const headerWrapperStyle = clsx(
  "bg-gray-50 w-full h-12 p-5",
  "flex items-center justify-between",
  "border-b border-gray-200 shadow-sm"
)

/* dummy data */
const shopName = "판타지 쇼핑몰";
const id = "myid";
const profileImg = avagaImg;


/* UI */
const Header = () => {
  return (
    <div
      className={clsx(
        "header__wrapper",
        headerWrapperStyle
      )}>

      <div className="header__left-section">
        <Link
          className="flex items-center gap-2"
          to="/"
        >
          <img
            className='w-10 h-10'
            src={logoImg}
            alt="logo"
          />
          <p>{shopName}</p>
        </Link>
      </div>

      <div className="header__right-section flex gap-4">
        {/* 장바구니 링크 */}
        <Link to={`/cart/${id}`}>
          <LuShoppingCart className='text-gray-600 text-2xl hover:text-indigo-500' />
        </Link>

        {/* 내프로필 링크 */}
        <Link to={`/${id}`}>
          <img
            className='w-7 h-7 rounded-full'
            src={profileImg}
            alt="profile"
          />
        </Link>
      </div>

    </div>
  )
}

export default Header
