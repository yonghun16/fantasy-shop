import { useForm } from "react-hook-form";


const useProfileDetailsForm = (submitType) => {
  // react-hook-form
  const {
    register,
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onTouched" });

  const newPassword = watch("newPassword");  // password에 watch(감시) 등록

  // onSubmit Handler
  const onSubmit = async (data) => {
    if (submitType === "updateProfile") {
      const body = {
        userName: data.userName,
        address: data.address + " " + data.detaileAaddress,
        phoneNumber: data.phoneNumber,
        profileImage: data.profileImage
      };
      try {
        await axiosInstance.put("/users/me", body, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("인적사항이 성공적으로 변경되었습니다!")
      } catch (error) {
        toast.error("인적사항 변경에 실패했습니다.\n다시 시도해 주세요.", {
          style: { whiteSpace: "pre-line" }
        });
        console.error("updateProfile Error", error);
      }
    }
    else if (submitType === "updatePassword") {
      const body = {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword
      };
      try {
        await axiosInstance.post("/users/password", body, {
          headers: { "Content-Type": "application/json", },
        });
        reset();
        toast.success("비밀번호가 성공적으로 변경되었습니다!")
      } catch (error) {
        toast.error("비밀번호 변경에 실패했습니다.\n다시 시도해 주세요.", {
          style: { whiteSpace: "pre-line" }
        });
        console.error("updatePassword Error", error);
      }
    }
  };

  return {
    register,
    errors,
    watch,
    setValue,
    newPassword,
    onSubmit: handleSubmit(onSubmit),
  };
}

export default useProfileDetailsForm
