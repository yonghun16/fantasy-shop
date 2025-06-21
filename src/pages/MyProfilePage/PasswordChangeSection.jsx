/* components, hook */
import useProfileDetailsForm from "../../features/myprofile/useProfileDetailsForm"; // react-hook-form formMethods
import useProfileValidationOptions from "../../features/myprofile/useProfileValidationOptions";  // 유효셩 검사 
import ProfileInputField from "./components/ProfileInputfield";
import { Button } from "../../shared/ui/Button";

/* assets */
import { LuLock, LuCheckCheck, LuRefreshCcw } from "react-icons/lu";

const PasswordChangeSection = () => {
  const { register, errors, newPassword, onUpdatePassword } = useProfileDetailsForm();
  const validationOptions = useProfileValidationOptions();

  return (
    <section className="mb-2 p-6 bg-white border border-gray-300 rounded-md">
      <form className="space-y-5" onSubmit={onUpdatePassword}>
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <span className="text-rose-500"><LuLock /></span>
          <span className="text-black">비밀번호 변경</span>
        </h2>

        <ProfileInputField
          id="userEmail"
          type="email"
          autoComplete="email"
          className="w-full hidden"
          readOnly
          register={register}
        />

        <ProfileInputField
          label="현재 비밀번호"
          id="currentPassword"
          type="password"
          autoComplete="new-password"
          icon={<LuLock />}
          placeholder="현재 비밀번호"
          className="w-full"
          register={register}
          validation={validationOptions.currentPassword}
          errorMessage={errors.currentPassword}
        />

        <ProfileInputField
          label="새 비밀번호"
          id="newPassword"
          type="password"
          autoComplete="new-password"
          icon={<LuLock />}
          placeholder="새 비밀번호"
          className="w-full"
          register={register}
          validation={validationOptions.newPassword}
          errorMessage={errors.newPassword}
        />

        <ProfileInputField
          label="새 비밀번호 확인"
          id="confirmNewPassword"
          type="password"
          autoComplete="new-password"
          icon={<LuCheckCheck  />}
          placeholder="새 비밀번호 확인"
          className="w-full"
          register={register}
          validation={validationOptions.confirmNewPassword(newPassword)}
          errorMessage={errors.confirmNewPassword}
        />

        <Button
          type="submit"
          color="indigo"
          className="mt-10 w-full"
          icon={<LuRefreshCcw />}
        >
          비밀번호 변경
        </Button>
      </form>
    </section>
  )
}

export default PasswordChangeSection
