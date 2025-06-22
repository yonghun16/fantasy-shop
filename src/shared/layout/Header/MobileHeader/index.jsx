import useMenuState from "./useMenuState"
import { HiChevronLeft } from "react-icons/hi2";
import { useSelector } from "react-redux";

const MobileHeader = () => {
  const companyName = useSelector((state) => state.company.companyData.companyName);
  const menuState = useMenuState(companyName)

  return (
    <div className="fixed top-0 md:hidden bg-white w-full h-12 px-4 pt-3 border-t border-b border-gray-200 z-50">
      <div className="relative w-full flex items-center">
        {/* 뒤로가기 아이콘 */}
        <span
          onClick={() => window.history.back()}
          role="button"
          aria-label="뒤로가기"
          className="flex items-center text-gray-600 hover:text-indigo-500 cursor-pointer"
        >
          <HiChevronLeft className="text-2xl w-7" />
        </span>

        {/* 헤더 타이틀 */}
        <div className="absolute left-1/2 -translate-x-1/2 font-semibold ">
          {menuState}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
