import React from "react";
import { Grid, Typography } from "@material-ui/core";

import TipsCard from "comps/TipsCard";

const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 90];

const AllTipses = () => {
  return (
    <div>
      <Typography
        variant="h5"
        style={{
          margin: "10px 0px 30px 0px",
          fontWeight: "bold",
          color: "#5e5e6f",
        }}
      >
        Health Tipses
      </Typography>
      <Grid container spacing={2} direction="row" alignItems="center">
        {arr.map((item) => (
          <Grid item xs={12} sm={6} md={4}>
            <TipsCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllTipses;
