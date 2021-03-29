import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <LogoText>ultimate.ai</LogoText>
    </Link>
  );
};

const LogoText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
  letter-spacing: -0.03em;
  color: #ffffff;
  z-index: 10;
  position: absolute;
  top: 30px;
  left: 50px;
`;

export default Logo;
