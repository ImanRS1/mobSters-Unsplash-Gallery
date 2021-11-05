import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = (props) => {
  const url = props.page > 0 ? `/search/${props.input}/${props.page}` : '/search';
  return (
    <HeaderS>
      <Logo>mobSters Gallery</Logo>
      <nav>
        <NavBar>
          <Link to="/">Home</Link>
          <Link to={url}>Search</Link>
          <Link to="/about">About</Link>
        </NavBar>
      </nav>
    </HeaderS>
  );
};

const HeaderS = styled.header`
  width: 100vw;
  height: 15vh;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
  background-color: #fcf6f5ff;
  border-bottom: 4px solid #a13941ff;
  z-index: 5;

  @media (min-width: 400px) {
    height: 11vh;
  }

  @media (min-width: 700px) {
    height: 8vh;
  }
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
