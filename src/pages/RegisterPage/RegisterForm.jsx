/* import libraries */
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

/* import components */
import AgreementCheckbox from "./AgreementCheckbox";
import { InputBox } from "../../shared/ui/InputBox";
import { Button } from "../../shared/ui/Button";

/* import hooks, modules */
import { registerUser } from "../../shared/api/registerUser";

/* import assets */
import { LuUserRound, LuMail, LuLock, LuCheckCheck } from "react-icons/lu";


/* UI */
const RegisterForm = () => {
  // react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",    // 사용자가 input을 터치하고 벗어났을 때 유효성 검사 실행
  });

  const password = watch("password");
  const agree = watch("agree");

  // onSubmit Handler
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => { // 모든 유효성 검사를 통과한 data만 받음
    try {
      await dispatch(registerUser(data)).unwrap(); // 성공 시 반환값 받기
      reset();
      navigate('/login');
    } catch (error) {
      console.log("register post error", error);
    }
  };


  // render component
  return (
    <div className="max-w-md w-full space-y-7">
      <h2 className="text-2xl font-semibold text-center">회원가입</h2>
      <div className="flex items-center justify-center h-[550px] border border-gray-200 p-6 rounded-md">
        <form className="space-y-4 w-[400px]" onSubmit={handleSubmit(onSubmit)}>
          <InputBox
            label="이름*"
            type="text"
            id="userName"
            placeholder="이름을 입력하세요"
            icon={<LuUserRound />}
            className="w-full"
            {...register("userName", {
              required: "이름은 필수입니다.",
            })}
          />
          {errors.userName && <p className="text-rose-500 text-sm -mt-3">{errors.userName.message}</p>}

          <InputBox
            label="이메일*"
            type="email"
            id="email"
            autoComplete="username"
            placeholder="이메일을 입력하세요"
            icon={<LuMail />}
            className="w-full"
            {...register("email", {
              required: "이메일은 필수입니다.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "유효한 이메일을 입력하세요.",
              },
            })}
          />
          {errors.email && <p className="text-rose-500 text-sm -mt-3">{errors.email.message}</p>}

          <InputBox
            label="비밀번호*"
            type="password"
            id="password"
            autoComplete="new-password"
            placeholder="비밀번호를 입력하세요"
            icon={<LuLock />}
            className="w-full"
            {...register("password", {
              required: "비밀번호는 필수입니다.",
              minLength: {
                value: 6,
                message: "비밀번호는 최소 6자 이상이어야 합니다.",
              },
            })}
          />
          {errors.password && <p className="text-rose-500 text-sm -mt-3">{errors.password.message}</p>}

          <InputBox
            label="비밀번호 확인*"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            placeholder="비밀번호를 다시 입력하세요"
            icon={<LuCheckCheck />}
            className="w-full"
            {...register("confirmPassword", {
              required: "비밀번호 확인은 필수입니다.",
              validate: (value) => value === password || "비밀번호가 일치하지 않습니다.",
            })}
          />
          {errors.confirmPassword && <p className="text-rose-500 text-sm -mt-3">{errors.confirmPassword.message}</p>}

          <AgreementCheckbox
            {...register("agree")}
          />

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
        <a href="login" className="text-indigo-500 hover:underline">Login</a>
      </p>
    </div>
  );
};

export default RegisterForm;
