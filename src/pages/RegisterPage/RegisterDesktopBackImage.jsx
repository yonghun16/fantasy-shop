/* import assets */
import registerImage from "../../assets/images/register-main.webp";

/* UI */
const RegisterDesktopBackImage = () => {
  return (
    <div className="relative hidden md:block md:w-1/2">
      {/* 오버레이 그라데이션 */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to top, rgba(128,128,128,0.8), transparent)',
        }}
      />

      {/* 배경 이미지 */}
      <div
        className="bg-cover bg-center w-full h-full z-0"
        style={{
          backgroundImage: `url("${registerImage}")`,
        }}
      />
    </div>
  )
}

export default RegisterDesktopBackImage
