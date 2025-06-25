import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

/* assets */
import logoImg from "../../../../assets/images/logo.webp";

const Logo = () => {
  const shopName = useSelector(
    (state) => state.company.companyData.companyName
  );
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault(); // 기본 Link 이동 막기

    if (location.pathname === "/") {
      window.location.reload(); // 홈이면 새로고침
    } else {
      navigate("/"); // 아니면 홈으로 이동
    }
  };

  return (
    <a href="/" className="flex items-center gap-2" onClick={handleClick}>
      <img src={logoImg} alt="logo" className="w-10 h-10" />
      <p>{shopName}</p>
    </a>
  );
};

export default Logo;
