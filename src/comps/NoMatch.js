import React from "react";
import styled, { keyframes } from "styled-components";

export const NoMatch = () => {
  return (
    <div>
      <Text>4</Text>
      <AnimatedText>0</AnimatedText>
      <Text>4</Text>
    </div>
  );
};

const rotate = keyframes`
  0%{
    transform: translateX(0);
    color:dodgerblue
  };
  25%{
    transform: translateX(100px);
  };
  50%{
    transform: translateX(0px);
      color:coral
  };
  75%{
    transform: translateX(-100px);
  };
  100%{
    transform: translateX(0px);
    color:dodgerblue
  }
`;

const Text = styled.h1`
  font-size: 150px;
  text-align: center;
  letter-spacing: 30px;
  margin: 20px;
`;

const AnimatedText = styled.h1`
  font-size: 150px;
  text-align: center;
  letter-spacing: 30px;
  margin: 20px;
  animation: 4s ${rotate} linear infinite;
`;
