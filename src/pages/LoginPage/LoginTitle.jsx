import { useSelector } from "react-redux";
import logo from "../../assets/images/logo.png";


const LoginTitle = () => {
  const shopName = useSelector((state) => state.company.companyData.companyName);

  return (
    <div className="flex flex-col items-center text-center font-bold text-3xl mb-10">
      <img src={logo} alt="로그인 메인 이미지" className="w-24 hidden md:block" />
      <p className="mb-10 md:mb-0 leading-relaxed">
        {shopName}에 <br /> 오신걸 환영합니다. <br /> 용사님!
      </p>
    </div>
  )
};

export default LoginTitle;
