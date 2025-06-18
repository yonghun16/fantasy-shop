import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";


const shopName = useSelector((state) => state.company.companyData.companyName);

const RegisterTitle = () => {
  return (
    <div className="text-center">
      {/* 데스크탑에선 텍스트 */}
      <h2 className="text-2xl font-semibold hidden md:block">회원가입</h2>

      {/* 모바일에선 이미지 + 텍스트 */}
      <img
        src={logo}
        alt="판타지쇼핑몰 로고"
        className="mx-auto block md:hidden w-25"
      />
      <h2 className="text-2xl font-semibold block md:hidden">{shopName}</h2>
    </div>
  );
}

export default RegisterTitle
