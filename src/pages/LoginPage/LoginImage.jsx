import LoginImageCover from "../../assets/images/login-main.png";

const LoginImage = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* 배경 이미지 + 흐림 효과 */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{
          backgroundImage: `url(${LoginImageCover})`,
        }}
      />

      {/* 하얀 반투명 오버레이 */}
      <div className="absolute inset-0 bg-white/40" />
    </div>
  );
};

export default LoginImage;
