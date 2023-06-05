import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Signup, UserProfile } from "./pages/index";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  // Function to handle authentication status
  const handleAuthentication = (isAuthenticated) => {
    setAuthenticated(isAuthenticated);
  };

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
      {authenticated ? (
        <Route
          path="*"
          element={
            <AuthenticatedLayout>
              <Routes>
                <Route path="/" element={<ProtectedRoute Component={Home} />} />
                <Route
                  path="/user/profile"
                  element={<ProtectedRoute Component={UserProfile} />}
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
                <Route path="/" element={<Navigate to="/login" />} />
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
