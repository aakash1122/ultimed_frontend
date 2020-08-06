import React from "react";
import { Container, Grid } from "@material-ui/core";

import styled from "styled-components";

import main from "assets/main.svg";
import SearchForm from "comps/SearchForm";
import HeaderCard from "comps/HeaderCard";

const Header = () => {
  return (
    <div>
      <Container>
        <StyledGridContainer
          container
          direction="row"
          alignItems="center"
          spacing={2}
          // className="shadow-1"
        >
          <Grid item xs={12} md={5}>
            <img
              src={main}
              alt="Logo"
              style={{
                height: "100%",
                width: "100%",
                display: "block",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Heading>ULTIMED</Heading>
            <HeaderCard bg="#AA79F7" clr="#fff">
              {" "}
              Search instantly to get information about a MEDICINE
            </HeaderCard>
            <HeaderCard bg="#4FAC9B" x="-100">
              {" "}
              Get free health TIPS
            </HeaderCard>
            <HeaderCard bg="#bf6154cf">
              {" "}
              Search instantly to get information about a MEDICINE
            </HeaderCard>
          </Grid>
        </StyledGridContainer>
        <SearchForm />
      </Container>
    </div>
  );
};

export default Header;

const StyledGridContainer = styled(Grid)`
  /* background: #fff; */
  padding: 30px;
  border-radius: 15px;
`;

const Heading = styled.h1`
  font-size: 45px;
  letter-spacing: 1px;
  font-weight: bolder;
  margin: 5px 0px;
  color: #626172;
`;
