import { useState } from "react";
import { dummyUser } from "./dummyUser";
import { toast } from "react-toastify";

// 이메일 유효성 검사 함수
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// 숫자만 추출하고 하이픈 붙이는 함수
const formatPhoneNumber = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11); // 숫자만, 11자 제한
  if (digits.length < 4) return digits;
  if (digits.length < 8) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
};
export { formatPhoneNumber };

// 프로필 정보를 관리하는 커스텀 훅
export const useProfileForm = () => {
  // 실제 사용자 상태 (서버 저장용, 더미 데이터로 초기화)
  const [user, setUser] = useState(dummyUser);
  // 프로필 수정 폼 상태 (user 객체를 복사해서 초기화)
  const [profile, setProfile] = useState({ ...dummyUser });

  // 프로필 수정 버튼 클릭 시 실행되는 함수
  const handleUpdateProfile = () => {
    // 이메일 형식 유효성 검사
    if (!isValidEmail(profile.email)) {
      toast.error("유효한 이메일 주소를 입력해주세요.");
      return;
    }

    const phoneDigits = profile.phone.replace(/\D/g, "");
    if (phoneDigits.length > 11) {
      toast.error("전화번호는 최대 11자리 숫자까지만 입력할 수 있습니다.");
      return;
    }

    // 프로필의 각 필드가 user와 모두 같으면 변경 사항 없음
    const noChanges =
      profile.name === user.name &&
      profile.email === user.email &&
      profile.address === user.address &&
      profile.createAt === user.createAt &&
      profile.phone === user.phone;

    // 변경 사항이 없으면 알림
    if (noChanges) {
      toast.warn("변경된 내용이 없습니다.");
      return;
    }
    // 변경 사항이 있으면 user 상태를 profile 상태로 업데이트
    setUser(profile);
    toast.success("인적사항이 변경되었습니다.");
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
