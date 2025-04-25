import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { user, authChecked } = useAuth();

  if (!authChecked) return <div>Loading...</div>;

  return user ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
