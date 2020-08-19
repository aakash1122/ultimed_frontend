import React, { useContext } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";

import ProfileCard from "comps/ProfileCard";
import InfoCard from "comps/InfoCard";
import TipsCard from "comps/TipsCard";
import Axios from "axios";
import { MyContext } from "context/context";

const Profile = () => {
  const { id } = useParams();

  const [state] = useContext(MyContext);
  const { user } = state;

  const { isLoading, error, data } = useQuery("user", () =>
    Axios.get(`${process.env.REACT_APP_API}/auth/user/${id}`, {
      params: {
        id,
      },
    })
  );

  if (isLoading) {
    return (
      <CircularProgress style={{ display: "block", margin: "10px auto" }} />
    );
  }
  if (error) {
    return <h5>Something Went Wrong</h5>;
  }

  return (
    <div>
      <ProfileCard user={data.data.profile} />
      {/* check if admin and logged in */}
      {data.data.profile.isAdmin && id === user.id ? (
        <InfoWrapper>
          {data.data.counts &&
            Object.keys(data.data.counts).map((key) => {
              return (
                <InfoCard value={data.data.counts[key]} label={key} key={key} />
              );
            })}
        </InfoWrapper>
      ) : null}

      {data.data.profile.tipses.length > 0 ? (
        <TipsWrapper>
          <Typography variant="h5" style={{ margin: "35px 0px 20px" }}>
            Tips Added by {id === user.id ? "You" : data.data.profile.name}
          </Typography>
          <Grid container spacing={4} direction="row" alignItems="center">
            {data.data.profile.tipses.map((tips) => (
              <Grid item xs={12} sm={6} md={4}>
                <TipsCard data={tips} />
              </Grid>
            ))}
          </Grid>
        </TipsWrapper>
      ) : (
        <h2 style={{ textAlign: "center", margin: "50px 0px" }}>
          {id === user.id
            ? "You have not added any tips yet."
            : "User has not added any Tips yet"}
        </h2>
      )}
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
