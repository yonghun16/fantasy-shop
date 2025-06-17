/* Components */
import AgreementCheckbox from "./AgreementCheckbox";
import { InputBox } from "../../shared/ui/InputBox";
import { Button } from "../../shared/ui/Button";

/* modules */
import { useRegisterForm } from "../../features/register/useRegisterForm";
import { useRegisterValidationOptions } from "../../features/register/useRegisterValidationOptions";

/* Icons */
import { LuUserRound, LuMail, LuLock, LuCheckCheck } from "react-icons/lu";


/* helper */
// Error Text
const ErrorText = ({ message }) => (
  <p className="text-rose-500 text-sm -mt-3">{message}</p>
);

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
    <div className="max-w-md w-full space-y-7">
      <h2 className="text-2xl font-semibold text-center">회원가입</h2>

      <div className="flex items-center justify-center h-[550px] border border-gray-200 p-6 rounded-md">
        <form className="space-y-4 w-[400px]" onSubmit={onSubmit}>
          <InputBox
            label="이름*"
            type="text"
            id="userName"
            placeholder="이름을 입력하세요"
            icon={<LuUserRound />}
            className="w-full"
            {...register("userName", userNameValidationOptions)}
          />
          {errors.userName && <ErrorText message={errors.userName.message} />}

          <InputBox
            label="이메일*"
            type="email"
            id="email"
            autoComplete="username"
            placeholder="이메일을 입력하세요"
            icon={<LuMail />}
            className="w-full"
            {...register("email", emailValidationOptions)}
          />
          {errors.email && <ErrorText message={errors.email.message} />}

          <InputBox
            label="비밀번호*"
            type="password"
            id="password"
            autoComplete="new-password"
            placeholder="비밀번호를 입력하세요"
            icon={<LuLock />}
            className="w-full"
            {...register("password", passwordValidationOptions)}
          />
          {errors.password && <ErrorText message={errors.password.message} />}

          <InputBox
            label="비밀번호 확인*"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            placeholder="비밀번호를 다시 입력하세요"
            icon={<LuCheckCheck />}
            className="w-full"
            {...register("confirmPassword", confirmPasswordValidation(password))}
          />
          {errors.confirmPassword && <ErrorText message={errors.confirmPassword.message} />}

          <AgreementCheckbox
            {...register("agree", agreeValidationOptions)}
          />
          {errors.agree && <ErrorText message={errors.agree.message} />}

          <Button
            disabled={!agree}
            type="submit"
            className="w-full py-2 rounded-md text-white font-semibold"
          >
            가입하기
          </Button>
        </form>
      </div>

      <p className="text-center text-sm text-gray-600">
        이미 계정이 있다면?{" "}
        <a href="/login" className="text-indigo-500 hover:underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default RegisterForm;
