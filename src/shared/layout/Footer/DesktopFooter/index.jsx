import ShopInfo from './ShopInfo'
import NewsLetter from './NewsLetter'
import CopyRight from './CopyRight'


const DesktopFooter = () => {
  return (
    < div className="hidden md:block bg-gray-100 px-4 py-9" >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 flex justify-center lg:justify-start">
          <ShopInfo />
        </div>
        <div className="flex justify-center mt-10 lg:mt-0">
          <NewsLetter />
        </div>
      </div>
      <div className="mt-8">
        <CopyRight />
      </div>
    </div >
  )
}

export default DesktopFooter
