import { useEffect, useState, useCallback } from "react";
import { AuthContext } from "../context/AuthContext";
import { useAxios } from "../hooks";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const { request } = useAxios();

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = () => {
      try {
        // Check if we have user data in localStorage
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
        setUser(null);
      } finally {
        setAuthChecked(true);
      }
    };

    initializeAuth();
  }, []);

  // Function to handle login
  const login = useCallback((userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  }, []);

  // Function to handle logout
  const logout = useCallback(async () => {
    try {
      // Call logout API if needed
      await request({
        route: "/api/v1/logout",
        method: "POST",
      });
    } catch (error) {
      console.error("Logout API error:", error);
    } finally {
      // Even if API fails, clear local state
      localStorage.removeItem("user");
      setUser(null);
    }
  }, [request]);

  // Function to refresh user data when needed (profile updates, etc.)
  const refreshUser = useCallback(async () => {
    try {
      const res = await request({
        route: "/api/v1/me",
        method: "GET",
      });

      if (res.user) {
        localStorage.setItem("user", JSON.stringify(res.user));
        setUser(res.user);
      }
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      // If this fails, it likely means the token is invalid
      localStorage.removeItem("user");
      setUser(null);
    }
  }, [request]);

  return (
    <AuthContext.Provider
      value={{
        user,
        authChecked,
        login,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
