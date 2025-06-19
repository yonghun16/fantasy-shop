import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosInstance from "../../shared/api/axios";


const useProfileDetailsForm = (submitType) => {
  // react-hook-form
  const {
    register,
    watch,
    setValue,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ mode: "onTouched" });

  const newPassword = watch("newPassword");  // password에 watch(감시) 등록

  // onSubmit Handler
  const onSubmit = async (data) => {
    if (submitType === "updateProfile") {
      console.log(data)
      // data = {
      // };
      // try {
      //   // await dispatch(API(data)).unwrap();
      //   console.log(data);
      // } catch (error) {
      //   console.error("Profile Error", error);
      // }
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
