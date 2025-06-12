import { useState } from "react";
import { dummyUser } from "./dummyUser";

// 프로필 정보를 관리하는 커스텀 훅
export const useProfileForm = () => {
  // 실제 사용자 상태 (서버 저장용, 더미 데이터로 초기화)
  const [user, setUser] = useState(dummyUser);
  // 프로필 수정 폼 상태 (user 객체를 복사해서 초기화)
  const [profile, setProfile] = useState({ ...dummyUser });

  // 프로필 수정 버튼 클릭 시 실행되는 함수
  const handleUpdateProfile = () => {
    // 프로필의 각 필드가 user와 모두 같으면 변경 사항 없음
    const noChanges =
      profile.name === user.name &&
      profile.email === user.email &&
      profile.address === user.address &&
      profile.birth === user.birth &&
      profile.phone === user.phone;

    // 변경 사항이 없으면 알림
    if (noChanges) {
      alert("변경된 내용이 없습니다.");
      return;
    }

    // 변경 사항이 있으면 user 상태를 profile 상태로 업데이트
    setUser(profile);
    alert("인적사항이 변경되었습니다.");
  };

  // 훅에서 상태와 함수들을 반환
  return {
    user,
    setUser,
    profile,
    setProfile,
    handleUpdateProfile,
  };
};
