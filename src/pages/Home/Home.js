import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../redux/actions/userAction";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.loginReducer.data.token);
  console.log("token (Home) ==>> ", token);

  const userData = useSelector((state) => state.userProfileReducer.data.data);
  console.log("userData from selector ===>> ", userData);

  useEffect(() => {
    dispatch(getUserProfile(token));
  }, []);

  return (
    <Box m="20px" sx={{ height: "100% !important" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="HOME" subtitle="Welcome to TaskQuill" />
      </Box>
    </Box>
  );
};

export default Home;
