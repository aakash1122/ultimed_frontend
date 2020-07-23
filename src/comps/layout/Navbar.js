import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styled from "styled-components";

import Logo from "assets/logo2.png";

const Navbar = ({ children }) => {
  return (
    <React.Fragment>
      <AppBar color="primary" elevation={1}>
        <Toolbar>
          <Box display="flex" alignItems="center">
            {/* <img
              src={Logo}
              alt=""
              style={{ height: "77px", width: "87px", marginRight: "10px" }}
              aria-label="menu"
            /> */}
            <Typography variant="h6">UTILMED</Typography>
          </Box>
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
`;
