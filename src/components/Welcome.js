import React from 'react';
import styled from 'styled-components';
import homeImg from '../styles/home.png';

const Welcome = () => {
  return (
    <WelcomeContainer>
      <h2>Welcome <br/> to <br/> mobSters Gallery</h2>
      <h3>Let's start searching together</h3> 
      <img src={homeImg} />
    </WelcomeContainer>
  )
}

const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0rem 0.5rem;
  text-align: center;
  padding-bottom: 9vh;

  h2 {
    font-size: 2.5rem;
  }

  h3{
    font-size: 1.3rem;
  }
  
  img {
    display: none;
  }

  @media (min-width: 700px) {
    img {
      display: block;
      width: 350px;
      height: 350px;
      object-fit: cover;
    }
  }

  @media (min-width: 1400px) {
    img {
      display: block;
      width: 350px;
      height: 350px;
      object-fit: cover;
    }
  }
`

export default Welcome
