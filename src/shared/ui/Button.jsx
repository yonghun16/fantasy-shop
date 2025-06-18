import clsx from "clsx";

// styles
const baseStyles =
  "inline-flex items-center justify-center font-medium rounded-md transition whitespace-nowrap";

const sizeStyles = {
  md: "px-4 py-2 text-base",
};

const colorStyles = {
  indigo: "bg-indigo-500 text-white",
  rose: "bg-rose-400 text-white",
  gray: "bg-gray-300 text-gray-700",
};

const ableStyles = "hover:opacity-90 active:scale-95 cursor-pointer";
const disabledStyles = "opacity-70 cursor-not-allowed";

// props
export function Button({
  children,
  type = "button",
  color = "indigo",
  size = "md",
  disabled = false,
  icon,
  iconPosition = "left",
  className,
  ...props
}) {
  const renderIcon = (position) =>
    icon && iconPosition === position ? (
      <span className={position === "left" ? "mr-2" : "ml-2"}>{icon}</span>
    ) : null;

  // render component
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        baseStyles,
        sizeStyles[size],
        colorStyles[color],
        disabled && disabledStyles,
        !disabled && ableStyles,
        className
      )}
      {...props}
    >
      {renderIcon("left")}
      {children}
      {renderIcon("right")}
    </button>
  );
}
