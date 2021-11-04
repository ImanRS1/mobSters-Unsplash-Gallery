import React from 'react';
import styled from 'styled-components';
import aboutContent from '../db/about.json';

const About = () => {
  return (
    <AboutContainer>
      <h2>{aboutContent.title}</h2>
      <p>{aboutContent.text}</p>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  padding: 12vh 1.5rem 0;
  max-width: 1440px;
  margin: 0 auto;
  h2 {
    text-align: center;
    padding-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
  }
`;

export default About
