const RegisterLayout = ({ children, backImage, logo }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-6xl min-h-screen max-h-[1000px]">

        {/* 왼쪽: 폼 영역 */}
        <div className="flex items-center justify-center w-full px-4 md:w-1/2">
          <div className="max-w-md w-full mt-4 space-y-7">
            {logo}

            <div className="flex items-center justify-center p-6 h-[550px] border border-gray-200 rounded-md">
              {children}
            </div>

            <p className="mb-4 text-center text-sm text-gray-600">
              이미 계정이 있다면?{" "}
              <a href="login" className="text-indigo-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>

        {/* 오른쪽: 이미지 영역 (모바일에서는 숨김) */}
        <div className="relative max-h-[1000px] hidden md:block md:w-1/2">
          {backImage}
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout;
