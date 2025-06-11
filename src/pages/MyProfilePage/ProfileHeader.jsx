// 사용자 정보(이름, 이메일)와 배경 이미지를 보여주는 헤더 컴포넌트
export function ProfileHeader({ user, bgImg }) {
  return (
    <div className="relative w-full max-w-5xl rounded-lg shadow px-6 py-9 mb-10 bg-white overflow-hidden">
      {/* 배경 이미지 영역 */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-15"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      {/* 사용자 정보를 보여주는 부분 */}
      <div className="relative z-10">
        <p className="text-lg font-semibold">{user.name}</p>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  );
}
