import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import styled from "styled-components";

import Logo from "assets/logo2.png";

const Navbar = ({ children }) => {
  const [open, setOpen] = useState(false);

  const MobileMenu = (
    <Hidden mdUp>
      <MobileMenuWrapper open={open}>
        <MobileMenuLink>ALL Medicines</MobileMenuLink>
        <MobileMenuLink>ALL Tipses</MobileMenuLink>
        <MobileMenuLink>Login</MobileMenuLink>
        <MobileMenuLink>Signup</MobileMenuLink>
        <MobileMenuLink>Profile</MobileMenuLink>
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
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              UTILMED
            </Typography>
          </Box>
          <Hidden smDown>
            <Box
              style={{ marginLeft: "auto" }}
              display="flex"
              alignItems="center"
            >
              <StyledLink>ALL Medicines</StyledLink>
              <StyledLink>ALL Tipses</StyledLink>
              <StyledLink>Login</StyledLink>
              <StyledLink>Signup</StyledLink>
              <StyledLink>Profile</StyledLink>
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

const StyledLink = styled.p`
  margin: 0px 15px;
  font-weight: 500;
`;

const MobileMenuWrapper = styled.div`
  /* display: ${(props) => (props.open ? "flex" : "none")}; */
  height:${(props) => (props.open ? "auto" : "0px !important")};
  width:${(props) => (props.open ? "auto" : "0px")};
  overflow:hidden;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  position: absolute;
  background: #3f51b5;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  transition: all 0.4s cubic-bezier(0, 0.79, 0.46, 1.07);
`;

const MobileMenuLink = styled.p`
  margin: 10px auto;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;
