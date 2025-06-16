import React from "react";
import { InputBox } from "../../shared/ui/InputBox";
import { LuMail, LuLock } from "react-icons/lu";
import { Button } from "../../shared/ui/Button";

const LoginForm = ({ register, errors, className }) => {
  return (
    <div className={className}>
      <div className="relative">
        <InputBox
          type="email"
          label="Email"
          icon={<LuMail />}
          placeholder="이메일을 입력하세요"
          className="w-full"
          {...register("email", {
            required: "이메일을 입력하세요.",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "유효한 이메일을 입력하세요.",
            },
          })}
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
          {...register("password", {
            required: "비밀번호를 입력하세요.",
            minLength: {
              value: 6,
              message: "비밀번호는 최소 6자 이상이어야 합니다.",
            },
          })}
        />
        {errors.password && (
          <p className="text-rose-500 text-sm">{errors.password.message}</p>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
