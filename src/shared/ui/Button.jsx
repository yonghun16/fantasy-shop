import clsx from "clsx";

// props
export function Button({
  children,
  color = "indigo",
  size = "md",
  disabled = false,
  icon,
  iconPosition = "left",
  className,
  ...props
}) {
  // styles
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition whitespace-nowrap";

  const sizeStyles = {
    md: "px-4 py-2 text-base", // 보통 크기
  };

  const colorStyles = {
    indigo: "bg-indigo-500 text-white",
    rose: "bg-rose-400 text-white",
    gray: "bg-gray-300 text-gray-700",
  };

  const ableStyles = "hover:opacity-90 active:active:scale-95 cursor-pointer";

  const disabledStyles = "opacity-70 cursor-not-allowed";

  // render component
  return (
    <button
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
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
}
