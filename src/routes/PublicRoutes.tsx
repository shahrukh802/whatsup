import { Navigate, Outlet } from "react-router-dom";
import { route } from "../utils/constants";
import useAuth from "../hooks/useAuth";

const PublicRoutes = () => {
  const { loggedIn } = useAuth();

  if (loggedIn) {
    return <Navigate to={route.HOME_PAGE_ROUTE} replace />;
  }

  return <Outlet />;
};

export default PublicRoutes;
