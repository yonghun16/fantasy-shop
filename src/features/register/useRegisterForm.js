import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

/* Modules */
import { registerUser } from "../../features/user/api/registerUser";

export const useRegisterForm = () => {
  // react-hook-form
  const {
    register,
    formState: { errors },
    watch, 
    reset,
    handleSubmit, 
  } = useForm({
    mode: "onTouched",  // 사용자가 input을 터치하고 벗어났을 때 유효성 검사 실행
  });

  const password = watch("password");  // password에 watch(감시) 등록
  const agree = watch("agree");  // agree에 watch(감시) 등록

  // onSubmit Handler
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const body = { 
      userName: data.userName,
      email: data.email,
      password: data.password,
    }

    try {
      await dispatch(registerUser(body)).unwrap();
      reset();
      navigate("/login");
    } catch (error) {
      console.error("Register Error", error);
    }
  };

  return {
    register,
    errors,
    watch,
    password,
    agree,
    onSubmit: handleSubmit(onSubmit),
  };
};
