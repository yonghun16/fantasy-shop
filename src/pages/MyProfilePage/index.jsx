import { useProfileForm } from "./useProfileForm";
import { usePasswordChange } from "./usePasswordChange";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileImageCard } from "./ProfileImageCard";
import { ProfileForm } from "./ProfileForm";
import { PasswordForm } from "./PasswordForm";
import { ProfileActions } from "./ProfileActions";

const MyProfilePage = () => {
  // 인적사항 변경에 필요한 상태 및 함수들을 usePasswordChange에서 가져옵니다
  const { user, profile, handleProfileChange, handleUpdateProfile } =
    useProfileForm();

  // 비밀번호 변경에 필요한 상태 및 함수들을 usePasswordChange에서 가져옵니다
  const {
    currentPasswordInput,
    newPassword,
    confirmPassword,
    handlePasswordInputChange,
    handlePasswordChange,
    isPasswordChangeable,
  } = usePasswordChange(user);

  return (
    // 전체 페이지 레이아웃을 설정
    <div className="flex flex-col items-center p-6 min-h-screen w-full max-w-screen-xl mx-auto px-4">
      {/* 페이지 제목 */}
      <h1 className="text-2xl font-bold mb-6">내 프로필</h1>

      {/* 사용자 정보를 간단히 보여주는 헤더 */}
      <ProfileHeader user={user} />

      {/* 프로필 이미지와 프로필/비밀번호 폼을 나란히 배치하는 영역 */}
      <div className="relative w-full max-w-4xl flex flex-col md:flex-row justify-between gap-6 items-start">
        {/* 왼쪽 영역: 프로필 이미지 영역 */}
        <ProfileImageCard user={user} />

        {/* 오른쪽 영역: 인적사항 수정 폼과 비밀번호 변경 폼 */}
        <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-2/3">
          {/* 사용자 프로필 정보 수정 폼 */}
          <ProfileForm
            profile={profile} // 현재 입력 값
            onChange={handleProfileChange} // 입력 값 변경 시 호출될 함수
            onSubmit={handleUpdateProfile} // 저장 버튼 클릭 시 호출될 함수
          />

          {/* 비밀번호 변경 폼 */}
          <PasswordForm
            currentPasswordInput={currentPasswordInput} // 현재 비밀번호
            newPassword={newPassword} // 새 비밀번호
            confirmPassword={confirmPassword} // 새 비밀번호 확인
            onChange={handlePasswordInputChange} // 입력 값 변경 핸들러
            onSubmit={handlePasswordChange} // 변경 버튼 클릭 시 호출될 함수
            disabled={!isPasswordChangeable} // 조건이 안 맞으면 버튼 비활성화
          />
        </div>
      </div>

      {/* 결제 이력, 로그아웃, 회원탈퇴 버튼 */}
      <ProfileActions />
    </div>
  );
};

export default MyProfilePage;
