/* import assets */
import RegisterImageCover from "../../assets/images/register-main.png";

/* UI */
const RegisterImage = () => {
  return (
    <>
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
          backgroundImage: `url("${RegisterImageCover}")`,
        }}
      />
    </>
  )
}

export default RegisterImage
