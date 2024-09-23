import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { Loader } from "../components/common/Loader";

// Create a context for login
const LoginContext = createContext();

// Custom hook to use the LoginContext
export const useLogin = () => useContext(LoginContext);

// LoginProvider component
export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize user state from localStorage if available
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Default to true for initial loading
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track logged-in status

  // Add an Axios request interceptor to include the token in headers
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      // Simulate a delay for loader (2 seconds)
      setTimeout(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
          setUser(JSON.parse(savedUser));
          setIsLoggedIn(true); // Set user as logged in
        }
        setIsLoading(false); // Hide loader after 2 seconds
      }, 2000);
    } else {
      // If no token, directly stop loading and assume logged out
      setIsLoading(false);
    }
  }, []);

  const login = async (email, password, isRemember) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/api/Auth/Login", {
        email: email,
        password: password,
        isRemember: isRemember,
      });

      const { token, defaultHome, ...userData } = response.data;
      if (token) {
        // Save token and user data to localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("defaultHome", defaultHome);
        localStorage.setItem("user", JSON.stringify(userData));

        // Set token in Axios headers for future requests
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        // Update user state and set as logged in
        setUser(userData);
        setIsLoggedIn(true);
      }
      return { success: true, defaultHome };
    } catch (error) {
      setLoginError("Failed to login. Please check your credentials.");
      console.error("Login error:", error);
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("defaultHome");

    // Remove the token from Axios headers
    delete axios.defaults.headers.common["Authorization"];

    setUser(null);
    setIsLoggedIn(false);
  };

  // Show a 2-second loading state when refreshing or loading initially
  if (isLoading) {
    return <Loader />;
  }

  return (
    <LoginContext.Provider
      value={{
        user,
        loginError,
        isLoading,
        login,
        logout,
        isLoggedIn, // Provide the logged-in status
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
