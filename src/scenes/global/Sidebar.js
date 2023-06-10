import React, { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import { MenuOutlined } from "@mui/icons-material";
import userAvatar from "../../assets/images/user-avatar.png";
import { useSelector } from "react-redux";

const Item = ({ title, to, icon, selected, setSelected }) => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: "gray" }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("User Profile");

  const userData = useSelector((state) => state.userProfileReducer.data.data);
  // console.log("userData from selector ===>> ", userData);

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: "#1B1212 !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* ============= Logo and Menu Icon ============= */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "gray",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h5" color={"gray"}>
                  TaskQuill
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined sx={{ color: "gray" }} />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* ============= User ============= */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={userAvatar}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h5"
                  color={"gray"}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {userData
                    ? userData?.firstName + " " + userData?.lastName
                    : "Username"}
                </Typography>

                <Typography variant="h6" color={"blue"}>
                  {userData ? userData?.roles[0] : "User type"}
                </Typography>
              </Box>
            </Box>
          )}

          {/* ============= Menu Items ============= */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="User Profile"
              to="/user/profile"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Tasks"
              to="/tasks"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
