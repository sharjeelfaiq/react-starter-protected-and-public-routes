import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = () => {
  const { user, authChecked } = useAuth();

  if (!authChecked) return <div>Loading...</div>;

  return !user ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoute;
