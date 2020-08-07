import React, { useContext } from "react";
import styled from "styled-components";

import Header from "comps/Header";
import MedCard from "comps/MedCard";
import { MyContext } from "context/context";
import { CircularProgress, Grid } from "@material-ui/core";

const Home = () => {
  const [state, dispatch] = useContext(MyContext);

  const { search } = state;

  console.log(search.data);

  return (
    <div>
      <Header />
      <StyledWrapper>
        {search.loading ? (
          <CircularProgress />
        ) : (
          <>
            {search.searched && !search.data.length && (
              <h1>Medicine not found</h1>
            )}
            <Grid container spacing={3}>
              {search.data.length > 0 &&
                search.data.map((data, i) => (
                  <Grid item xs={12} sm={6} md={6} lg={3} key={i}>
                    <MedCard data={data} />
                  </Grid>
                ))}
            </Grid>
          </>
        )}
      </StyledWrapper>
    </div>
  );
};

export default Home;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 24px;
`;
