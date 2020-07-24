import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Container,
  makeStyles,
  Typography,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import logo from "assets/logo3.png";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import SnackbarMessage from "comps/SnackbarMessage";

const styles = makeStyles((theme) => ({
  inp: {
    minWidth: "450px",
    margin: "10px 0px",
    fontSize: "16px",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      minWidth: "300px",
    },
  },
  button: {
    marginTop: "20px",
    padding: "10px",
    fontWeight: "bold",
    fontSize: "16px;",
  },
  image: {
    minWidth: "200px",
  },
  heading: {
    margin: "20px 0px",
    fontWeight: "bold",
    color: "#ff7d7d",
  },
}));

const Signup = () => {
  const [showPass, setShowPass] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  console.log(errors);

  const classes = styles();
  return (
    <Container>
      {errors &&
        Object.keys(errors).map((key) => (
          <SnackbarMessage msg={errors[key].message} type="error" />
        ))}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        p={3}
      >
        <Box>
          <img src={logo} alt="logo" className={classes.image} />
        </Box>
        <Typography variant="h5" className={classes.heading}>
          Create an Account
        </Typography>
        <StyledForm onSubmit={handleSubmit(submit)}>
          <TextField
            name="name"
            variant="outlined"
            placeholder="Name"
            size="medium"
            className={classes.inp}
            inputRef={register({
              required: { value: true, message: "Name Required" },
              minLength: { value: 5, message: "Name too Short" },
              maxLength: { value: 30, message: "Name too Long" },
            })}
          />
          <TextField
            name="email"
            variant="outlined"
            placeholder="Email"
            type="email"
            size="medium"
            className={classes.inp}
            inputRef={register({
              required: { value: true, message: "Email Required" },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
          />
          <OutlinedInput
            name="password"
            id="outlined-pass"
            type={showPass ? "text" : "password"}
            size="medium"
            placeholder="Password"
            className={classes.inp}
            inputRef={register({
              required: { value: true, message: "password Required" },
              minLength: { value: 6, message: "Password too Short" },
            })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPass(!showPass)}
                  edge="end"
                >
                  {showPass ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <TextField
            name="licenceNo"
            variant="outlined"
            placeholder="Licence Number"
            size="medium"
            className={classes.inp}
            inputRef={register({
              required: { value: true, message: "Licence Number is Required" },
              minLength: {
                value: 4,
                message: "Licence Number too Short or invalid",
              },
            })}
          />
          <TextField
            name="degree"
            variant="outlined"
            placeholder="Degree"
            size="medium"
            className={classes.inp}
            inputRef={register({
              required: { value: true, message: "Degree Required" },
            })}
          />
          <TextField
            name="chamberLocation"
            variant="outlined"
            placeholder="Chamber Address (optional)"
            size="medium"
            className={classes.inp}
            inputRef={register({ minLength: 6 })}
          />
          <Button
            variant="contained"
            size="large"
            color="primary"
            disableElevation
            className={classes.button}
            type="submit"
          >
            Create Account
          </Button>
        </StyledForm>
      </Box>
    </Container>
  );
};

export default Signup;

// *styled comps
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
