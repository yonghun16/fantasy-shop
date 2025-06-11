import { useState } from "react";

// 비밀번호 변경 로직을 담당하는 커스텀 훅 정의
// user: 현재 로그인된 사용자 정보
// setUser: 사용자 정보를 업데이트할 수 있는 함수
export function usePasswordChange(user, setUser) {
  // 현재 비밀번호 입력값을 상태로 관리
  const [currentPassword, setCurrentPassword] = useState("");
  // 새 비밀번호 입력값을 상태로 관리
  const [newPassword, setNewPassword] = useState("");
  // 새 비밀번호 확인 입력값을 상태로 관리
  const [confirmPassword, setConfirmPassword] = useState("");
  // 비밀번호 변경을 처리하는 함수
  const handlePasswordChange = () => {
    // 현재 비밀번호가 비어 있을 경우
    if (!currentPassword) {
      alert("현재 비밀번호를 입력해주세요.");
      return;
    }
    // 현재 비밀번호가 실제 사용자 비밀번호와 다를 경우
    if (currentPassword !== user.password) {
      alert("현재 비밀번호가 올바르지 않습니다.");
      return;
    }
    // 새 비밀번호와 확인 비밀번호가 일치하지 않을 경우
    if (newPassword !== confirmPassword) {
      alert("새로운 비밀번호가 일치하지 않습니다.");
      return;
    }
    // 모든 조건이 만족되면 사용자 정보의 비밀번호를 새 비밀번호로 업데이트
    setUser({ ...user, password: newPassword });

    alert("비밀번호가 변경되었습니다.");

    // 입력 필드 초기화
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  // 외부에서 훅을 사용 가능하게 필요한 값과 함수들을 반환
  return {
    currentPassword, // 현재 비밀번호 입력값
    newPassword, // 새 비밀번호 입력값
    confirmPassword, // 새 비밀번호 확인 입력값
    setCurrentPassword, // 현재 비밀번호 설정 함수
    setNewPassword, // 새 비밀번호 설정 함수
    setConfirmPassword, // 새 비밀번호 확인 설정 함수
    handlePasswordChange, // 비밀번호 변경 처리 함수
  };
}
