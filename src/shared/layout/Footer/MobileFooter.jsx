/* import libraries */
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

/* dummy data */
const id = "myid";


/* UI */
const MobileFooter = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div className='flex justify-around h-12 w-full border-t border-b border-gray-200 py-2'>
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

      <Link className="flex items-center" to={`/${id}`}>
        <LuUserRound
          className={clsx(
            iconStyles,
            { "text-indigo-500 font-bold": currentPath === `/${id}` }
          )}
        />
      </Link>
    </div>
  )
}

export default MobileFooter
