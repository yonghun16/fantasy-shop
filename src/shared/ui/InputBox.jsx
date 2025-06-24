import clsx from 'clsx';

// styles
const labelStyles = 'block text-sm font-medium mb-1';
const inputBoxWrapper = 'relative flex items-center bg-gray-50 rounded-md';
const baseInputStyles = 'w-full text-gray-900 border-gray-200 appearance-none outline-none border rounded-md';
const inputBoxSize = {
  md: 'px-4 py-2 text-base',
};
const inputBoxColor = {
  indigo: 'focus:border-indigo-500',
  rose: 'focus:border-rose-400',
};
const disabledStyles = 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed';
const iconStyles = 'text-gray-400 pointer-events-none';
const iconPadding = {
  left: 'pl-10',
  right: 'pr-10',
};

// props
export function InputBox({
  label,
  labelColor = 'text-gray-800',
  type = 'text',
  color = 'indigo',
  size = 'md',
  disabled = false,
  icon,
  iconPosition = 'left',
  className,
  inputProps = {},
  ...props
}) {
  const renderIcon = (position) =>
    icon && iconPosition === position && (
      <span className={clsx(iconStyles, "absolute", position==="left" ? "left-3" : "right-3")}>{icon}</span>
    );

  // render component
  return (
    <div>
      <label
        htmlFor={props.id}
        className={clsx(labelStyles, labelColor)}>
        {label}
      </label>

      <div className={clsx(
        inputBoxWrapper,
      )}>
        {renderIcon('left')}
        <input
          type={type}
          disabled={disabled}
          className={clsx(
            baseInputStyles,
            inputBoxSize[size],
            icon && iconPadding[iconPosition],
            disabled && disabledStyles,
            !disabled && inputBoxColor[color],
            className
          )}
          {...inputProps}
          {...props}
        />
        {renderIcon('right')}
      </div>
    </div>
  );
}
