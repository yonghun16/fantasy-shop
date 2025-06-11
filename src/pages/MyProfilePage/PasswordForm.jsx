import { FaLock, FaKey, FaEdit } from "react-icons/fa";
import { InputBox } from "../../shared/ui/InputBox";
import { Button } from "../../shared/ui/Button";

// 비밀번호 변경 폼 컴포넌트
export function PasswordForm({
  currentPassword, // 현재 비밀번호 입력값
  newPassword, // 새 비밀번호 입력값
  confirmPassword, // 비밀번호 확인 입력값
  onChange, // 모든 input에서 호출되는 공통 핸들러
  onSubmit, // '비밀번호 변경' 버튼 클릭 시 실행되는 함수
}) {
  // 현재 비밀번호가 입력되지 않았을 때 새 비밀번호 입력란을 비활성화하기 위한 조건
  const disabled = !currentPassword || currentPassword.length < 1;

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-pink-500">
        <FaLock />
        비밀번호 변경
      </h2>

      {/* 현재 비밀번호 입력 필드 */}
      <InputBox
        type="password"
        name="current" // name 값으로 어떤 필드인지 구분
        value={currentPassword} // 현재 상태 값
        onChange={onChange} // 값이 바뀔 때 실행될 함수
        icon={<FaKey />}
        placeholder="현재 비밀번호" // 안내 문구
      />

      {/* 새 비밀번호 입력 필드 (현재 비밀번호가 입력되지 않으면 비활성화) */}
      <InputBox
        type="password"
        name="new"
        value={newPassword}
        onChange={onChange}
        icon={<FaKey />}
        placeholder="새로운 비밀번호"
        disabled={!disabled ? false : true} // 조건에 따라 활성/비활성
      />

      {/* 비밀번호 확인 입력 필드 (동일한 조건으로 비활성화) */}
      <InputBox
        type="password"
        name="confirm"
        value={confirmPassword}
        onChange={onChange}
        icon={<FaKey />}
        placeholder="비밀번호 확인"
        disabled={!disabled ? false : true}
      />

      {/* 비밀번호 변경 버튼 */}
      <Button
        color="indigo"
        className="mt-4 w-full flex items-center justify-center gap-2 font-semibold"
        icon={<FaEdit />}
        onClick={onSubmit} // 클릭 시 비밀번호 변경 시도
      >
        비밀번호 변경
      </Button>
    </section>
  );
}
