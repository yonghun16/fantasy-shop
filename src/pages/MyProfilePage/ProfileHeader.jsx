import bgImg from "../../assets/images/notice4.png";

const ProfileHeader = ({ name, email }) => {
  return (
    <div className="relative w-full max-w-5xl rounded-lg shadow px-6 py-9 mb-10 bg-white overflow-hidden">
      {/* 배경 이미지 영역 */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-15"
        style={{ backgroundImage: `url(${bgImg})` }}
      />

      {/* 텍스트 컨텐츠 영역 */}
      <div className="relative z-10">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-gray-500">{email}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
