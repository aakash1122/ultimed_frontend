import React, { useContext } from "react";
import {
  Card,
  CardActions,
  Typography,
  CardHeader,
  Avatar,
  CardMedia,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import { MyContext } from "context/context";

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

const TipsCard = ({ data }) => {
  const history = useHistory();
  const classes = styles();
  const [state] = useContext(MyContext);

  return (
    <Card className={classes.root}>
      <CardMedia
        image={data.imageUrl}
        title="Tips Image"
        className={classes.image}
      />
      <Typography variant="h6" className={classes.title}>
        {data.title}
      </Typography>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {data.author.name.slice(0, 1).toUpperCase()}
          </Avatar>
        }
        title={data.author.name.toUpperCase()}
        subheader={new Date(data.created_at).toDateString()}
      />
      <CardActions>
        <Button
          color="primary"
          onClick={() => history.push(`/all-tipses/${data._id}`)}
        >
          Read More
        </Button>
        {data.author._id === state.user.id ? (
          <Button
            color="primary"
            onClick={() => history.push(`/tips/update`, { data })}
          >
            Edit
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default TipsCard;
