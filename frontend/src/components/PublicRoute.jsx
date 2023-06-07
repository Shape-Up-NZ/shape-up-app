import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Navigate to="/pages/profile" replace /> : <Outlet />;
};

export default PublicRoute;
