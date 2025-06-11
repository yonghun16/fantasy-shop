import clsx from "clsx";

// props
export function InputBox({
  color = "indigo",
  size = "md",
  disabled = false,
  icon,
  iconPosition = "left",
  className,
  ...props
}) {
  // styles
  const baseWrapper = "relative flex items-center bg-gray-50 rounded-md";
  const baseInput =
    "text-gray-900 border-gray-200 appearance-none outline-none border rounded-md";

  const sizeStyles = {
    md: "px-4 py-2 text-base",
  };

  const colorStyles = {
    indigo: "focus:border-indigo-500",
    rose: "focus:border-rose-400",
  };

  const disabledStyles =
    "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed";

  const iconStyles = "text-gray-400 pointer-events-none";

  const iconPadding = {
    left: "pl-10",
    right: "pr-10",
  };

  // render component
  return (
    <div className={clsx(baseWrapper)}>
      {icon && iconPosition === "left" && (
        <span className={clsx(iconStyles, "absolute left-3")}>{icon}</span>
      )}
      <input
        disabled={disabled}
        className={clsx(
          baseInput,
          sizeStyles[size],
          icon && iconPadding[iconPosition],
          disabled && disabledStyles,
          !disabled && colorStyles[color],
          className
        )}
        {...props}
      />
      {icon && iconPosition === "right" && (
        <span className={clsx(iconStyles, "absolute right-3")}>{icon}</span>
      )}
    </div>
  );
}
