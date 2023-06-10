import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
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
import { colors } from "../../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/authAction";

const defaultTheme = createTheme();

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Login = ({ onAuthenticate }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const loading = useSelector((state) => state.loginReducer.loading);

  console.log("loading state ===>> ", loading);

  const loginData = useSelector((state) => state.loginReducer.data);
  console.log("loginData from selector ==>> ", loginData);

  const loginError = useSelector(
    (state) => state?.loginReducer?.error?.response?.data
  );

  const token = useSelector((state) => state.loginReducer.data.token);
  // console.log("token (login) ==>> ", token);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let email = data?.email.trim();
    let password = data?.password.trim();

    const dataObj = {
      email: email,
      password: password,
    };

    if (!email) {
      toast("Please enter your email", { type: "error" });
      return;
    }

    if (!password) {
      toast("Please enter your password", { type: "error" });
      return;
    }

    if (!data?.email.match(emailRegex)) {
      toast("Please enter a valid email", { type: "error" });
      return;
    }

    await dispatch(loginUser(dataObj));

    handleNavigation();
  };

  const handleNavigation = () => {
    if (loginError) {
      toast(loginError?.message, { type: "error" });
      return;
    }
    navigate("/");
  };

  useEffect(() => {
    if (token) {
      onAuthenticate(true);
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
            Login
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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

            {/* ================= Remember me checkbox ================= */}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            {/* ================= Login button ================= */}

            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Loader />
              </div>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            )}

            <Grid container>
              <Grid item xs>
                {/* ================= Forgot password link ================= */}
                <Link component={RouterLink} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {/* ================= Don't have an account link ================= */}
                <Link component={RouterLink} to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
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

export default Login;
