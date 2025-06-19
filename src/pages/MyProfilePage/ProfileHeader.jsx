import { useSelector } from "react-redux";
import profileHeaderBgImg from "../../assets/images/notice4.png";

const ProfileHeader = () => {
  const userData = useSelector((state) => state.user.userData);

  return (
    <section className="hidden md:block w-full max-w-5xl mb-10 overflow-hidden bg-white">
      <h1 className="px-6 pt-4 pb-7 text-2xl font-bold text-center">내 프로필</h1>

      <div className="relative px-6 py-9" >
        {/* 배경 이미지 */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-15 z-0 rounded-lg"
          style={{ backgroundImage: `url(${profileHeaderBgImg})` }}
        />

        {/* 텍스트 컨텐츠 */}
        <div className="relative z-10">
          <p className="text-lg font-semibold">{userData.userName}</p>
          <p className="text-gray-500">{userData.email}</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
