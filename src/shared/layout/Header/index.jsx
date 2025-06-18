import clsx from "clsx";

/* components */
import Logo from "./Logo";
import HeaderIcons from "./HeaderIcons";
import MobileHeaderComponent from "./MobileHeaderComponent";

/* styles */
const desktopHeaderStyle = clsx(
  "hidden md:flex",
  "w-full h-12",
  "items-center justify-between",
  "border-t border-b border-gray-200",
  "bg-gray-50 p-5"
);


const Header = () => {
  return (
    <header>
      {/* 데스크탑 헤더 */}
      <div className={desktopHeaderStyle}>
        <Logo />
        <HeaderIcons />
      </div>

      {/* 모바일 헤더 */}
      <MobileHeaderComponent />
    </header>
  );
};

export default Header;
