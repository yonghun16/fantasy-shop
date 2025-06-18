/* components */
import { InputBox } from "../../../shared/ui/InputBox";

/* assets */
import { LuMail, LuLock } from "react-icons/lu";


const icons = {
  mail: <LuMail />,
  lock: <LuLock />,
};


const LoginInput = ({ type, label, placeholder, icon, register, error, autoComplete }) => (
  <div className="relative">
    <InputBox
      type={type}
      id={label}
      label={<span className="hidden md:block">{label}</span>}
      icon={icons[icon]}
      placeholder={placeholder}
      className="w-full h-12"
      autoComplete={autoComplete}
      {...register}
    />
    {error && <p className="text-rose-500 text-sm">{error}</p>}
  </div>
);

export default LoginInput;
