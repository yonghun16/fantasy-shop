import loginMobileMain from "../../assets/images/login-mobile-main.png";
import loginMain from "../../assets/images/login-main.png";

const LoginBackImage = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* 모바일 배경 */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 md:hidden"
        style={{
          backgroundImage: `url(${loginMobileMain})`,
        }}
      />

      {/* 데스크탑 배경 */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${loginMain})`,
        }}
      />

      {/* 하얀 반투명 오버레이 */}
      <div className="absolute inset-0 bg-white/40" />
    </div>
  );
};

export default LoginBackImage;
