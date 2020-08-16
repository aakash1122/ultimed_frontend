import React, { useState, useContext, useEffect } from "react";
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
  FormControl,
  CircularProgress,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import { useHistory } from "react-router-dom";

import logo from "assets/logo3.png";
import { MyContext } from "context/context";
import SnackBar from "comps/SnackbarMessage";

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

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);

  const [state, dispatch] = useContext(MyContext);

  const classes = styles();

  //  if already logged in then redirect
  useEffect(() => {
    if (state.user.loggedIn) {
      history.push("/");
    }
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "START_LOGIN" });
    if (email && password) {
      try {
        const resp = await axios.post(
          `${process.env.REACT_APP_API}/auth/login`,
          {
            email,
            password,
          }
        );
        console.log(resp);
        if (resp.status === 200) {
          dispatch({ type: "FINISH_LOGIN", payload: resp.data });
          localStorage.setItem("user", JSON.stringify(resp.data));
          history.push("/");
        }
      } catch (error) {
        console.log(error);
        setError(true);
        dispatch({ type: "FAIL_LOGIN" });
      }
    }
  };

  return (
    <Container>
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
        <Typography variant="h4" className={classes.heading}>
          Login Here
        </Typography>
        {state.user.loading ? (
          <CircularProgress />
        ) : (
          <form onSubmit={handleLogin}>
            <Box display="flex" flexDirection="column">
              <TextField
                variant="outlined"
                placeholder="Email"
                value={email}
                size="medium"
                type="email"
                required
                className={classes.inp}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormControl variant="outlined">
                <OutlinedInput
                  id="outlined-pass"
                  type={showPass ? "text" : "password"}
                  value={password}
                  size="medium"
                  required
                  placeholder="Password"
                  className={classes.inp}
                  onChange={(e) => setPassword(e.target.value)}
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
              </FormControl>

              <Button
                variant="contained"
                size="large"
                color="primary"
                type="submit"
                disableElevation
                className={classes.button}
              >
                LOGIN
              </Button>
            </Box>
          </form>
        )}
      </Box>
      {error ? <SnackBar msg="Wrong Credentials" type="error" /> : null}
    </Container>
  );
};

export default Login;
