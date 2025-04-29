import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

const PublicRoute = () => {
  const { user, authChecked } = useAuth();

  if (!authChecked) return <div>Loading...</div>;

  return !user ? <Outlet /> : <Navigate to="/home" />;
};

export default PublicRoute;