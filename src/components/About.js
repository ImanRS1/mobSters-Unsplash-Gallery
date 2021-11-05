import React from 'react';
import styled from 'styled-components';
import aboutContent from '../db/about.json';

const About = () => {
  return (
    <AboutContainer>
      <h2>{aboutContent.title}</h2>
      <p>{aboutContent.text}</p>
      <CreatorContainer>
        <h2>Creators</h2>
        <Images>
          <div>
            <img src="https://avatars.githubusercontent.com/u/56864465?v=4" alt="Mariana Pereira"/>
            <img src="https://avatars.githubusercontent.com/u/51403687?v=4" alt="Loukas Piloidis"/>
          </div>
          <div>
            <img src="https://avatars.githubusercontent.com/u/89615997?v=4" alt="Igor Puris"/>
            <img src="https://avatars.githubusercontent.com/u/67381660?v=4" alt="Iman Reza Soltani"/> 
          </div>
          
          
        </Images>
      </CreatorContainer>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  padding: 19vh 1.5rem 4rem;
  max-width: 1440px;
  margin: 0 auto;
  h2 {
    text-align: center;
    padding-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
  }

  @media (min-width: 400px) {
    padding-top: 15vh;
  }

  @media (min-width: 700px) {
    padding-top: 12vh;
  }

  @media (min-width: 1500px) {
    padding-top: 11vh;
  }
`;

const CreatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    padding-bottom: 0;
  }

  @media (min-width: 700px) {
    h2{
      padding: 2rem;
    }
  }
`;

const Images = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 1rem;
  }

  @media (min-width: 700px) {
    img{
      width: 200px;
      height: 200px;
    }
  }
`;

export default About
