import clsx from "clsx";

/* components */
import Logo from "./Logo";
import HeaderIcons from "./HeaderIcons";


/* styles */
const desktopHeaderStyle = clsx(
  "hidden md:flex",
  "w-full h-12",
  "items-center justify-between",
  "border-t border-b border-gray-200",
  "bg-gray-50 p-5"
);

const DesktopHeader = () => {
  return (
    <div className={desktopHeaderStyle}>
      <Logo />
      <HeaderIcons />
    </div>
  )
}

export default DesktopHeader
