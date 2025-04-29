import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

const PublicLayout = () => {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </>
  );
};

const ProtectedLayout = () => {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoute />}>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<h1>Landing Page</h1>} />
          </Route>
          <Route path="/signin" element={<h1>Sign In</h1>} />
          <Route path="/signup" element={<h1>Sign Up</h1>} />
          <Route path="/forgot-password" element={<h1>Forgot Password</h1>} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route path="/home" element={<h1>Home</h1>} />
          </Route>
        </Route>

        {/* Catch-All */}
        <Route path="*" element={<h1>404 | Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
