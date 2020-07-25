import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
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
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 6, 4),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      overflowY: "scroll",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  detail: {
    background: "#f7f7f7",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "200px",
      overflowY: "scroll",
    },
  },
}));

const MedModal = ({ value, set }) => {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <Card>
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
      <Button
        variant="outlined"
        color="secondary"
        disableElevation
        style={{ margin: "20px 0px 5px auto", display: "block" }}
        onClick={() => set(false)}
      >
        Close
      </Button>
    </div>
  );

  return (
    <div>
      <Modal
        open={value}
        onClose={() => set(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default MedModal;
