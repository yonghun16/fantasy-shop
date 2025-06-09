/* import components */
import ShopInfo from './ShopInfo'
import NewsLetter from './NewsLetter'
import CopyRight from './CopyRight'
import MobileFooter from './MobileFooter'


/* UI */
const Footer = () => {
  return (
    <footer>
      {/* 데스크탑 푸터 */}
      <div className="hidden md:block bg-gray-100 w-full px-4 py-9">
        <div className="max-w-6xl mx-auto grid gid-cols-1 lg:grid-cols-3">
          <div className="col-span-1 flex justify-center lg:col-span-2 lg:justify-start">
            <ShopInfo />
          </div>
          <div className="col-span-1 flex justify-center mt-10 lg:mt-0">
            <NewsLetter />
          </div>
        </div>
        <CopyRight />
      </div>

      {/* 데스크탑 푸터 */}
      <div className="flex md:hidden bg-white w-full">
        <MobileFooter />
      </div>
    </footer>
  )
}

export default Footer
