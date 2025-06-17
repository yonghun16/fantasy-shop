/* import libraries */
import { Link } from "react-router-dom"

/* import hooks, components */
import useMenuState from "./hooks/useMenuState"

/* import assets */
import { HiChevronLeft } from "react-icons/hi2";


/* dummy data */
const shopName = "판타지 쇼핑몰";

/* UI */
const MobileHeaderComponent = () => {
  const menuState = useMenuState(shopName)

  return (
    <div className="fixed top-0 md:hidden bg-white w-full h-12 px-4 pt-6 border-t border-b border-gray-200 z-50">
      <div className="relative w-full flex items-center">
        {/* 뒤로가기 아이콘 */}
        <Link className="flex items-center" to="/" >
          <HiChevronLeft
            className="absolute text-gray-600 text-2xl w-7 hover:text-indigo-500 cursor-pointer"
          />
        </Link>

        {/* 메뉴 */}
        <div className="absolute left-1/2 -translate-x-1/2 font-semibold ">
          {menuState}
        </div>
      </div>
    </div>
  );
};

export default MobileHeaderComponent;
