/* import libraries */
import { Navigate, useLocation, useParams, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = () => {
  const location = useLocation();
  const isAuth = useSelector((state) => state.user.isAuth);
  const userData = useSelector((state) => state.user.userData);
  const { id } = useParams();

  if (!isAuth || !userData?.userPk) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (userData?.userPk !== Number(id)) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
