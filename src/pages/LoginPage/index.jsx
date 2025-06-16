/* import libraries */
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

/* import components */
import { InputBox } from "../../shared/ui/InputBox";
import { Button } from "../../shared/ui/Button";
import LoginBackImage from "./LoginBackImage";

import LoginLogo from "./LoginLogo";
import LoginForm from "./LoginForm";
/* import hooks, modules */
import { loginUser } from "../../shared/api/loginUser";

/* import assets */
import logo from "../../assets/images/logo.png";
import { LuLock, LuMail } from "react-icons/lu";

/* UI */
const LoginPage = () => {
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // onSubmit Handler
  // const navigate = useNavigate();
  // const location = useLocation();
  // const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("제출 성공:", data);

    if (typeof from === "string") {
      navigate(from);
    } else {
      navigate("/");
    }
    // const dispatch = useDispatch();

    // dispatch(loginUser(data));
    reset();

    // const from = location.state?.from;
    // if (typeof from === "string") {
    //   navigate(from);
    // } else {
    //   navigate("/");
    // }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <LoginBackImage />

      {/* 로그인 폼 */}
      <div className="relative bg-transparent md:bg-white rounded-none md:rounded-lg p-6 md:p-12 w-full md:w-[450px] border-0 md:border border-gray-200 z-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          {" "}
          {/* 간격 크게 */}
          {/* 모바일 전용 인삿말 */}
          <div className="flex flex-col md:hidden text-center gap-2">
            <p className="text-2xl font-semibold mt-">로그인</p> -
            <h2 className="text-4xl font-bold mt-2 mb-30">
              판타지 쇼핑몰에 오신걸 <br /> 환영합니다 용사여
            </h2>
          </div>
          {/* 데스크탑용 로고 */}
          <div className="hidden md:flex justify-center">
            <LoginLogo />
          </div>
          {/* 로그인 폼 */}
          <LoginForm
            register={register}
            errors={errors}
            hideLabel // ➔ LoginForm 컴포넌트 내에서 처리 필요 (label 숨기도록)
            className="flex flex-col gap-6 mb-10" // input끼리 간격 벌리기
          />
          <Button className="w-full" type="submit">
            로그인
          </Button>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-sm mt-15 mb-20">
            <p>처음이신가요?</p>
            <a href="register" className="text-indigo-500 hover:underline">
              회원가입
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
