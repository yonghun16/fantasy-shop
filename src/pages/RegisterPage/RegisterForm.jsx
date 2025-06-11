/* import libraries */
import { useState } from "react";

/* import components */
import AgreementCheckbox from "./AgreementCheckbox";
import { InputBox } from "../../shared/ui/InputBox";
import { Button } from "../../shared/ui/Button";

/* import assets */
import { LuUserRound } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuLock } from "react-icons/lu";
import { LuCheckCheck } from "react-icons/lu";


/* UI */
const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="max-w-md w-full space-y-7">
      <h2 className="text-2xl font-semibold text-center">회원가입</h2>
      <div className="flex items-center justify-center h-[550px] border border-gray-200 p-6 rounded-xl">
        <form className="space-y-4 w-[400px]">

          <label htmlFor="name" className="block text-sm text-gray-700 font-medium mb-1">이름*</label>
          <InputBox
            label="이름*"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            icon={<LuUserRound />}
            placeholder="이름을 입력하세요"
            className="w-full"
          />
          <label htmlFor="email" className="block text-sm text-gray-700 font-medium mb-1">이메일*</label>
          <InputBox
            label="이메일*"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            icon={<LuMail />}
            placeholder="이메일을 입력하세요"
            className="w-full"
          />
          <label htmlFor="password" className="block text-sm text-gray-700 font-medium mb-1">비밀번호*</label>
          <InputBox
            label="비밀번호*"
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            icon={<LuLock />}
            className="w-full"
          />
          <label htmlFor="confirmPassword" className="block text-sm text-gray-700 font-medium mb-1">비밀번호 확인*</label>
          <InputBox
            label="비밀번호 확인*"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            icon={<LuCheckCheck />}
            className="w-full"
          />

          <AgreementCheckbox checked={form.agree} onChange={handleChange} />

          <Button
            disabled={!form.agree}
            type="submit"
            className="w-full py-2 rounded-md text-white font-semibold"
          >
            가입하기
          </Button>
        </form>
      </div>

      <p className="text-center text-sm text-gray-600">
        이미 계정이 있다면?{" "}
        <a href="login" className="text-indigo-500 hover:underline">Login
        </a>
      </p>
    </div>
  );
};

export default RegisterForm;
