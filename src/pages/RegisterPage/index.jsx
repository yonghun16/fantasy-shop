import RegisterLayout from "./RegisterLayout";
import RegisterForm from "./components/RegisterForm";
import RegisterDesktopBackImage from "./components/RegisterDesktopBackImage";
import RegisterTitle from "./components/RegisterTitle";

const RegisterPage = () => (
  <RegisterLayout backImage={<RegisterDesktopBackImage />} logo={<RegisterTitle />}>
    <RegisterForm />
  </RegisterLayout>
);

export default RegisterPage;
