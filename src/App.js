import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, UserProfile } from "./pages/index";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />

          <Routes>
            <Route
              path="/user/profile"
              element={<ProtectedRoute Component={UserProfile} />}
            />
            <Route path="/" element={<ProtectedRoute Component={Home} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <ToastContainer />
        </main>
      </div>
    </>
  );
};

export default App;
