import React from "react";
import { Card, CardHeader, Avatar, Divider } from "@material-ui/core";
import styled from "styled-components";

const ViewTips = ({ data }) => {
  return (
    <>
      {data.title || data.body ? (
        <Card style={{ margin: "30px 0px", padding: "30px", color: "#3f4c52" }}>
          <>
            <StyledImage src={data.imageUrl} alt="Tips Cover" />
            <Title>{data.title}</Title>
            <Divider />
            <div
              dangerouslySetInnerHTML={{ __html: data.body }}
              id="tips-body"
            ></div>
            <Divider />
            <CardHeader
              avatar={<Avatar style={{ background: "#f44336" }}>A</Avatar>}
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
              style={{ padding: "15px 0px" }}
            />
          </>
        </Card>
      ) : null}
    </>
  );
};

export default ViewTips;

const StyledImage = styled.img`
  max-height: 600px;
  width: 100%;
  object-fit: cover;
`;

const Title = styled.p`
  font-size: 35px;
  font-weight: bold;
`;
