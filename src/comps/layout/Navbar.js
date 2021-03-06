import React, { useState, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import NavLink from "comps/StyledLink";

import { MyContext } from "context/context";
import { Button } from "@material-ui/core";

const Navbar = ({ children }) => {
  const [state, dispatch] = useContext(MyContext);
  const { user } = state;

  const history = useHistory();

  const [open, setOpen] = useState(false);

  const MobileMenu = (
    <Hidden mdUp>
      <MobileMenuWrapper open={open}>
        <MobileMenuLink to="/" label="Home" mb />
        <MobileMenuLink to="/all-meds" label="all meds" mb />
        <MobileMenuLink to="/all-tipses" label="All Tipses" mb />
        {user.loggedIn ? (
          <>
            {user.isAdmin ? (
              <MobileMenuLink to="/add/medicine" label="ADD Medicine" mb />
            ) : null}
            <MobileMenuLink to="/add/tips" label="ADD TIPS" mb />
            <MobileMenuLink to={`/profile/${user.id}`} label="Profile" mb />
            <Button
              variant="contained"
              color="secondary"
              style={{ fontWeight: "bold" }}
              onCLick={() => {
                localStorage.removeItem("user");
                history.push("/login");
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <MobileMenuLink to="/login" label="Login" mb />
            <MobileMenuLink to="/signup" label="Signup" mb />
          </>
        )}
        <CancelIcon
          onClick={() => setOpen(false)}
          style={{ marginTop: "20px" }}
          fontSize="large"
        />
      </MobileMenuWrapper>
    </Hidden>
  );

  return (
    <React.Fragment>
      <AppBar color="primary" elevation={1}>
        {MobileMenu}
        <Toolbar>
          <Hidden mdUp>
            <MenuIcon
              style={{ margin: "0px 15px" }}
              onClick={() => setOpen(!open)}
            />
          </Hidden>
          <Box display="flex" alignItems="center">
            {/* <img
              src={Logo}
              alt=""
              style={{ height: "77px", width: "87px", marginRight: "10px" }}
              aria-label="menu"
            /> */}
            <Typography variant="h6">
              <NavLink to="/" label="UTILMED" bold="700" size="20" />
            </Typography>
          </Box>
          <Hidden smDown>
            <Box
              style={{ marginLeft: "auto" }}
              display="flex"
              alignItems="center"
            >
              <NavLink to="/all-meds" label="all meds" />
              <NavLink to="/all-tipses" label="All Tipses" />
              {user.loggedIn ? (
                <>
                  <NavLink to="/add/tips" label="ADD TIPS" />
                  {user.isAdmin ? (
                    <NavLink to="/add/medicine" label="Add Medicine" />
                  ) : null}
                  <NavLink to={`/profile/${user.id}`} label="Profile" />
                  <Button
                    variant="contained"
                    color="secondary"
                    disableElevation
                    style={{ fontWeight: "bold" }}
                    onClick={() => {
                      dispatch({ type: "LOGOUT" });
                      localStorage.removeItem("user");
                      window.location.replace("/login");
                    }}
                  >
                    {" "}
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <NavLink to="/login" label="Login" />
                  <NavLink to="/signup" label="Signup" />
                </>
              )}
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Box my={5}>{children}</Box>
      </Container>
    </React.Fragment>
  );
};

export default Navbar;

const MobileMenuWrapper = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "100vh" : "0px !important")};
  width: ${(props) => (props.open ? "100vw" : "0px")};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  background: #3f51b5;
  z-index: 999;
  transition: all 0.4s cubic-bezier(0, 0.79, 0.46, 1.07);
`;

const MobileMenuLink = styled(NavLink)`
  /* margin: 10px auto !important; */
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;
