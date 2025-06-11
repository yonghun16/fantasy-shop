/* import components */
import RegisterForm from "./RegisterForm";
import RegisterImage from "./RegisterImage";

/* UI */
const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-7xl h-screen max-h-[1000px]">
        {/* 왼쪽: 폼 */}
        <div className="flex w-full items-center justify-center px-4 md:w-1/2" >
          <RegisterForm />
        </div>

        {/* 오른쪽: 이미지 */}
        <div className="relative max-h-[1000px] hidden md:block md:w-1/2 ">
          <RegisterImage />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
