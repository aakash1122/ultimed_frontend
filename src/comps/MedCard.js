import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import logo3 from "assets/logo3.png";

const styles = makeStyles((theme) => ({
  root: {
    minWidth: "270px",
    Width: "270px",
    borderRadius: "15px",
    padding: "10px",
    boxShadow: "0px 5px 10px -2px #c2c2c2",
    margin: "5px 5px",
    transition: "all 0.3s ease",
    " &:hover": {
      transform: "translateY(2px)",
      boxShadow: "none",
    },
  },
}));

const MedCard = ({ data }) => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  const classes = styles();
  return (
    <Card p={3} className={classes.root}>
      <CardActionArea style={{ padding: "5px" }}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={logo3}
          title="Contemplative Reptile"
          style={{ objectFit: "contain" }}
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="h6">{data.name.toUpperCase()}</Typography>
        <Typography variant="body2">
          Group <StyledValue>{data.groupName}</StyledValue>
        </Typography>
        <Typography variant="body2">
          Company
          <StyledValue>{data.company}</StyledValue>
        </Typography>
        <Typography variant="body2">
          Price <StyledValue>{data.price}</StyledValue>
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "space-between" }}>
        <Button
          variant="text"
          disableElevation
          color="primary"
          onClick={() => history.push(`/all-meds/${data._id}`)}
        >
          View Detail
        </Button>
        {user && user.data.isAdmin ? (
          <Button
            variant="text"
            disableElevation
            color="secondary"
            onClick={() => history.push(`/med/update/`, { data })}
          >
            Edit
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default MedCard;

const StyledValue = styled.span`
  margin: 2px 0px 2px 5px;
  display: inline-block;
  font-weight: bold;
  text-transform: uppercase;
  color: #3f51b5;
`;
