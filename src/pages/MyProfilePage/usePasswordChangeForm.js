import { useState } from "react";
import { toast } from "react-toastify";

// 비밀번호 변경 폼 상태와 로직을 관리하는 커스텀 훅
// user: 현재 사용자 정보 객체
// setUser: 사용자 정보를 업데이트하는 함수
export const usePasswordChangeForm = (user, setUser) => {
  // 현재 입력한 '현재 비밀번호' 상태
  const [currentPasswordInput, setCurrentPasswordInput] = useState("");
  // 새로 입력할 비밀번호 상태
  const [newPassword, setNewPassword] = useState("");
  // 새 비밀번호 확인 입력 상태
  const [confirmPassword, setConfirmPassword] = useState("");

  // 비밀번호 변경 시 호출되는 함수
  const handlePasswordChange = () => {
    // 현재 비밀번호 입력란이 비어있으면 경고
    if (!currentPasswordInput) {
      toast.warn("현재 비밀번호를 입력해주세요.");
      return;
    }

    // 입력한 현재 비밀번호가 실제 사용자 비밀번호와 다르면 경고
    if (currentPasswordInput !== user.password) {
      toast.error("현재 비밀번호가 올바르지 않습니다.");
      return;
    }

    // 새 비밀번호와 확인 비밀번호가 일치하지 않으면 경고
    if (newPassword !== confirmPassword) {
      toast.error("새로운 비밀번호가 일치하지 않습니다.");
      return;
    }

    // 모든 조건 통과 시 사용자 정보의 비밀번호를 새 비밀번호로 업데이트
    setUser({ ...user, password: newPassword });
    toast.success("비밀번호가 변경되었습니다.");

    // 입력 폼 초기화 (빈 문자열로 리셋)
    setCurrentPasswordInput("");
    setNewPassword("");
    setConfirmPassword("");
  };

  // 훅에서 관리하는 상태와 함수를 반환
  return {
    currentPasswordInput,
    newPassword,
    confirmPassword,
    setCurrentPasswordInput,
    setNewPassword,
    setConfirmPassword,
    handlePasswordChange,
  };
};
