import React from "react";
import styled from "styled-components";

import ProfileCard from "comps/ProfileCard";
import InfoCard from "comps/InfoCard";
import TipsCard from "comps/TipsCard";
import { Grid, Typography } from "@material-ui/core";

const arr = [1, 2, 3, 4, 5];

const Profile = () => {
  return (
    <div>
      <ProfileCard />
      <InfoWrapper>
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </InfoWrapper>
      <TipsWrapper>
        <Typography variant="h5" style={{ marginBottom: "15px" }}>
          Tips Added By you
        </Typography>
        <Grid container spacing={4} direction="row" alignItems="center">
          {arr.map((item) => (
            <Grid item xs={12} sm={6} md={4}>
              <TipsCard />
            </Grid>
          ))}
        </Grid>
      </TipsWrapper>
    </div>
  );
};

export default Profile;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  align-items: "center";
  flex-wrap: wrap;
`;

const TipsWrapper = styled.div`
  margin-top: 30px;
`;
