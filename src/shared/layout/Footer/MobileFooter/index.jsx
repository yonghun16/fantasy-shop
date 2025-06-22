import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

/* asset */
import { LuHouse, LuSearch, LuShoppingCart, LuUserRound } from "react-icons/lu";

/* styles */
const iconBaseStyle = 'text-2xl text-gray-600 hover:text-indigo-500 hover:scale-110 font-bold cursor-pointer';


const MobileFooter = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const userPk = useSelector((state) => state.user.userData.userPk) || 'notlogin';

  const navItems = [
    {
      to: '/',
      icon: LuHouse,
      isActive: currentPath === '/',
    },
    {
      to: '/?focus=true',
      icon: LuSearch,
    },
    {
      to: `/cart/${userPk}`,
      icon: LuShoppingCart,
      isActive: currentPath === `/cart/${userPk}`,
    },
    {
      to: `/myprofile/${userPk}`,
      icon: LuUserRound,
      isActive: currentPath === `/myprofile/${userPk}`,
    },
  ];

  return (
    <div className="fixed md:hidden bottom-0 w-full bg-white">
      <div className="flex justify-around h-12 w-full bg-white border-t border-b border-gray-200 py-2">
        {navItems.map(({ to, icon: Icon, isActive }, idx) => (
          <Link key={idx} className="flex items-center" to={to}>
            <Icon
              className={clsx(iconBaseStyle, {
                'text-indigo-500 font-bold': isActive,
              })}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileFooter;
