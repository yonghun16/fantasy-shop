/* modules */
import { useRegisterForm } from "../../../features/register/useRegisterForm";
import { useRegisterValidationOptions } from "../../../features/register/useRegisterValidationOptions";

/* Components */
import RegisterInputField from "./RegisterInputField";
import AgreementCheckbox from "./AgreementCheckbox";
import { Button } from "../../../shared/ui/Button";

/* Icons */
import { LuUserRound, LuMail, LuLock, LuCheckCheck } from "react-icons/lu";


// Validation
const {
  userNameValidationOptions,
  emailValidationOptions,
  passwordValidationOptions,
  confirmPasswordValidation,
  agreeValidationOptions,
} = useRegisterValidationOptions();


const RegisterForm = () => {
  const { formMethods, password, agree, onSubmit } = useRegisterForm();
  const { register, formState: { errors } } = formMethods;

  return (
    <form className="space-y-4 w-[400px]" onSubmit={onSubmit}>
      <RegisterInputField
        id="userName"
        label="이름*"
        type="text"
        placeholder="이름을 입력하세요"
        icon={<LuUserRound />}
        register={register}
        validation={userNameValidationOptions}
        errorMessage={errors.userName?.message}
      />

      <RegisterInputField
        id="email"
        label="이메일*"
        type="email"
        autoComplete="username"
        placeholder="이메일을 입력하세요"
        icon={<LuMail />}
        register={register}
        validation={emailValidationOptions}
        errorMessage={errors.email?.message}
      />

      <RegisterInputField
        id="password"
        label="비밀번호*"
        type="password"
        autoComplete="new-password"
        placeholder="비밀번호를 입력하세요"
        icon={<LuLock />}
        register={register}
        validation={passwordValidationOptions}
        errorMessage={errors.password?.message}
      />

      <RegisterInputField
        id="confirmPassword"
        label="비밀번호 확인*"
        type="password"
        autoComplete="new-password"
        placeholder="비밀번호를 다시 입력하세요"
        icon={<LuCheckCheck />}
        register={register}
        validation={confirmPasswordValidation(password)}
        errorMessage={errors.confirmPassword?.message}
      />

      <AgreementCheckbox {...register("agree", agreeValidationOptions)} />
      {errors.agree && (
        <p className="text-rose-500 text-sm -mt-3">{errors.agree.message}</p>
      )}

      <Button
        disabled={!agree}
        type="submit"
        className="w-full py-2 rounded-md text-white font-semibold"
      >
        가입하기
      </Button>
    </form>
  );
};

export default RegisterForm;
