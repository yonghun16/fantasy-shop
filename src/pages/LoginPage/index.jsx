/* components */
import LoginForm from "./LoginForm";
import LoginTitle from "./LoginTitle";
import RegisterLink from "./RegisterLink";

/* assets */
import LoginBackImage from "./LoginBackImage";

const LoginPage = () => {
  return (
    <div className="relative flex items-center justify-center w-full overflow-hidden">

      {/* 로그인 백그라운드 이미지 */}
      <LoginBackImage />

      <div className="relative p-12 w-[450px] md:bg-white rounded-lg border-none">
        {/* 로그인 타이틀 */}
        <LoginTitle />

        {/* 로그인 폼 */}
        <LoginForm />

        {/* 회원가입 링크 */}
        <RegisterLink />
      </div>
    </div>
  );
};

export default LoginPage;
