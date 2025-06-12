import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaPhone,
  FaEdit,
} from "react-icons/fa";
import { InputBox } from "../../shared/ui/InputBox";
import { Button } from "../../shared/ui/Button";
import { formatPhoneNumber } from "./useProfileForm";

// 인적 사항에 필요한 입력 필드 정보들을 배열로 정의
const fields = [
  { label: "이름", icon: <FaUser />, key: "name" },
  { label: "이메일", icon: <FaEnvelope />, key: "email" },
  { label: "주소", icon: <FaMapMarkerAlt />, key: "address" },
  { label: "생일", icon: <FaBirthdayCake />, key: "birth" },
  { label: "연락처", icon: <FaPhone />, key: "phone" },
];

// profile: 사용자 프로필 정보가 담긴 객체
// setProfile: profile 상태를 업데이트하는 함수
// onSubmit: 변경 사항 저장 버튼 클릭 시 실행될 함수
const ProfileDetailsSection = ({ profile, setProfile, onSubmit }) => {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-pink-500">
        <FaUser />
        인적 사항
      </h2>

      {/* 각 필드를 순회하며 라벨과 입력창 렌더링 */}
      {fields.map(({ label, icon, key }) => (
        <div className="mb-3" key={key}>
          {/* 필드 이름 표시 */}
          <label className="block text-sm text-gray-600 mb-1">{label}</label>

          {/* value: 현재 profile 상태에서 해당 키의 값 */}
          {/* onChange: 입력값이 바뀌면 profile 상태를 복사해서 해당 키 값만 새로 바꿔서 저장 */}
          <InputBox
            className="w-full"
            icon={icon}
            placeholder={label}
            value={
              key === "phone" ? formatPhoneNumber(profile[key]) : profile[key]
            }
            type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
            onChange={(e) => {
              const value = e.target.value;
              setProfile({
                ...profile,
                [key]:
                  key === "phone"
                    ? value.replace(/\D/g, "").slice(0, 11)
                    : value,
              });
            }}
            color="indigo"
          />
        </div>
      ))}

      {/* 변경 사항 저장 버튼 */}
      {/* 클릭 시 onSubmit 함수 실행 */}
      <Button
        color="indigo"
        className="mt-4 w-full flex items-center justify-center gap-2 font-semibold"
        icon={<FaEdit />}
        onClick={onSubmit}
      >
        인적사항 변경
      </Button>
    </section>
  );
};

export default ProfileDetailsSection;
