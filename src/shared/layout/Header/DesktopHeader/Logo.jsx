import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

/* assets */
import logoImg from '../../../../assets/images/logo.png'


const shopName = useSelector((state) => state.company.companyData.companyName);

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
