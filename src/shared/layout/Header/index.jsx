/* import libraries */
import clsx from 'clsx';

/* import components, hooks */
import Logo from './Logo'
import HeaderIcons from './HeaderIcons'
import MobileHeader from './MobileHeader'


/* tailwind styles */
const headerWrapperStyle = clsx(
  "w-full h-12 p-5",
  "flex items-center justify-between",
  "border border-gray-200" 
)


/* UI */
const Header = () => {
  return (
    <header>
      {/* 데스크탑 헤더 */}
      <div className={clsx(headerWrapperStyle, 'hidden md:flex bg-gray-50')}>
        <Logo />
        <HeaderIcons />
      </div>

      {/* 모바일 헤더 */}
      <div className={clsx(headerWrapperStyle,'flex md:hidden bg-white')}>
        <MobileHeader />
      </div>
    </header>
  )
}

export default Header
