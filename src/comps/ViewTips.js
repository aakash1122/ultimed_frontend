import React from "react";
import { Card, CardHeader, Avatar, Divider, Button } from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import DeleteTips from "./DeleteTips";

const ViewTips = ({ data }) => {
  const history = useHistory();

  return (
    <>
      {data.title || data.desc ? (
        <Card style={{ margin: "30px 0px", padding: "30px", color: "#3f4c52" }}>
          <>
            <StyledImage src={data.imageUrl} alt="Tips Cover" />
            <Title>{data.title}</Title>
            <Divider />
            <div
              style={{ padding: "20px 0px", lineHeight: " 30px" }}
              dangerouslySetInnerHTML={{ __html: data.desc }}
              id="tips-body"
            ></div>
            <Divider />
            <CardHeader
              avatar={
                <Avatar style={{ background: "#f44336" }}>
                  {data.author.name.slice(0, 1).toUpperCase()}
                </Avatar>
              }
              title={data.author.name.toUpperCase()}
              subheader={new Date(data.created_at).toDateString()}
              action={
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={() => history.push(`/profile/${data.author._id}`)}
                >
                  Profile
                </Button>
              }
              style={{ padding: "15px 0px" }}
            />
            <DeleteTips id={data._id} />
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
