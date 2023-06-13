import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <Box m="20px" sx={{ height: "100% !important" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="HOME" />
      </Box>
    </Box>
  );
};

export default Home;
