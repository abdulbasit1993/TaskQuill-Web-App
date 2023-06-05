import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import userAvatar from "../../assets/images/user-avatar.png";
import "./UserProfile.css";

const UserProfile = () => {
  const userData = useSelector((state) => state.userProfileReducer.data.data);

  return (
    <Box m="20px" sx={{ backgroundColor: "#151828" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="USER PROFILE" subtitle="" />
      </Box>

      <Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 2 }}
        >
          <img
            src={userAvatar}
            style={{ width: "120px", height: "120px", borderRadius: "70px" }}
          />
        </Box>

        <Grid container spacing={2} sx={{ mt: 1 }} alignItems="center">
          <Grid item xs={6}>
            <Typography variant="body1" color="#FFF">
              First Name:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ backgroundColor: "#FFF", p: 1, borderRadius: "5px" }}>
              <Typography variant="body1" color="#000000">
                {userData?.firstName}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1" color="#FFF">
              Last Name:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ backgroundColor: "#FFF", p: 1, borderRadius: "5px" }}>
              <Typography variant="body1" color="#000000">
                {userData?.lastName}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1" color="#FFF">
              Username:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ backgroundColor: "#FFF", p: 1, borderRadius: "5px" }}>
              <Typography variant="body1" color="#000000">
                {userData?.username}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1" color="#FFF">
              Email:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ backgroundColor: "#FFF", p: 1, borderRadius: "5px" }}>
              <Typography variant="body1" color="#000000">
                {userData?.email}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1" color="#FFF">
              Phone:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ backgroundColor: "#FFF", p: 1, borderRadius: "5px" }}>
              <Typography variant="body1" color="#000000">
                {userData?.phone}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1" color="#FFF">
              Address:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ backgroundColor: "#FFF", p: 1, borderRadius: "5px" }}>
              <Typography variant="body1" color="#000000">
                {userData?.address}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1" color="#FFF">
              Occupation:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ backgroundColor: "#FFF", p: 1, borderRadius: "5px" }}>
              <Typography variant="body1" color="#000000">
                {userData?.occupation}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1" color="#FFF">
              About me:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ backgroundColor: "#FFF", p: 1, borderRadius: "5px" }}>
              <Typography variant="body1" color="#000000">
                {userData?.aboutMe}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserProfile;
