import React, { useState } from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MedCard from "comps/MedCard";
import MedModal from "comps/MedModal";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const styles = makeStyles((theme) => ({
  heading: {
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#626172",
  },
}));

const AllMedicines = () => {
  const classes = styles();

  const [openModal, setOpenModal] = useState(false);
  const [currentMed, setCurrentMed] = useState(null);

  const showDetail = (id) => {
    setCurrentMed(id);
    setOpenModal(true);
  };

  return (
    <div>
      <MedModal value={openModal} set={setOpenModal} />
      <Typography variant="h5" className={classes.heading}>
        ALL Medicines
      </Typography>
      <Grid container spacing={2}>
        {arr.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
              <MedCard item={item} showDetail={showDetail} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default AllMedicines;
