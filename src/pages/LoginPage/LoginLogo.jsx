import React from "react";
import logo from "../../assets/images/logo.png";

const LoginLogo = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center gap-1 font-bold text-3xl mb-7">
        <img src={logo} alt="로그인 메인 이미지" className="w-24" />
        <p>
          판타지 쇼핑몰에 <br /> 오신걸 환영합니다. 용사여!
        </p>
      </div>
    </div>
  );
};

export default LoginLogo;
