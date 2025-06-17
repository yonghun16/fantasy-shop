import RegisterForm from "./components/RegisterForm";
import RegisterImage from "./components/RegisterImage";
import RegisterLayout from "./RegisterLayout";
import SignupTitle from "./components/SignupTitle";

const RegisterPage = () => (
  <RegisterLayout imageComponent={<RegisterImage />} logo={<SignupTitle />}>
    <RegisterForm />
  </RegisterLayout>
);

export default RegisterPage;
