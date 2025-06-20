/* components, hook */
import useProfileDetailsForm from "../../features/myprofile/useProfileDetailsForm";
import useProfileValidationOptions from "../../features/myprofile/useProfileValidationOptions";  // 유효셩 검사 
import useKakaoAddress from "../../features/myprofile/useKakaoAddress";
import ProfileInputField from "./components/ProfileInputfield";
import { Button } from "../../shared/ui/Button";

/* assets */
import { LuUser, LuMail, LuMapPinHouse, LuPhone, LuRefreshCcw } from "react-icons/lu";


const ProfileDetailsSection = ({ userData }) => {
  const { register, watch, errors, setValue, onUpdateProfile } = useProfileDetailsForm();
  const validationOptions = useProfileValidationOptions();

  // 카카오 주소 찾기 API 
  const { openAddressModal, loading } = useKakaoAddress();
  const address = watch("address");
  const isAddressChanged = (userData.address ?? "").trim() !== (address ?? "").trim();  // 이전 주소가 변경 되었을 때만, 세부주소 활성화

  const handleSearchAddress = () => {
    if (loading) return alert("주소 API가 아직 로드되지 않았습니다.");
    openAddressModal((data) => {
      const fullAddress = data.address;
      setValue("address", fullAddress, { shouldValidate: true });
    });
  };

  return (
    <section className="mb-6 p-6 bg-white border border-gray-300 rounded-md">
      <form className="space-y-5" onSubmit={onUpdateProfile}>
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <span className="text-rose-500"><LuUser /></span>
          <span className="text-black">인적 사항</span>
        </h2>

        <ProfileInputField
          label="이름"
          id="userName"
          placeholder="이름"
          defaultValue={userData.userName}
          icon={<LuUser />}
          className="w-full"
          register={register}
          validation={validationOptions.userName}
          errorMessage={errors.userName}
        />

        <ProfileInputField
          label="이메일"
          id="email"
          placeholder="이메일"
          defaultValue={userData.email}
          icon={<LuMail />}
          register={register}
          disabled={true}
        />

        <ProfileInputField
          label="주소"
          id="address"
          placeholder="주소"
          icon={<LuMapPinHouse />}
          register={register}
          validation={validationOptions.address}
          errorMessage={errors.address}
          value={userData.address ?? ""}
          readOnly
          onClick={handleSearchAddress}
        />

        <ProfileInputField
          label="세부주소"
          id="detaileAaddress"
          placeholder="세부주소"
          icon={<LuMapPinHouse />}
          register={register}
          validation={validationOptions.detaileAaddress}
          errorMessage={errors.detaileAaddress}
          disabled={!isAddressChanged}
        />

        <ProfileInputField
          label="연락처"
          id="phoneNumber"
          placeholder="연락처"
          defaultValue={userData.phoneNumber}
          icon={<LuPhone />}
          register={register}
          validation={validationOptions.phoneNumber}
          errorMessage={errors.phoneNumber}
        />

        <Button
          type="submit"
          color="indigo"
          className="mt-10 w-full"
          icon={<LuRefreshCcw />}
        >
          인적사항 변경
        </Button>
      </form>
    </section>
  );
};

export default ProfileDetailsSection;
