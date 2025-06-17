/* import libraries */
import clsx from 'clsx';

/* import components, hooks */
import Logo from './Logo'
import HeaderIcons from './HeaderIcons'
import MobileHeaderComponent from './MobileHeaderComponent'


/* tailwind styles */
const headerWrapperStyle = clsx(
  "w-full h-12",
  "flex items-center justify-between",
  "border-t border-b border-gray-200" 
)


/* UI */
const Header = () => {
  return (
    <header>
      {/* 데스크탑 헤더 */}
      <div className={clsx(headerWrapperStyle, 'hidden md:flex bg-gray-50 p-5')}>
        <Logo />
        <HeaderIcons />
      </div>

      {/* 모바일 헤더 */}
      <MobileHeaderComponent />
    </header>
  )
}

export default Header
