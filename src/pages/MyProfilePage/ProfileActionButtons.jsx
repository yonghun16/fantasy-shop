import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/Button";
import { LuCreditCard, LuLogOut, LuUserRoundX } from "react-icons/lu";

const ProfileActionButtons = () => {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/history/:id");
  };

  return (
    <div className="mt-8 w-full max-w-4xl flex flex-col gap-4">
      {/* 결제 이력 버튼튼*/}
      <Button
        color="indigo"
        className="w-full flex items-center justify-center gap-2 font-semibold"
        icon={<LuCreditCard />}
        onClick={handleUploadClick}
      >
        결제이력
      </Button>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {/* 로그아웃 버튼 */}
        <Button
          color="rose"
          className="w-full flex items-center justify-center gap-2 font-semibold"
          icon={<LuLogOut />}
        >
          Logout
        </Button>

        {/* 회원 탈퇴 버튼 */}
        <Button
          color="gray"
          className="w-full flex items-center justify-center gap-2 font-semibold"
          icon={<LuUserRoundX />}
        >
          회원 탈퇴
        </Button>
      </div>
    </div>
  );
};

export default ProfileActionButtons;
