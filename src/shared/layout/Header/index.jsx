import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";


const Header = () => {
  return (
    <header>
      {/* 데스크탑 헤더 */}
      <DesktopHeader />

      {/* 모바일 헤더 */}
      <MobileHeader />
    </header>
  );
};

export default Header;
