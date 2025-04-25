import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes for Unauthenticated Users */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<h1>Landing Page</h1>} />
            <Route path="/signin" element={<h1>Signin</h1>} />
            <Route path="/signup" element={<h1>Signup</h1>} />
          </Route>

          {/* Always Accessible */}
          <Route path="/about" element={<h1>About</h1>} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          </Route>

          {/* Catch-All */}
          <Route path="*" element={<h1>404 | Not Found</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
