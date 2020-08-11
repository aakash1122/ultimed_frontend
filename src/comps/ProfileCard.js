import React from "react";
import { Box, Avatar, makeStyles, Card, Grid } from "@material-ui/core";
import styled from "styled-components";
import SchoolIcon from "@material-ui/icons/School";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    maxWidth: "550px",
    margin: "auto",
    boxShadow: "5px 5px 13px 2px #bdbdbd78",
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    background: "#3f51b5",
  },
}));

const ProfileCard = ({ user }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={5}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{ height: "100%", background: "aliceblue" }}
            >
              <Avatar className={classes.large}>
                {user.name.slice(0, 1).toUpperCase()}
              </Avatar>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box>
                <Box display="flex" alignItems="center">
                  <AccountCircleIcon />
                  <StyledInfo>{user.name}</StyledInfo>
                </Box>
                <Box display="flex" alignItems="center">
                  <MailIcon />
                  <StyledInfo>{user.email}</StyledInfo>
                </Box>
                <Box display="flex" alignItems="center">
                  <PhoneAndroidIcon />
                  <StyledInfo>{user.phone}</StyledInfo>
                </Box>
                <Box display="flex" alignItems="center">
                  <SchoolIcon />
                  <StyledInfo>{user.degree}</StyledInfo>
                </Box>
                <Box display="flex" alignItems="center">
                  <LocationOnIcon />
                  <StyledInfo>{user.chamberLocation}</StyledInfo>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default ProfileCard;

const StyledInfo = styled.p`
  font-size: 16px;
  margin: 9px 0px 9px 15px;
  color: #464444;
`;
