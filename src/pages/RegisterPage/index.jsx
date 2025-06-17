import RegisterLayout from "./RegisterLayout";
import RegisterForm from "./components/RegisterForm";
import RegisterDesktopBackImage from "./components/RegisterDesktopBackImage";
import SignupTitle from "./components/SignupTitle";

const RegisterPage = () => (
  <RegisterLayout backImage={<RegisterDesktopBackImage />} logo={<SignupTitle />}>
    <RegisterForm />
  </RegisterLayout>
);

export default RegisterPage;
