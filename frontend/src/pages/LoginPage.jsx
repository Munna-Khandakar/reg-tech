import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import swal from "sweetalert";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PhoneInput from "react-phone-number-input";
import Login from "../components/Login/Login";
import Password from "../components/Login/Password";
import ConfirmPassword from "../components/Login/ConfirmPassword";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.jumbhall.com/">
        www.jumbhall.com
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState("login");
  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("password");
  };
  const handleSubmit2 = (event) => {
    event.preventDefault();
    setStatus("confirmPassword");
  };
  const handleSubmit3 = (event) => {
    event.preventDefault();
    setStatus("password");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            {(function () {
              switch (status) {
                case "login":
                  return (
                    <Login
                      mobile={mobile}
                      setMobile={setMobile}
                      handleSubmit={handleSubmit}
                    />
                  );
                case "password":
                  return <Password handleSubmit2={handleSubmit2} />;
                case "confirmPassword":
                  return <ConfirmPassword />;

                default:
                  break;
              }
            })()}

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
