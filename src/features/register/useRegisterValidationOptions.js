export function useRegisterValidationOptions() {
  return {
    userName: {
      required: "이름은 필수입니다.",
    },
    email: {
      required: "이메일은 필수입니다.",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "유효한 이메일을 입력하세요.",
      },
    },
    password: {
      required: "비밀번호는 필수입니다.",
      minLength: {
        value: 6,
        message: "비밀번호는 최소 6자 이상이어야 합니다.",
      },
    },
    confirmPassword: (password) => ({
      required: "비밀번호 확인은 필수입니다.",
      validate: (value) =>
        value === password || "비밀번호가 일치하지 않습니다.",
    }),
    agree: {
      required: "약관에 동의하셔야 합니다.",
    },
  };
}
