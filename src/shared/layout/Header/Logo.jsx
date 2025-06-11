/* import libraries */
import { Link } from 'react-router-dom'

/* import assets */
import logoImg from '../../../assets/images/logo.png'

/* dummy data */
const shopName = "판타지 쇼핑몰";

const Logo = () => {
  return (
    <div className="header__left-section">
      {/* 로고 */}
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
  )
}

export default Logo
