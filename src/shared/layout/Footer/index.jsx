import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'


const Footer = () => {
  return (
    <footer>
      {/* 데스크탑 푸터 */}
      <DesktopFooter />

      {/* 모바일 푸터 */}
      <MobileFooter />
    </footer>
  )
}

export default Footer
