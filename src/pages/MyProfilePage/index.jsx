import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../shared/api/axios";

/* components */
import ProfileHeader from "./ProfileHeader";
import ProfileImageSection from "./ProfileImageSection";
import ProfileDetailsSection from "./ProfileDetailsSection";
import PasswordChangeSection from "./PasswordChangeSection";
import ProfileActionButtons from "./ProfileActionButtons";

const fetchUserData = async () => {
  const { data } = await axiosInstance.get("/users/me", {
    headers: { "Content-Type": "application/json" },
  });
  return data;
};

const MyProfilePage = () => {
  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: fetchUserData,
    staleTime: 1000 * 60 * 5, // 5분간 fresh
    cacheTime: 1000 * 60 * 10, // 10분간 메모리 캐시 유지
    refetchOnWindowFocus: false, // 탭 돌아올 때 자동 리패치 X
  });

  if (isLoading) return (
    <div className="flex items-center justify-center h-screen-1/2">불러오는 중...</div>
  );
  if (isError) return <div>에러 발생: {error.message}</div>;

  return (
    <div className="flex flex-col items-center p-6 min-h-screen max-w-5xl mx-auto">
      <ProfileHeader userData={userData} />

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6 items-start">
        {/* 프로필 사진 섹션 */}
        <ProfileImageSection userData={userData} />

        <div className="bg-white rounded-lg w-full md:w-2/3">
          {/* 인적사항 섹션 */}
          <ProfileDetailsSection userData={userData} />

          {/* 비밀번호 변경 섹션 */}
          <PasswordChangeSection />

          {/* 결제 이력, 로그아웃, 회원 탈퇴 */}
          <ProfileActionButtons />
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
