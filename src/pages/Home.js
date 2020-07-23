import React from "react";

import Header from "comps/Header";
import MedCard from "comps/MedCard";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <Header />
      <StyledWrapper>
        <MedCard />
        <MedCard />
        <MedCard />
        {/* <MedCard /> */}
        {/* <MedCard /> */}
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
