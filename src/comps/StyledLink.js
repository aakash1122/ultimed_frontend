import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const NavLink = ({ to, label, bold, size, mb }) => {
  return (
    <StyleLink to={to} bold={bold} size={size} mb={mb}>
      {label}
    </StyleLink>
  );
};

const StyleLink = styled(Link)`
  text-decoration: none;
  font-weight: ${(props) => (props.bold ? props.bold : "500")};
  color: #fff;
  text-transform: uppercase;
  /* margin: 0px 14px; */
  margin: ${(props) => (props.mb ? "10px auto" : "0px 14px")};
  position: relative;
  font-size: ${(props) => (props.size ? props.size : 14)}px;
`;

export default NavLink;
