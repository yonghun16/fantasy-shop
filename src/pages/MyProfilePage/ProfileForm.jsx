import { InputBox } from "../../shared/ui/InputBox";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaPhone,
  FaEdit,
} from "react-icons/fa";
import { Button } from "../../shared/ui/Button";

// 인적사항 입력 폼 컴포넌트
export function ProfileForm({ profile, onChange, onSubmit }) {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-pink-500">
        <FaUser />
        인적 사항
      </h2>

      {/* 이름 입력 필드 */}
      <InputBox
        name="name" // 폼 이름 (상태 구분용)
        value={profile.name} // 현재 값
        onChange={onChange} // 값 변경 시 실행할 함수
        icon={<FaUser />}
        placeholder="이름" // 안내 문구
      />

      {/* 이메일 입력 필드 */}
      <InputBox
        name="email"
        value={profile.email}
        onChange={onChange}
        icon={<FaEnvelope />}
        placeholder="이메일"
      />

      {/* 주소 입력 필드 */}
      <InputBox
        name="address"
        value={profile.address}
        onChange={onChange}
        icon={<FaMapMarkerAlt />}
        placeholder="주소"
      />

      {/* 생년원일 입력 필드 */}
      <InputBox
        name="birth"
        value={profile.birth}
        onChange={onChange}
        icon={<FaBirthdayCake />}
        placeholder="생일"
      />

      {/* 연락처 입력 필드 */}
      <InputBox
        name="phone"
        value={profile.phone}
        onChange={onChange}
        icon={<FaPhone />}
        placeholder="연락처"
      />

      {/* 인적사항 변경 버튼 */}
      <Button
        color="indigo"
        className="mt-4 w-full flex items-center justify-center gap-2 font-semibold"
        icon={<FaEdit />}
        onClick={onSubmit} // 클릭 시 전달받은 함수 실행
      >
        인적사항 변경
      </Button>
    </section>
  );
}
