import React, { useState } from "react";
import clsx from "clsx";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
// import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const emailChangeHandler = (e) => setEmail(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (email.trim() && password.trim()) {
      alert("로그인 성공!");

      const from = location.state?.from?.pathname || "/";
      navigate(from);
    }
  };

  const registerHandler = () => navigate("/register");

  const emailIsInvalid = isSubmitted && email.trim() === "";
  const passwordIsInvalid = isSubmitted && password.trim() === "";

  return (
    <div className="fixed inset-0 bg-none bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-96 shadow-xl">
        <form onSubmit={submitHandler} className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center gap-1 font-bold text-2xl">
            <img src={logo} alt="로그인 메인 이미지" className="w-24" />
            <p>판타지 쇼핑몰에</p>
            <p>오신걸 환영합니다.</p>
            <p>용사여!</p>
          </div>
          <div>
            <p className="font-bold">Email</p>
            <div className="relative">
              {/* <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" /> */}
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={emailChangeHandler}
                className={clsx(
                  "w-full border p-2 pl-10 rounded",
                  emailIsInvalid ? "border-red-500" : "border-gray-300"
                )}
              />
            </div>
            {emailIsInvalid && (
              <p className="text-red-500 text-sm">이메일을 입력하세요.</p>
            )}
          </div>

          <div>
            <p className="font-bold">Password</p>
            <div className="relative">
              {/* <LockClosedIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" /> */}
              <input
                type="password"
                placeholder="패스워드를 입력하세요"
                value={password}
                onChange={passwordChangeHandler}
                className={clsx(
                  "w-full border p-2 pl-10 rounded",
                  passwordIsInvalid ? "border-red-500" : "border-gray-300"
                )}
              />
            </div>
            {passwordIsInvalid && (
              <p className="text-red-500 text-sm">비밀번호를 입력하세요.</p>
            )}
          </div>

          <button
            onClick={submitHandler}
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            로그인
          </button>

          <div className="flex justify-center items-center gap-2 text-sm">
            <p>처음이신가요?</p>
            <button
              type="button"
              onClick={registerHandler}
              className="text-blue-500 hover:text-blue-700"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
