/* import libraries */
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom"
import clsx from "clsx"

/* import assets */
import { LuSearch, LuShoppingCart, LuUserRound } from "react-icons/lu"

/* tailwind styles */
const iconStyles = clsx(
  'text-2xl',
  'text-gray-600',
  'hover:text-indigo-500 hover:scale-110 font-bold',
  'cursor-pointer'
)



/* UI */
const MobileFooter = () => {

  const location = useLocation()
  const currentPath = location.pathname

  // import data 
  const importId = useSelector((state) => state.user.userData.userPk);
  const id = importId || 'notlogin';

  return (
    <div className="fixed bottom-0 w-full">
      <div className='flex justify-around h-12 w-full bg-white border-t border-b border-gray-200 py-2'>
        <Link className="flex items-center" to={`/`}>
          <LuSearch
            className={clsx(
              iconStyles,
              { "text-indigo-500 font-bold": currentPath === "/" }
            )}
          />
        </Link>

        <Link className="flex items-center" to={`/cart/${id}`}>
          <LuShoppingCart
            className={clsx(
              iconStyles,
              { "text-indigo-500 font-bold": currentPath === `/cart/${id}` }
            )}
          />
        </Link>

        <Link className="flex items-center" to={`/myprofile/${id}`}>
          <LuUserRound
            className={clsx(
              iconStyles,
              { "text-indigo-500 font-bold": currentPath === `/myprofile/${id}` }
            )}
          />
        </Link>
      </div>
    </div>
  )
}

export default MobileFooter
