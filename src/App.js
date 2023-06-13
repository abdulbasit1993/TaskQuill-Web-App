import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  UserProfile,
  Tasks,
  AddTask,
} from "./pages/index";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const temp_token = localStorage.getItem("token");
  const token = JSON.parse(temp_token);

  // Function to handle authentication status
  const handleAuthentication = (isAuthenticated) => {
    setAuthenticated(isAuthenticated);
  };

  useEffect(() => {
    const storedAuth = localStorage.getItem("authenticated");
    if (storedAuth) {
      setAuthenticated(JSON.parse(storedAuth));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("authenticated", JSON.stringify(authenticated));
  }, [authenticated]);

  useEffect(() => {
    console.log("auth state changed..", authenticated);
  }, [authenticated]);

  const AuthenticatedLayout = ({ children }) => {
    return (
      <>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            {children}
            <ToastContainer />
          </main>
        </div>
      </>
    );
  };

  const NonAuthenticatedLayout = ({ children }) => {
    return (
      <>
        <CssBaseline />
        <div className="app">
          {children}
          <ToastContainer />
        </div>
      </>
    );
  };

  return (
    <Routes>
      {token ? (
        <Route
          path="*"
          element={
            <AuthenticatedLayout>
              <Routes>
                <Route
                  path="/home"
                  element={<ProtectedRoute Component={Home} />}
                />
                <Route
                  path="/user/profile"
                  element={<ProtectedRoute Component={UserProfile} />}
                />
                <Route
                  path="/tasks"
                  element={<ProtectedRoute Component={Tasks} />}
                />
                <Route
                  path="/tasks/add"
                  element={<ProtectedRoute Component={AddTask} />}
                />
              </Routes>
            </AuthenticatedLayout>
          }
        />
      ) : (
        <Route
          path="*"
          element={
            <NonAuthenticatedLayout>
              <Routes>
                <Route path="/" element={!token && <Navigate to="/login" />} />
                <Route
                  path="/login"
                  element={<Login onAuthenticate={handleAuthentication} />}
                />
                <Route
                  path="/signup"
                  element={<Signup onAuthenticate={handleAuthentication} />}
                />
              </Routes>
            </NonAuthenticatedLayout>
          }
        />
      )}
    </Routes>
  );
};

export default App;
