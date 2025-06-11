import { useState } from "react";
import { dummyUser } from "./dummyUser";

// 프로필 정보 수정을 위한 커스텀 훅 정의
export function useProfileForm() {
  // 로그인된 사용자 정보 상태
  const [user, setUser] = useState(dummyUser);

  // 수정 중인 사용자 정보 (입력 폼에 반영될 값)
  const [profile, setProfile] = useState({ ...dummyUser });

  // '저장하기' 버튼 클릭 시 실행
  const handleUpdateProfile = () => {
    // 변경된 값이 있는지 확인 (모든 필드를 비교)
    const isSame =
      profile.name === user.name &&
      profile.email === user.email &&
      profile.address === user.address &&
      profile.birth === user.birth &&
      profile.phone === user.phone;

    // 값이 하나도 바뀌지 않았으면 경고만 출력
    if (isSame) {
      alert("변경된 내용이 없습니다.");
      return;
    }

    // 변경 사항이 있다면 user 상태를 업데이트하고 알림
    setUser(profile);
    alert("인적사항이 변경되었습니다.");
  };

  // 외부에서 훅을 사용 가능하게 필요한 값과 함수들을 반환
  return {
    user, // 현재 저장된 사용자 정보
    profile, // 수정 중인 사용자 정보 (입력값)
    setProfile, // 입력값 변경 시 사용하는 함수
    handleUpdateProfile, // 저장 버튼 클릭 시 호출되는 함수
  };
}
