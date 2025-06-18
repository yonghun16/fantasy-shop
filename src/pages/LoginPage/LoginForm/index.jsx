import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../features/user/api/loginUser";
import { Button } from "../../../shared/ui/Button";
import LoginInput from "./LoginInput";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await dispatch(loginUser(data)).unwrap();
      reset();
      navigate("/");
    } catch (error) {
      console.log("register post error", error);
    }
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

        <LoginInput
          type="email"
          label="Email"
          placeholder="이메일을 입력하세요"
          icon="mail"
          register={register("email", { required: "이메일을 입력하세요." })}
          error={errors.email?.message}
          autoComplete="email"
        />

        <LoginInput
          type="password"
          label="Password"
          placeholder="패스워드를 입력하세요"
          icon="lock"
          register={register("password", { required: "비밀번호를 입력하세요." })}
          error={errors.password?.message}
          autoComplete="current-password"
        />

        <Button className="mt-10" type="submit">로그인</Button>

      </form>
  );
};

export default LoginForm;
