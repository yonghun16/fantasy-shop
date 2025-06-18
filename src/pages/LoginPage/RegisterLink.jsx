import { Link } from "react-router-dom";

const RegisterLink = () => (
  <div className="flex flex-col md:flex-row mt-10 justify-center items-center gap-4 text-sm text-center">
    <p>처음이신가요?</p>
    <Link to="/register" className="text-indigo-500 hover:underline">
      회원가입
    </Link>
  </div>
);

export default RegisterLink;
