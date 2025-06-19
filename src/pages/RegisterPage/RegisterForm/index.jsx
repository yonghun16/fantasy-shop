/* modules */
import { useRegisterForm } from "../../../features/register/useRegisterForm";
import { useRegisterValidationOptions } from "../../../features/register/useRegisterValidationOptions";

/* Components */
import RegisterInputField from "./RegisterInputField";
import AgreementCheckbox from "./AgreementCheckbox";
import { Button } from "../../../shared/ui/Button";

/* Icons */
import { LuUserRound, LuMail, LuLock, LuCheckCheck } from "react-icons/lu";


const RegisterForm = () => {
  const { register, errors, password, agree, onSubmit } = useRegisterForm();
  const validationOptions = useRegisterValidationOptions();

  return (
    <div className="flex items-center justify-center p-6 w-full h-[550px] border md:border md:border-gray-200 border-transparent rounded-md">
      <form className="space-y-6 w-full" onSubmit={onSubmit}>
        <RegisterInputField
          id="userName"
          label="이름*"
          type="text"
          placeholder="이름을 입력하세요"
          icon={<LuUserRound />}
          register={register}
          validation={validationOptions.userName}
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
          validation={validationOptions.email}
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
          validation={validationOptions.password}
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
          validation={validationOptions.confirmPassword(password)}
          errorMessage={errors.confirmPassword?.message}
        />

        <AgreementCheckbox {...register("agree", validationOptions.agree)} />
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
    </div>
  );
};

export default RegisterForm;
