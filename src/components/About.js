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
  margin-top: 6.5rem;
`;

export default About
