import clsx from "clsx";

// props
export function TextareaBox({
  label,
  labelColor = "text-gray-800",
  color = "indigo",
  className,
  ...props
}) {
  // styles
  const labelStyles = "block text-sm font-medium mb-1";
  const textareaBoxWrapper =
    "relative flex items-center bg-gray-50 rounded-md ";
  const baseTextareaStyles =
    "h-30 text-gray-900 border-gray-200 appearance-none outline-none border rounded-md resize-none px-4 py-2 text-base w-full";
  const textareaBoxColor = {
    indigo: "focus:border-indigo-500",
    rose: "focus:border-rose-400",
  };

  // render component
  return (
    <div>
      <label htmlFor={props.id} className={clsx(labelStyles, labelColor)}>
        {label}
      </label>

      <div className={clsx(textareaBoxWrapper)}>
        <textarea
          className={clsx(
            baseTextareaStyles,
            textareaBoxColor[color],
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
}
