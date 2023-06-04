import React from "react";
import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <Box mb="30px">
      <Typography
        variant="h4"
        color={"#fff"}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      {/* <Typography variant="h6" color={"gray"}>
        {subtitle}
      </Typography> */}
    </Box>
  );
};

export default Header;
