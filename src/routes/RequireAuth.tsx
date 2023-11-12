import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { route } from "../utils/constants";

const RequireAuth = () => {
  const { loggedIn } = useAuth();

  if (!loggedIn) {
    return <Navigate to={route.LOGIN_PAGE_ROUTE} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
