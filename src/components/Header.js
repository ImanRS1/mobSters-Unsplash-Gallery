import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Header = (props) => {
  return (
    <HeaderS>
      <Logo>mobSters Gallery</Logo>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to={`/search/${props.input}`}>Search</Link>
          <Link to="/about">About</Link>
        </ul>
      </nav>
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
