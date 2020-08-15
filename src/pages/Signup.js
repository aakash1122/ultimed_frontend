import React, { useState, useEffect, useContext } from "react";
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
  CircularProgress,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

import logo from "assets/logo3.png";
import SnackbarMessage from "comps/SnackbarMessage";
import { MyContext } from "context/context";

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
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [validationError, setValidationError] = useState([]);
  const [duplicateUser, setDuplicateUser] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const [state] = useContext(MyContext);
  const history = useHistory();

  useEffect(() => {
    if (state.user.loggedIn) {
      history.push("/");
    }
  });

  const defaultState = () => {
    setCreated(false);
    setDuplicateUser(false);
    setLoading(true);
  };

  const submit = async (data) => {
    defaultState();
    try {
      setLoading(true);
      const resp = await axios.post(
        `${process.env.REACT_APP_API}/auth/signup`,
        data
      );
      console.log(resp);
      if (resp.status === 201) {
        // all okay
        setCreated(true);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 409) {
        return setDuplicateUser(true);
      } else if (error.response.status === 500) {
        alert("something Went Wrong");
      } else {
        setValidationError(error.response.data.errors);
      }
      setLoading(false);
    }
  };

  const classes = styles();
  return (
    <Container>
      {errors &&
        Object.keys(errors).map((key) => (
          <SnackbarMessage msg={errors[key].message} type="error" key={key} />
        ))}
      {validationError &&
        validationError.map((err) => {
          return <SnackbarMessage msg={err.msg} type="error" key={err.msg} />;
        })}
      {duplicateUser ? (
        <SnackbarMessage msg="User Already Exists" type="error" />
      ) : null}
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
        {loading ? (
          <CircularProgress />
        ) : (
          <StyledForm onSubmit={handleSubmit(submit)}>
            <TextField
              name="name"
              variant="outlined"
              label="Name"
              size="medium"
              className={classes.inp}
              inputRef={register({
                required: { value: true, message: "Name Required." },
                minLength: {
                  value: 5,
                  message: "Name too Short.Required at least 5 characters",
                },
                maxLength: { value: 30, message: "Name too Long" },
              })}
            />
            <TextField
              name="email"
              variant="outlined"
              label="Email"
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
                minLength: {
                  value: 6,
                  message: "Password too Short.Required at least 6 characters",
                },
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
              name="phone"
              variant="outlined"
              label="Phone Number"
              size="medium"
              type="number"
              className={classes.inp}
              inputRef={register({
                required: { value: true, message: "Phone Number is Required" },
                minLength: {
                  value: 4,
                  message:
                    "Phone Number too Short or invalid.Required at least 4 characters",
                },
              })}
            />
            <TextField
              name="licenceNo"
              variant="outlined"
              label="Licence Number"
              size="medium"
              className={classes.inp}
              inputRef={register({
                required: {
                  value: true,
                  message: "Licence Number is Required",
                },
                minLength: {
                  value: 4,
                  message:
                    "Licence Number too Short or invalid.Required at least 4 characters",
                },
              })}
            />
            <TextField
              name="degree"
              variant="outlined"
              label="Degree"
              size="medium"
              className={classes.inp}
              inputRef={register({
                required: { value: true, message: "Degree Required" },
              })}
            />
            <TextField
              name="chamberLocation"
              variant="outlined"
              label="Chamber Address (optional)"
              size="medium"
              className={classes.inp}
              inputRef={register({
                minLength: {
                  value: 6,
                  message:
                    "Chamber Location too short.Required at least 6 characters",
                },
              })}
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
        )}
        {created ? (
          <SnackbarMessage msg="User Registration Complete" type="success" />
        ) : null}
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
