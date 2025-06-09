/* import libraries */
import { Link } from 'react-router-dom'

/* import assets */
import { LuShoppingCart } from "react-icons/lu";
import avataImg from '../../../assets/images/noavatar.png';


/* dummy data */
const id = "myid";
const profileImg = avataImg;


/* UI */
const HeaderIcons = () => {
  return (
    <div className="header__right-section flex gap-4">
      <Link to={`/cart/${id}`}>
        <LuShoppingCart className='text-gray-600 text-2xl hover:text-indigo-500' />
      </Link>

      <Link to={`/${id}`}>
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
