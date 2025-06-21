/* components */
import ProfileHeader from "./ProfileHeader";
import ProfileImageSection from "./ProfileImageSection";
import ProfileDetailsSection from "./ProfileDetailsSection";
import PasswordChangeSection from "./PasswordChangeSection";
import ProfileActionButtons from "./ProfileActionButtons";


const MyProfilePage = () => {
  return (
    <div className="flex flex-col items-center p-6 min-h-screen max-w-5xl mx-auto">
      <ProfileHeader userData={userData} />

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6 items-start">
        {/* 프로필 사진 섹션 */}
        <ProfileImageSection userData={userData} />

        <div className="bg-white rounded-lg w-full md:w-2/3">
          {/* 인적사항 섹션 */}
          <ProfileDetailsSection />

          {/* 비밀번호 변경 섹션 */}
          <PasswordChangeSection />

          {/* 결제 이력, 로그아웃, 회원 탈퇴 */}
          <ProfileActionButtons />
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
