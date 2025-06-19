import { InputBox } from "../../../shared/ui/InputBox";

const ProfileInputField = ({
  label,
  id,
  type = "text",
  disabled = false,
  placeholder,
  autoComplete = "off",
  icon,
  className = "w-full",
  register,
  validation,
  defaultValue,
  errorMessage,
  value,
  readOnly,
  onClick
}) => {
  return (
    <>
      <InputBox
        label={label}
        id={id}
        type={type}
        disabled={disabled}
        autoComplete={autoComplete}
        placeholder={placeholder}
        icon={icon}
        className={className}
        defaultValue={defaultValue}
        {...register(id, validation)}
        value={value}
        readOnly={readOnly}
        onClick={onClick}
      />
      {errorMessage && (
        <p className="text-sm text-red-500 -mt-3">{errorMessage.message}</p>
      )}
    </>
  );
};

export default ProfileInputField;
