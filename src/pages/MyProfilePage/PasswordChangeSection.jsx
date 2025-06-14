import { InputBox } from "../../shared/ui/InputBox";
import { Button } from "../../shared/ui/Button";
import { LuLock, LuCheckCheck, LuRefreshCcw } from "react-icons/lu";

const PasswordChangeSection = ({
  currentPasswordInput,
  newPassword,
  confirmPassword,
  setCurrentPasswordInput,
  setNewPassword,
  setConfirmPassword,
  handlePasswordChange,
}) => {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-pink-500">
        <LuLock />
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
          icon={<LuLock />}
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
          icon={<LuLock />}
          placeholder="새로운 비밀번호"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
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
          icon={<LuCheckCheck />}
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          color="indigo"
        />
      </div>

      {/* 비밀번호 변경 버튼 */}
      <Button
        color="indigo"
        className="mt-4 w-full flex items-center justify-center gap-2 font-semibold"
        icon={<LuRefreshCcw />}
        onClick={handlePasswordChange} // 버튼 클릭 시 비밀번호 변경 처리 함수 실행
      >
        비밀번호 변경
      </Button>
    </section>
  );
};

export default PasswordChangeSection;
