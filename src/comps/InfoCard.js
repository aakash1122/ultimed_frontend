import React from "react";
import { Box, Typography } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  return (
    <Box className="shadow-1" style={styles} p={2}>
      <Typography variant="h2" align="center" style={{ fontWeight: "bold" }}>
        {value}
      </Typography>
      <Div>
        <Typography variant="body1" align="center">
          {label.toUpperCase()}
        </Typography>
        {label.toLowerCase() === "total users" ? (
          <Setting
            style={{ fontSize: 32, marginLeft: "7px" }}
            onClick={() => history.push("/users/all")}
          />
        ) : null}
      </Div>
    </Box>
  );
};

export default InfoCard;

// styled components

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Setting = styled(SettingsIcon)`
  font-size: 32;
  margin-left: 7px;
  cursor: pointer;
  &:hover {
    animation: 2.8s ${rotate} linear infinite;
  }
`;
