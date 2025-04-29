import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

const Layout = () => (
  <>
    <h1>Header</h1>
    <Outlet />
    <h1>Footer</h1>
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes - Available to all users */}
        <Route element={<Layout />}>
          {/* Informational pages */}
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/privacy-policy" element={<h1>Privacy Policy Page</h1>} />
          <Route path="/terms-of-service" element={<h1>Terms Of Services Page</h1>} />
          <Route path="/pricing" element={<h1>Pricing Page</h1>} />

          {/* Public Only Routes - Only for non-authenticated users */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<h1>Landing Page</h1>} />
            <Route path="/signin" element={<h1>Sign In Page</h1>} />
            <Route path="/signup" element={<h1>Sign Up Page</h1>} />
            <Route path="/forgot-password" element={<h1>Forgot Password Page</h1>} />
          </Route>

          {/* Protected Routes - Only for authenticated users */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<h1>Home Page</h1>} />
            <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
          </Route>

          {/* Catch-All Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
