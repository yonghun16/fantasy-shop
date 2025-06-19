/* components  */
import { InputBox } from "../../../shared/ui/InputBox";


const RegisterInputField = ({
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
  errorMessage,
}) => (
  <>
    <InputBox
      label={label}
      id={id}
      type={type}
      disabled={disabled}

      placeholder={placeholder}
      autoComplete={autoComplete}
      icon={icon}
      className={className}
      {...register(id, validation)}
    />
    {errorMessage && (
      <p className="text-rose-500 text-sm -mt-5">{errorMessage}</p>
    )}
  </>
);

export default RegisterInputField;
