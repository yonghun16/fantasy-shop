import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

/* import components */
import { Button } from "../../shared/ui/Button";
import LoginBackImage from "./LoginBackImage";
import LoginLogo from "./LoginLogo";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data) => {
    console.log("제출 성공:", data);
    const from = location.state?.from;
    navigate(typeof from === "string" ? from : "/");
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <LoginBackImage />

      {/* 로그인 폼 */}
      <div className="relative bg-transparent md:bg-white rounded-none md:rounded-lg p-6 md:p-12 w-full md:w-[450px] border-0 md:border border-gray-200 z-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <LoginLogo />
          <LoginForm
            register={register}
            errors={errors}
            className="flex flex-col gap-4"
          />
          <Button className="w-full" type="submit">
            로그인
          </Button>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-sm mt-6 md:mt-0">
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
