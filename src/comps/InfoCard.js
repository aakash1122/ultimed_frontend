import React from "react";
import { Box, Typography } from "@material-ui/core";

const styles = {
  height: "108px",
  width: "300px",
  background: "#b53f6f",
  color: "#fff",
  margin: "10px ",
  borderLeft: "10px solid orange",
  flexGrow: "1",
};

const InfoCard = ({ value, label }) => {
  return (
    <Box className="shadow-1" style={styles} p={2}>
      <Typography variant="h2" align="center" style={{ fontWeight: "bold" }}>
        {value}
      </Typography>
      <Typography variant="body1" align="center" style={{ marginTop: "10px" }}>
        {label.toUpperCase()}
      </Typography>
    </Box>
  );
};

export default InfoCard;
