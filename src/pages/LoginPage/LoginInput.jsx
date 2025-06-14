import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputBox } from "../../shared/ui/InputBox";
import { LuLock, LuMail } from "react-icons/lu";
import { Button } from "../../shared/ui/Button";

const LoginInput = () => {
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // onSubmit Handler
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data) => {
    console.log("제출 성공:", data);
    const from = location.state?.from;

    if (typeof from === "string") {
      navigate(from);
    } else {
      navigate("/");
    }
  };
  return (
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

      <Button type="submit">로그인</Button>

      <div className="flex justify-center items-center gap-2 text-sm">
        <p>처음이신가요?</p>
        <a href="register" className="text-indigo-500 hover:underline">
          회원가입
        </a>
      </div>
    </div>
  );
};

export default LoginInput;
