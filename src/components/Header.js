import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <HeaderS>
      <Logo>mobSters Gallery</Logo>
      <nav>
        <NavBar>
          <Link to="/">Home</Link>
          <Link to={`/search/${props.input}`}>Search</Link>
          <Link to="/about">About</Link>
        </NavBar>
      </nav>
    </HeaderS>
  );
};

const HeaderS = styled.header`
  width: 100vw;
  height: 10vh;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fcf6f5ff;
  border-bottom: 4px solid #a13941ff;
  z-index: 5;
`;

const Logo = styled.h1`
  margin: 1rem 0 0;
  text-align: center;
  font-size: 2.5rem;
`;

const NavBar = styled.ul`
  padding: 0;
  margin-top: 0.4rem;
  a {
    text-decoration: none;
    padding: 0 0.8rem;
    color: black;
    font-size: 1.2rem;
  }
  a:hover {
    text-decoration: underline;
  }
`

export default Header;
