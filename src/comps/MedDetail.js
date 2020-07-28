import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import logo3 from "assets/logo3.png";

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

const MedDetail = () => {
  const classes = useStyles();
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
              ANGILOCK 60
            </Typography>
            <Typography variant="body1">Group : algorianads</Typography>
            <Typography variant="body2">Company : Beximco</Typography>
            <Typography variant="body2">Unit price : 6 TK</Typography>
            <Typography variant="body2">Pack Size : 10 </Typography>
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
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                esse quod unde sapiente, sunt qui. Sunt quos excepturi
                repellendus minima mollitia facere id animi fugiat sequi numquam
                esse quod unde sapiente, sunt qui. Sunt quos excepturi
                repellendus minima mollitia facere id animi fugiat sequi numquam
                esse quod unde sapiente, sunt qui. Sunt quos excepturi
                repellendus minima mollitia facere id animi fugiat sequi numquam
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
};

export default MedDetail;
