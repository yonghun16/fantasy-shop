import RegisterForm from "./RegisterForm";
import RegisterDesktopBackImage from "./RegisterDesktopBackImage";
import RegisterTitle from "./RegisterTitle";
import LoginLink from "./loginLink";

const RegisterPage = () => (
  <div className="flex items-center justify-center">
    <div className="flex justify-center w-full max-w-6xl min-h-screen max-h-[1000px]">
      {/* 왼쪽: 폼 영역 */}
      <div className="flex items-center justify-center px-4 md:w-1/2">
        <div className="max-w-md w-full mt-4 space-y-7">
          {/* 회원가입 제목 */}
          <RegisterTitle />

          {/* 회원가입 폼 */}
          <RegisterForm />

          {/* 로그인 링크 */}
          <LoginLink />
        </div>
      </div>

      {/* 오른쪽: 이미지 영역 (모바일에서는 숨김) */}
      <RegisterDesktopBackImage />
    </div>
  </div>
);

export default RegisterPage;
