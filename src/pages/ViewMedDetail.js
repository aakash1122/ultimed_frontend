import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  CardActions,
  Divider,
} from "@material-ui/core";

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";

import logo3 from "assets/logo3.png";
import DeleteItem from "comps/DeleteItem";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    padding: theme.spacing(3, 4, 3),
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: 0,
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
    margin: "20px 0px",
  },
  detail: {
    background: "#f7f7f7",
    boxShadow: "none",
  },
}));

const MedDetail = () => {
  const classes = useStyles();
  const { id } = useParams();

  const { isLoading, error, data } = useQuery("med", () =>
    Axios.get(`${process.env.REACT_APP_API}/medicine/${id}`, {
      id,
    })
  );

  if (isLoading)
    return <CircularProgress style={{ display: "block", margin: "0 auto" }} />;

  if (error) return <h5>Error Occured</h5>;

  const med = data.data;

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image={logo3}
        title="Contemplative Reptile"
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Box style={{ margin: "10px 0px", padding: "5px" }}>
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              marginBottom: "20px",
              textTransform: "capitalize",
            }}
          >
            {med.name}
          </Typography>
          <Label variant="h6">
            Group : <span>{med.groupName}</span>
          </Label>
          <Label variant="h6">
            Company : <span>{med.company}</span>
          </Label>
          <Label variant="h6">
            Unit price : <span>{med.price} TK</span>
          </Label>
          <Label variant="h6">
            Pack Size : <span>{med.packSize}</span>{" "}
          </Label>
        </Box>
        <Divider style={{ marginTop: "20px" }} />
        <Typography className={classes.heading} align="center">
          Detail Information{" "}
        </Typography>

        <Box
          style={{ padding: "20px 0px", lineHeight: " 30px" }}
          dangerouslySetInnerHTML={{ __html: med.desc }}
          id="tips-body"
        ></Box>
      </CardContent>
      <CardActions>
        <DeleteItem id={med._id} type="medicine" />
      </CardActions>
    </Card>
  );
};

export default MedDetail;

const Label = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
  > span {
    font-weight: normal;
    padding-left: 10px;
  }
`;
