import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  CardActionArea,
  CardActions,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Axios from "axios";

import logo3 from "assets/logo3.png";
import DeleteItem from "comps/DeleteItem";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: 450,
    padding: theme.spacing(3, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  detail: {
    background: "#f7f7f7",
    boxShadow: "none",
  },
}));

const MedDetail = (props) => {
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
    <>
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
              variant="h6"
              style={{ textAlign: "center", marginBottom: "5px" }}
            >
              {med.name}
            </Typography>
            <Typography variant="body1">Group : {med.groupName}</Typography>
            <Typography variant="body2">Company : {med.company}</Typography>
            <Typography variant="body2">Unit price : {med.price}</Typography>
            <Typography variant="body2">Pack Size : {med.packSize} </Typography>
          </Box>
          <Accordion className={classes.detail}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography className={classes.heading}>
                Detail Information{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{ padding: "20px 0px", lineHeight: " 30px" }}
                dangerouslySetInnerHTML={{ __html: med.desc }}
                id="tips-body"
              ></div>
            </AccordionDetails>
          </Accordion>
        </CardContent>
        <CardActions>
          <DeleteItem id={med._id} type="medicine" />
        </CardActions>
      </Card>
    </>
  );
};

export default MedDetail;
