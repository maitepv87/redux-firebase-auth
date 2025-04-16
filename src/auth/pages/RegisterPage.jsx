import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, TextField, Link, Grid, Box, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthLayout } from "../components";

export const RegisterPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      displayName: data.get("displayName"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <AuthLayout title="Sign Up" Icon={LockOutlinedIcon}>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="displayName"
          label="Full Name"
          name="displayName"
          autoFocus
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
        />

        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
          Create Account
        </Button>

        <Divider sx={{ my: 3 }}>or</Divider>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          onClick={() => console.log("Sign up with Google")}
        >
          Sign up with Google
        </Button>

        <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
          <Grid item>
            <Link component={RouterLink} to="/auth/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};
