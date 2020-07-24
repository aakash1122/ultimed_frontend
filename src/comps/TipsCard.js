import React from "react";
import {
  Card,
  CardActions,
  Typography,
  CardContent,
  CardHeader,
  Avatar,
  CardMedia,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  image: {
    height: 0,
    paddingTop: "56.25%",
  },
  title: {
    fontSize: "18px",
    margin: "10px 0px",
    padding: "0px 15px;",
    textAlign: "left",
    lineHeight: "1.3em",
    color: "#3a3a3e",
  },
  avatar: {
    background: "#f44336",
  },
}));

const TipsCard = () => {
  const classes = styles();

  return (
    <Card className={classes.root}>
      <CardMedia
        image="https://images.unsplash.com/photo-1559087316-6b27308e53f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=985&q=80"
        title="Tips Image"
        className={classes.image}
      />
      <Typography variant="h6" className={classes.title}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
        aperiam?
      </Typography>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>A</Avatar>}
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardActions>
        <Button color="primary">Read More</Button>
      </CardActions>
    </Card>
  );
};

export default TipsCard;
