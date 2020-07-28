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

const InfoCard = () => {
  return (
    <Box className="shadow-1" style={styles} p={2}>
      <Typography variant="h2" align="center" style={{ fontWeight: "bold" }}>
        20
      </Typography>
      <Typography variant="body1" align="center" style={{ marginTop: "10px" }}>
        Tips Posted
      </Typography>
    </Box>
  );
};

export default InfoCard;
