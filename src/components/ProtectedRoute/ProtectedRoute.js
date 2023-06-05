import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute(props) {
  const { Component } = props;
  const navigate = useNavigate();

  const token = useSelector((state) => state.loginReducer.data.token);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
}

export default ProtectedRoute;
