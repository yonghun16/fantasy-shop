import { useForm } from "react-hook-form";


const useProfileDetailsForm = () => {
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
    try {
      // await dispatch(API(data)).unwrap();
      console.log(data);
    } catch (error) {
      console.error("Profile Error", error);
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
