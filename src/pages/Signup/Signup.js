import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../components/Copyright/Copyright";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { authService } from "../../services/authService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";

const defaultTheme = createTheme();

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    occupation: "",
    aboutMe: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let username = data?.username.trim();
    let email = data?.email.trim();
    let password = data?.password.trim();
    let confirmPassword = data?.confirmPassword.trim();

    const dataObj = {
      username: username,
      email: email,
      password: password,
      firstName: data?.firstName,
      lastName: data?.lastName,
      phone: data?.phone,
      address: data?.address,
      occupation: data?.occupation,
      aboutMe: data?.aboutMe,
    };

    if (!username) {
      toast("Please enter your username", { type: "error" });
      setIsLoading(false);
      return;
    }

    if (!email) {
      toast("Please enter your email", { type: "error" });
      setIsLoading(false);
      return;
    }

    if (!email.match(emailRegex)) {
      toast("Please enter a valid email", { type: "error" });
      setIsLoading(false);
      return;
    }

    if (!password) {
      toast("Please enter your password", { type: "error" });
      setIsLoading(false);
      return;
    }

    if (password != confirmPassword) {
      toast("Passwords Do Not Match!", { type: "error" });
      setIsLoading(false);
      return;
    }
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{ mt: 2, mb: 2, fontWeight: "bold" }}
          >
            TaskQuill
          </Typography>

          <Typography component="h1" variant="h5">
            Create a New Account
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {/* ================= Username Input Field ================= */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              label="Username"
              onChange={handleInputChange}
            />

            {/* ================= Email Input Field ================= */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              onChange={handleInputChange}
              autoComplete="email"
              autoFocus
            />

            {/* ================= Password Input Field ================= */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              onChange={handleInputChange}
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* ================= Confirm Password Input Field ================= */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="confirm-password"
              name="confirmPassword"
              label="Confirm Password"
              onChange={handleInputChange}
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowConfirmPassword()}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* ================= First Name Input Field ================= */}
            <TextField
              margin="normal"
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              onChange={handleInputChange}
            />

            {/* ================= Last Name Input Field ================= */}
            <TextField
              margin="normal"
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              onChange={handleInputChange}
            />

            {/* ================= Phone Input Field ================= */}
            <TextField
              margin="normal"
              fullWidth
              id="phone"
              name="phone"
              label="Phone number"
              onChange={handleInputChange}
            />

            {/* ================= Address Input Field ================= */}
            <TextField
              margin="normal"
              fullWidth
              id="address"
              name="address"
              label="Address"
              onChange={handleInputChange}
            />

            {/* ================= Occupation Input Field ================= */}
            <TextField
              margin="normal"
              fullWidth
              id="occupation"
              name="occupation"
              label="Occupation"
              onChange={handleInputChange}
            />

            {/* ================= About Me Input Field ================= */}
            <TextField
              margin="normal"
              fullWidth
              id="aboutMe"
              name="aboutMe"
              label="About Me"
              onChange={handleInputChange}
            />

            {/* ================= Signup button ================= */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign up
            </Button>

            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                {/* ================= Don't have an account link ================= */}
                <Link component={RouterLink} to="/login" variant="body2">
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* ================= Copyright component ================= */}
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
