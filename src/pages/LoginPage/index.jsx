@ -1,19 +1,12 @@
/* import libraries */
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

/* import components */
import { InputBox } from "../../shared/ui/InputBox";
import { Button } from "../../shared/ui/Button";
import LoginBackImage from "./LoginBackImage";

/* import assets */
import logo from "../../assets/images/logo.png";
import { LuLock, LuMail } from "react-icons/lu";
import { Button } from "../../shared/ui/Button";
import LoginBakcImage from "../../assets/images/login-main.png";


/* UI */
const LoginPage = () => {
const LoginInput = () => {
  // react-hook-form
  const {
    register,
@ -34,64 +27,55 @@ const LoginPage = () => {
    } else {
      navigate("/");
    }

  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <LoginBackImage />

      {/* 로그인 폼 */}
      <div className="relative bg-white rounded-lg p-12 w-[450px] border border-gray-200">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center gap-1 font-bold text-3xl mb-7">
            <img src={logo} alt="로그인 메인 이미지" className="w-24" />
            <p>판타지 쇼핑몰에 <br /> 오신걸 환영합니다. 용사여!</p>
          </div>

          <div className="relative">
            <InputBox
              type="email"
              label="Email"
              icon={<LuMail />}
              placeholder="이메일을 입력하세요"
              className="w-full"
              {...register("email", { required: "이메일을 입력하세요." })}
            />
            {errors.email && (
              <p className="text-rose-500 text-sm">{errors.email.message}</p>
            )}
          </div>
    <>
      <div className="flex flex-col items-center text-center gap-1 font-bold text-3xl mb-7">
        <img src={logo} alt="로그인 메인 이미지" className="w-24" />
        <p>
          판타지 쇼핑몰에 <br /> 오신걸 환영합니다. 용사여!
        </p>
      </div>
      <div>
        <div className="relative">
          <InputBox
            type="email"
            label="Email"
            icon={<LuMail />}
            placeholder="이메일을 입력하세요"
            className="w-full"
            {...register("email", { required: "이메일을 입력하세요." })}
          />
          {errors.email && (
            <p className="text-rose-500 text-sm">{errors.email.message}</p>
          )}
        </div>

          <div className="relative">
            <InputBox
              type="password"
              label="Password"
              icon={<LuLock />}
              placeholder="패스워드를 입력하세요"
              className="w-full"
              {...register("password", { required: "비밀번호를 입력하세요." })}
            />
            {errors.password && (
              <p className="text-rose-500 text-sm">{errors.password.message}</p>
            )}
          </div>
        <div className="relative">
          <InputBox
            type="password"
            label="Password"
            icon={<LuLock />}
            placeholder="패스워드를 입력하세요"
            className="w-full"
            {...register("password", { required: "비밀번호를 입력하세요." })}
          />
          {errors.password && (
            <p className="text-rose-500 text-sm">{errors.password.message}</p>
          )}
        </div>

          <Button
            type="submit"
          >
            로그인
          </Button>
        <Button type="submit">로그인</Button>

          <div className="flex justify-center items-center gap-2 text-sm">
            <p>처음이신가요?</p>
            <a href="register" className="text-indigo-500 hover:underline">회원가입</a>
          </div>
        </form>
        <div className="flex justify-center items-center gap-2 text-sm">
          <p>처음이신가요?</p>
          <a href="register" className="text-indigo-500 hover:underline">
            회원가입
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;