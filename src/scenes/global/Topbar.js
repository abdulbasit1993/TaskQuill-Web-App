import React, { useContext } from "react";
import { colors } from "../../constants/colors";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* ============= Search Bar ============= */}
      <Box
        display="flex"
        borderRadius="3px"
        sx={{ backgroundColor: colors.SECONDARY }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1, color: colors.WHITE }}
          placeholder="Search"
        />
        <IconButton type="button" sx={{ p: 1, color: colors.WHITE }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ============= Right Icons section ============= */}
      <Box display="flex">
        {/* <IconButton onClick={() => {}}>
          <LightModeOutlined sx={{ color: colors.WHITE }} />
        </IconButton> */}
        <IconButton>
          <NotificationsOutlined sx={{ color: colors.WHITE }} />
        </IconButton>
        {/* <IconButton>
          <SettingsOutlined sx={{ color: colors.WHITE }} />
        </IconButton> */}
        <IconButton>
          <PersonOutlined sx={{ color: colors.WHITE }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
