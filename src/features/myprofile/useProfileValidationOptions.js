const useProfileValidationOptions = () => {
  return {
    name: {
      required: "이름을 입력해주세요.",
    },
    address: {
      required: "주소를 입력해주세요.",
    },
    detaileAaddress: {
      required: "세부주소를 입력해주세요.",
    },
    phoneNumber: {
      required: "연락처를 입력해주세요.",
      pattern: {
        value: /^(\d{2,3})-(\d{3,4})-(\d{4})$/,
        message: "올바른 연락처 형식(예: 010-1234-5678)을 입력해주세요.",
      },
    },
    currentPassword: {
      required: "비밀번호는 필수입니다.",
      minLength: {
        value: 6,
        message: "비밀번호는 최소 6자 이상이어야 합니다.",
      },
    },
    newPassword: {
      required: "비밀번호는 필수입니다.",
      minLength: {
        value: 6,
        message: "비밀번호는 최소 6자 이상이어야 합니다.",
      },
    },
    confirmNewPassword: (password) => ({
      required: "비밀번호 확인은 필수입니다.",
      validate: (value) =>
        value === password || "비밀번호가 일치하지 않습니다.",
    }),
  };
}

export default useProfileValidationOptions
