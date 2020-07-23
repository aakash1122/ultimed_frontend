import React from "react";
import styled from "styled-components";

const HeaderCard = ({ children, bg, clr, x }) => {
  return (
    <StyledDiv bg={bg} clr={clr} x={x}>
      <p>{children}</p>
    </StyledDiv>
  );
};

export default HeaderCard;

const StyledDiv = styled.div`
  min-width: 270px;
  max-width: 270px;
  min-height: 50px;
  padding: 3px 25px;
  background: ${(props) => props.bg};
  color: ${(props) => props.clr || "#fff"};
  border-radius: 10px;
  font-size: 16px;
  text-align: center;
  margin: 7px auto;
  transform: translateX(${(props) => props.x || 0}px);
  transition: all 0.3s ease;
  cursor: crosshair;
  &:hover {
    transform: translateX(0);
  }
`;
