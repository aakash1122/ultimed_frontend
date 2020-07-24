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

import logo3 from "assets/logo3.png";
import styled from "styled-components";

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

const MedCard = () => {
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
        <Typography variant="h6">ANGILOCK 50</Typography>
        <Typography variant="body2">
          Group <StyledValue>Paracetamol</StyledValue>
        </Typography>
        <Typography variant="body2">
          Company
          <StyledValue>SQuare</StyledValue>
        </Typography>
        <Typography variant="body2">
          Price <StyledValue>20</StyledValue>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" disableElevation color="primary">
          View Detail
        </Button>
      </CardActions>
    </Card>
  );
};

export default MedCard;

const StyledValue = styled.p`
  margin: 2px 0px 2px 5px;
  display: inline-block;
  font-weight: bold;
  text-transform: uppercase;
  color: #3f51b5;
`;
