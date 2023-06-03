import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Signup } from "./pages/index";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute Component={Home} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
