import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styles from "./Login.module.css";

export default function Login({ formik }) {
  return (
    <div className={styles["login-container"]}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles["container-width"]}>
          <Stack spacing={2} direction="column">
            <TextField
              id="username"
              label="User Name"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              {...formik.getFieldProps("username")}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              {...formik.getFieldProps("password")}
            />
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Stack>
        </div>
      </form>
    </div>
  );
}
