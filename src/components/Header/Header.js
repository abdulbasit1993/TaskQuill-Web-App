import React from "react";
import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        color={"#fff"}
        fontWeight="bold"
        sx={{ m: 0, p: 0 }}
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
