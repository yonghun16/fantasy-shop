// 공통 버튼 UI 컴포넌트와 아이콘들을 불러옵니다.
import { Button } from "../../shared/ui/Button";
import { FaCreditCard, FaSignOutAlt, FaUserTimes } from "react-icons/fa";

const ProfileActionButtons = () => {
  return (
    <div className="mt-8 w-full max-w-4xl flex flex-col gap-4">
      {/* 결제 이력 버튼튼*/}
      <Button
        color="indigo"
        className="w-full flex items-center justify-center gap-2 font-semibold"
        icon={<FaCreditCard />}
      >
        결제이력
      </Button>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {/* 로그아웃 버튼 */}
        <Button
          color="rose"
          className="w-full flex items-center justify-center gap-2 font-semibold"
          icon={<FaSignOutAlt />}
        >
          Logout
        </Button>

        {/* 회원 탈퇴 버튼 */}
        <Button
          color="gray"
          className="w-full flex items-center justify-center gap-2 font-semibold"
          icon={<FaUserTimes />}
        >
          회원 탈퇴
        </Button>
      </div>
    </div>
  );
};

export default ProfileActionButtons;
