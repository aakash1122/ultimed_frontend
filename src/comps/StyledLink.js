import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const NavLink = ({ to, label, bold }) => {
  return (
    <StyleLink to={to} bold={bold}>
      {label}
    </StyleLink>
  );
};

const StyleLink = styled(Link)`
  text-decoration: none;
  font-weight: ${(props) => (props.bold ? props.bold : "500")};
  color: #fff;
  text-transform: capitalize;
  margin: 0px 15px;
  position: relative;
`;

export default NavLink;
