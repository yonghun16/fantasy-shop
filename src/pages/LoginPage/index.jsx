import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LuLock, LuMail } from "react-icons/lu";
import logo from "../../assets/images/logo.png";
import { InputBox } from "../../shared/ui/InputBox";
import LoginImage from "./LoginImage";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data) => {
    alert("로그인 성공!");
    const from = location.state?.from;
    if (typeof from === "string") {
      navigate(from);
    } else {
      navigate("/");
    }
  };

  const registerHandler = () => navigate("/register");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <LoginImage />

      {/* 로그인 폼 */}
      <div className="relative z-20 bg-white rounded-lg p-8 w-[350px] shadow-xl border border-gray-300">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center gap-1 font-bold text-2xl">
            <img src={logo} alt="로그인 메인 이미지" className="w-24" />
            <p>판타지 쇼핑몰에</p>
            <p>오신걸 환영합니다.</p>
            <p>용사여!</p>
          </div>

          <div className="relative">
            <LuMail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 z-10" />
            <InputBox
              {...register("email", { required: "이메일을 입력하세요." })}
              type="email"
              placeholder="이메일을 입력하세요"
              className={`w-full border p-2 pl-10 rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <LuLock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 z-10" />
            <InputBox
              {...register("password", { required: "비밀번호를 입력하세요." })}
              type="password"
              placeholder="패스워드를 입력하세요"
              className={`w-full border p-2 pl-10 rounded ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
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

export default Login;
