/* components  */
import { InputBox } from "../../../shared/ui/InputBox";


// Error Text helper
const ErrorText = ({ errorMessage }) => (
  <p className="text-rose-500 text-sm -mt-3">{errorMessage}</p>
);


const RegisterInputField = ({
  label, type, id,
  placeholder, autoComplete = "off",
  icon,
  register, validation,
  errorMessage,
}) => (
  <>
    <InputBox
      label={label}
      type={type}
      id={id}
      placeholder={placeholder}
      autoComplete={autoComplete}
      icon={icon}
      className="w-full"
      {...register(id, validation)}
    />
    {errorMessage && <ErrorText errorMessage={errorMessage} />}
  </>
);

export default RegisterInputField;
