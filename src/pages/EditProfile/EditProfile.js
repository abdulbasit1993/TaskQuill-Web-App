import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Header from "../../components/Header/Header";
import userAvatar from "../../assets/images/user-avatar.png";
import { apiService } from "../../services/apiService";
import { GET_USER_PROFILE } from "../../constants/apiEndpoints";
import "./EditProfile.css";

const EditProfile = () => {
  const [userData, setUserData] = useState(null);

  const temp_token = localStorage.getItem("token");
  const token = JSON.parse(temp_token);

  const getUserData = async () => {
    try {
      const response = await apiService.getCall(GET_USER_PROFILE, token);
      console.log("response data user profile ===>> ", response?.data?.data);
      setUserData(response?.data?.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (token) {
      getUserData();
    }
  }, [token]);

  return (
    <Box m="20px" sx={{ backgroundColor: "#151828" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="EDIT PROFILE" subtitle="" />
      </Box>

      <Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 2 }}
        >
          <img
            src={userData?.profileImage ? userData?.profileImage : userAvatar}
            style={{ width: "150px", height: "150px", borderRadius: "70px" }}
          />
        </Box>

        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
          mb={3}
        >
          <Typography variant="h5" color="#FFF">
            {userData?.firstName + " " + userData?.lastName}
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mt: 1 }} alignItems="center">
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

export default EditProfile;
