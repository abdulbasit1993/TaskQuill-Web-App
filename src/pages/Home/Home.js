import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="HOME" subtitle="Welcome to TaskQuill" />
      </Box>
    </Box>
  );
};

export default Home;
