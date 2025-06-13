import ProfileHeader from "./ProfileHeader";
import ProfileImageSection from "./ProfileImageSection";
import ProfileDetailsSection from "./ProfileDetailsSection";
import PasswordChangeSection from "./PasswordChangeSection";
import ProfileActionButtons from "./ProfileActionButtons";
import { useProfileForm } from "./useProfileForm";
import { usePasswordChangeForm } from "./usePasswordChangeForm";

const MyProfilePage = () => {
  // 프로필 수정 관련 상태와 함수들을 가져옵니다.
  const { user, setUser, profile, setProfile, handleUpdateProfile } =
    useProfileForm();

  // 비밀번호 변경 관련 상태와 함수들을 가져옵니다.
  const {
    currentPasswordInput,
    newPassword,
    confirmPassword,
    setCurrentPasswordInput,
    setNewPassword,
    setConfirmPassword,
    handlePasswordChange,
  } = usePasswordChangeForm(user, setUser);

  return (
    <div className="flex flex-col items-center p-6 min-h-screen w-full max-w-screen-xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">내 프로필</h1>

      {/* 사용자 이름과 이메일을 보여주는 헤더 */}
      <ProfileHeader name={user.name} email={user.email} />

      {/* 사진 + 정보 카드 */}
      <div className="relative w-full max-w-4xl flex flex-col md:flex-row justify-between gap-6 items-start">
        {/* 프로필 사진 섹션 */}
        <ProfileImageSection user={user} />

        {/* 인적 사항 및 비밀번호 변경 카드 */}
        <div className="bg-white rounded-lg p-4 w-full md:w-2/3">
          {/* 인적사항 섹션 */}
          <ProfileDetailsSection
            profile={profile}
            setProfile={setProfile}
            onSubmit={handleUpdateProfile} // 수정 시 실행되는 함수
          />

          {/* 비밀번호 변경 섹션 */}
          <PasswordChangeSection
            currentPasswordInput={currentPasswordInput}
            newPassword={newPassword}
            confirmPassword={confirmPassword}
            setCurrentPasswordInput={setCurrentPasswordInput}
            setNewPassword={setNewPassword}
            setConfirmPassword={setConfirmPassword}
            handlePasswordChange={handlePasswordChange}
            // 현재 비밀번호가 맞는지 검증
            isCurrentPasswordValid={currentPasswordInput === user.password}
          />
        </div>
      </div>

      {/* 결제 이력, 로그아웃, 회원 탈퇴 */}
      <ProfileActionButtons />
    </div>
  );
};

export default MyProfilePage;
