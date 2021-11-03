import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderS>
      <Logo>mobSters Gallery</Logo>
    </HeaderS>
  );
};

const HeaderS = styled.header`
  width: 100vw;
  height: 5rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcf6f5ff;
  border-bottom: 4px solid #a13941ff;
  z-index: 5;
`;

const Logo = styled.h1`
  margin: 0;
  text-align: center;
`;

export default Header;
