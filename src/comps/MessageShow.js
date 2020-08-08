import React from "react";
import styled from "styled-components";

const MessageShow = ({ text, type }) => {
  return (
    <Div>
      <Text type={type}>{text}</Text>
    </Div>
  );
};

export default MessageShow;

const Div = styled.div`
  padding: 3px;
`;

const Text = styled.p`
  color: ${(props) => (props.type === "error" ? "#fd766c" : "#8bc34a")};
`;
