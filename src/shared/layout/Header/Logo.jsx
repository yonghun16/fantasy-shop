import { Link } from 'react-router-dom'

/* assets */
import logoImg from '../../../assets/images/logo.png'

/* dummy data */
const shopName = "판타지 쇼핑몰";

const Logo = () => {
  return (
    <Link
      className="flex items-center gap-2"
      to="/"
    >
      <img
        src={logoImg}
        alt="logo"
        className='w-10 h-10'
      />
      <p>{shopName}</p>
    </Link>
  )
}

export default Logo
