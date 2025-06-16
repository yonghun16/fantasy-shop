import { useState } from "react";
import {
  LuUser,
  LuMail,
  LuMapPinHouse,
  LuCake,
  LuPhone,
  LuRefreshCcw,
} from "react-icons/lu";
import { InputBox } from "../../shared/ui/InputBox";
import { Button } from "../../shared/ui/Button";
import { formatPhoneNumber } from "./useProfileForm";
import useKakaoAddress from "./useKakaoAddress";
import { useProfileForm } from "./useProfileForm";

const fields = [
  { label: "이름", icon: <LuUser />, key: "name" },
  { label: "이메일", icon: <LuMail />, key: "email" },
  { label: "주소", icon: <LuMapPinHouse />, key: "address" },
  { label: "가입일", icon: <LuCake />, key: "createAt" },
  { label: "연락처", icon: <LuPhone />, key: "phone" },
];

const ProfileDetailsSection = ({ profile, setProfile, onSubmit }) => {
  const { openAddressModal, loading } = useKakaoAddress();
  const { isValidEmail } = useProfileForm();
  const [emailError, setEmailError] = useState("");

  const handleAddressClick = () => {
    if (loading) {
      alert("주소 API 로딩 중입니다. 잠시만 기다려주세요.");
      return;
    }
    openAddressModal((data) => {
      setProfile((prev) => ({ ...prev, address: data.address }));
    });
  };

  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-pink-500">
        <LuUser />
        인적 사항
      </h2>

      {fields.map(({ label, icon, key }) => {
        const isAddressField = key === "address";
        const isEmailField = key === "email";

        return (
          <div className="mb-3" key={key}>
            <label className="block text-sm text-gray-600 mb-1">{label}</label>

            <InputBox
              className="w-full"
              icon={icon}
              placeholder={label}
              value={
                key === "phone"
                  ? formatPhoneNumber(profile[key])
                  : key === "createAt"
                  ? profile[key]?.slice(0, 10) || ""
                  : profile[key] || ""
              }
              type={key === "phone" ? "tel" : isEmailField ? "email" : "text"}
              disabled={key === "createAt"}
              onChange={(e) => {
                if (isAddressField) return;

                const value = e.target.value;

                setProfile({
                  ...profile,
                  [key]:
                    key === "phone"
                      ? value.replace(/\D/g, "").slice(0, 11)
                      : value,
                });
              }}
              onBlur={(e) => {
                if (isEmailField) {
                  const isValid = isValidEmail(e.target.value);
                  setEmailError(
                    isValid ? "" : "올바른 이메일 형식이 아닙니다."
                  );
                }
              }}
              onClick={isAddressField ? handleAddressClick : undefined}
              readOnly={isAddressField}
              style={
                isAddressField
                  ? { cursor: loading ? "not-allowed" : "pointer" }
                  : {}
              }
              color="indigo"
            />
            {isEmailField && emailError && (
              <p className="text-sm text-red-500 mt-1">{emailError}</p>
            )}
          </div>
        );
      })}

      <Button
        color="indigo"
        className="mt-4 w-full flex items-center justify-center gap-2 font-semibold"
        icon={<LuRefreshCcw />}
        onClick={onSubmit}
      >
        인적사항 변경
      </Button>
    </section>
  );
};

export default ProfileDetailsSection;
