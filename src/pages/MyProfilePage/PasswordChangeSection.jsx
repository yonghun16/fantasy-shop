// 공통으로 사용하는 InputBox, Button 컴포넌트와 아이콘들을 불러옵니다.
import { InputBox } from "../../shared/ui/InputBox";
import { Button } from "../../shared/ui/Button";
import { FaLock, FaKey, FaEdit } from "react-icons/fa";

const PasswordChangeSection = ({
  currentPasswordInput,
  newPassword,
  confirmPassword,
  setCurrentPasswordInput,
  setNewPassword,
  setConfirmPassword,
  handlePasswordChange,
  isCurrentPasswordValid,
}) => {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-pink-500">
        <FaLock />
        비밀번호 변경
      </h2>

      {/* 현재 비밀번호 입력 필드 */}
      <div className="mb-3">
        <label className="block text-sm text-gray-600 mb-1">
          현재 비밀번호
        </label>
        <InputBox
          className="w-full"
          type="password"
          icon={<FaKey />}
          placeholder="현재 비밀번호"
          value={currentPasswordInput} // 입력값 상태
          onChange={(e) => setCurrentPasswordInput(e.target.value)} // 입력값 변경 핸들러
          color="indigo"
        />
      </div>

      {/* 새 비밀번호 입력 필드 */}
      <div className="mb-3">
        <label className="block text-sm text-gray-600 mb-1">
          새로운 비밀번호
        </label>
        <InputBox
          className="w-full"
          type="password"
          icon={<FaKey />}
          placeholder="새로운 비밀번호"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          disabled={!isCurrentPasswordValid} // 현재 비밀번호가 올바르지 않으면 입력 불가
          color="indigo"
        />
      </div>

      {/* 비밀번호 확인 입력 필드 */}
      <div className="mb-3">
        <label className="block text-sm text-gray-600 mb-1">
          비밀번호 확인
        </label>
        <InputBox
          className="w-full"
          type="password"
          icon={<FaKey />}
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={!isCurrentPasswordValid} // 현재 비밀번호가 올바르지 않으면 입력 불가
          color="indigo"
        />
      </div>

      {/* 비밀번호 변경 버튼 */}
      <Button
        color="indigo"
        className="mt-4 w-full flex items-center justify-center gap-2 font-semibold"
        icon={<FaEdit />}
        onClick={handlePasswordChange} // 버튼 클릭 시 비밀번호 변경 처리 함수 실행
      >
        비밀번호 변경
      </Button>
    </section>
  );
};

export default PasswordChangeSection;
