/* import libraries */
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireNotAuth = () => {
  const location = useLocation();
  const isAuth = useSelector((state) => state.user.isAuth);
  const userData = useSelector((state) => state.user.userData);

  if (isAuth || userData?.userPk) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireNotAuth;
