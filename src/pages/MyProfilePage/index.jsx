import { useState } from "react";
import { dummyUser } from "./dummyUser";
import { Button } from "../../shared/ui/Button";
import { InputBox } from "../../shared/ui/InputBox"; // InputBox 임포트 경로 확인
import bgImg from "../../assets/images/notice4.png";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaPhone,
  FaLock,
  FaKey,
  FaEdit,
  FaSignOutAlt,
  FaUserTimes,
  FaCreditCard,
  FaBoxOpen,
} from "react-icons/fa";

const MyProfilePage = () => {
  const [user, setUser] = useState(dummyUser);
  const [profile, setProfile] = useState({ ...dummyUser });
  const [currentPasswordInput, setCurrentPasswordInput] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdateProfile = () => {
    if (
      profile.name === user.name &&
      profile.email === user.email &&
      profile.address === user.address &&
      profile.birth === user.birth &&
      profile.phone === user.phone
    ) {
      alert("변경된 내용이 없습니다.");
      return;
    }

    setUser(profile);
    alert("인적사항이 변경되었습니다.");
  };

  const handlePasswordChange = () => {
    if (!currentPasswordInput) {
      alert("현재 비밀번호를 입력해주세요.");
      return;
    }

    if (currentPasswordInput !== user.password) {
      alert("현재 비밀번호가 올바르지 않습니다.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("새로운 비밀번호가 일치하지 않습니다.");
      return;
    }

    setUser({ ...user, password: newPassword });
    alert("비밀번호가 변경되었습니다.");
    setCurrentPasswordInput("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen w-full max-w-screen-xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">내 프로필</h1>

      {/* 상단 배경 정보 바 */}
      <div className="relative w-full max-w-5xl rounded-lg shadow px-6 py-9 mb-10 bg-white overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-15"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
        <div className="relative z-10">
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* 프로필 + 정보 카드 */}
      <div className="relative w-full max-w-4xl flex flex-col md:flex-row justify-between gap-6 items-start">
        {/* 프로필 사진 */}
        <div className="md:w-1/3 flex flex-col self-center md:self-start">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={user.profileImg}
                alt="Profile"
                className="w-50 h-50 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <button className="absolute bottom-3 right-3 bg-indigo-500 text-white p-3 rounded-full shadow cursor-pointer hover:bg-indigo-400 transition-colors duration-100">
                <FaEdit />
              </button>
            </div>
            <Button
              color="rose"
              className="mt-4 font-semibold"
              icon={<FaBoxOpen />}
            >
              아이템 등록
            </Button>
          </div>
        </div>

        {/* 정보 카드 */}
        <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-2/3">
          {/* 인적 사항 */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-pink-500">
              <FaUser />
              인적 사항
            </h2>
            {[
              { label: "이름", icon: <FaUser />, key: "name" },
              { label: "이메일", icon: <FaEnvelope />, key: "email" },
              { label: "주소", icon: <FaMapMarkerAlt />, key: "address" },
              { label: "생일", icon: <FaBirthdayCake />, key: "birth" },
              { label: "연락처", icon: <FaPhone />, key: "phone" },
            ].map(({ label, icon, key }) => (
              <div className="mb-3" key={key}>
                <label className="block text-sm text-gray-600 mb-1">
                  {label}
                </label>
                <InputBox
                  className="w-full"
                  icon={icon}
                  placeholder={label}
                  value={profile[key]}
                  onChange={(e) =>
                    setProfile({ ...profile, [key]: e.target.value })
                  }
                  color="indigo"
                />
              </div>
            ))}

            <Button
              color="indigo"
              className="mt-4 w-full flex items-center justify-center gap-2 font-semibold"
              icon={<FaEdit />}
              onClick={handleUpdateProfile}
            >
              인적사항 변경
            </Button>
          </section>

          {/* 비밀번호 변경 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-pink-500">
              <FaLock />
              비밀번호 변경
            </h2>
            <div className="mb-3">
              <label className="block text-sm text-gray-600 mb-1 ">
                현재 비밀번호
              </label>
              <InputBox
                className="w-full"
                type="password"
                icon={<FaKey />}
                placeholder="현재 비밀번호"
                value={currentPasswordInput}
                onChange={(e) => setCurrentPasswordInput(e.target.value)}
                color="indigo"
              />
            </div>
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
                disabled={currentPasswordInput !== user.password}
                color="indigo"
              />
            </div>
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
                disabled={currentPasswordInput !== user.password}
                color="indigo"
              />
            </div>

            <Button
              color="indigo"
              className="mt-4 w-full flex items-center justify-center gap-2 font-semibold"
              icon={<FaEdit />}
              onClick={handlePasswordChange}
            >
              비밀번호 변경
            </Button>
          </section>
        </div>
      </div>

      {/* 하단 버튼들 */}
      <div className="mt-8 w-full max-w-4xl flex flex-col gap-4">
        <Button
          color="indigo"
          className="w-full flex items-center justify-center gap-2 font-semibold"
          icon={<FaCreditCard />}
        >
          결제이력
        </Button>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Button
            color="rose"
            className="w-full flex items-center justify-center gap-2 font-semibold"
            icon={<FaSignOutAlt />}
          >
            Logout
          </Button>
          <Button
            color="gray"
            className="w-full flex items-center justify-center gap-2 font-semibold"
            icon={<FaUserTimes />}
          >
            회원 탈퇴
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
