import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="USER PROFILE" subtitle="" />
      </Box>
    </Box>
  );
};

export default UserProfile;
