import React from 'react';
import styled from 'styled-components';

const Welcome = () => {
  return (
    <WelcomeContainer>
      <h2>Welcome <br/> to <br/> mobSters Gallery</h2>
      <h3>Let's start searching together</h3> 
    </WelcomeContainer>
  )
}

const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0.5rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
  }

  h3{
    font-size: 1.3rem;
  }
`

export default Welcome
