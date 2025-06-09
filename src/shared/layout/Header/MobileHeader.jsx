/* import libraries */
import { Link } from "react-router-dom"

/* import hooks */
import useMenuState from "./hooks/useMenuState"

/* import assets */
import { HiChevronLeft } from "react-icons/hi2";


/* dummy data */
const shopName = "판타지 쇼핑몰";

/* UI */
const MobileHeader = () => {
  const menuState = useMenuState(shopName)

  return (
    <div className="relative w-full flex items-center">
      {/* 뒤로가기 아이콘 */}
      <Link 
        className="flex items-center"
        to="/"
      >
        <HiChevronLeft
          className="absolute text-gray-600 text-2xl w-7 hover:text-indigo-500 cursor-pointer"
        />
      </Link>

      {/* 메뉴 */}
      <div className="absolute left-1/2 -translate-x-1/2 font-semibold ">
        {menuState}
      </div>
    </div>
  );
};

export default MobileHeader;
