import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axiosInstance from "../../shared/api/axios";

const useProfileDetailsForm = () => {
  const userData = useSelector((state) => state.user.userData);

  const {
    register,
    watch,
    setValue,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ mode: "onTouched" });

  useEffect(() => {
    if (userData && userData.userName) {
      reset({
        userName: userData.userName,
        email: userData.email,
        address: userData.address,
        phoneNumber: userData.phoneNumber,
      });
    }
  }, [userData, reset]);

  const newPassword = watch("newPassword");

  const onSubmit = async (data, submitType) => {
    if (submitType === "updateProfile") {
      const body = {
        userName: data.userName,
        address: data.address + " " + data.detaileAaddress,
        phoneNumber: data.phoneNumber,
        profileImage: data.profileImage,
      };
      try {
        await axiosInstance.put("/users/me", body, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("인적사항이 성공적으로 변경되었습니다!");

      } catch (error) {
        toast.error("인적사항 변경에 실패했습니다.\n다시 시도해 주세요.", {
          style: { whiteSpace: "pre-line" },
        });
        console.error("updateProfile Error", error);
      }
    } else if (submitType === "updatePassword") {
      const body = {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      };
      try {
        await axiosInstance.post("/users/password", body, {
          headers: { "Content-Type": "application/json" },
        });
        reset();
        toast.success("비밀번호가 성공적으로 변경되었습니다!");
      } catch (error) {
        toast.error("비밀번호 변경에 실패했습니다.\n다시 시도해 주세요.", {
          style: { whiteSpace: "pre-line" },
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
    onUpdateProfile: handleSubmit((data) => onSubmit(data, "updateProfile")),
    onUpdatePassword: handleSubmit((data) => onSubmit(data, "updatePassword")),
  };
};

export default useProfileDetailsForm;
