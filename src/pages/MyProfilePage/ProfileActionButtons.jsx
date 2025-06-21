import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { withdrawUser } from "../../features/user/api/withdrawUser";

/* components, assets */
import { Button } from "../../shared/ui/Button";
import { LuCreditCard, LuLogOut, LuUserRoundX } from "react-icons/lu";


const ProfileActionButtons = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  // 결제 이력 이동
  const handleUploadClick = () => {
    navigate(`/history/${userData.userPk}`);
  };

  return (
    <section className="px-6 py-9">
      {/* 결제 이력 버튼*/}
      <Button
        color="indigo"
        className="w-full mb-4"
        icon={<LuCreditCard />}
        onClick={handleUploadClick}
      >
        결제이력
      </Button>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {/* 로그아웃 버튼 */}
        <Button
          color="rose"
          className="w-full"
          icon={<LuLogOut />}
          onClick={() => {
            localStorage.removeItem('accessToken');
            navigate("/")
          }}
        >
          Logout
        </Button>

        {/* 회원 탈퇴 버튼 */}
        <Button
          color="gray"
          className="w-full"
          icon={<LuUserRoundX />}
          onClick={() => {
            dispatch(withdrawUser());
            // navigate("/")
          }}
        >
          회원 탈퇴
        </Button>
      </div>
    </section>
  );
};

export default ProfileActionButtons;
