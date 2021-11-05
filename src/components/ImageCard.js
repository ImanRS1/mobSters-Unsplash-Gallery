import React from 'react';
import styled from 'styled-components'

const ImageCard = props => {
  return (
    <Article>
      <InnerCard>
        <FrontCard>
          <Img src={props.url} alt={props.descript}/>
        </FrontCard>
        <BackCard>
          <BackImg src={props.url} alt={props.descript}/>
          <h3>{props.author}</h3>
          <p>{props.descript}</p>
        </BackCard>
      </InnerCard>
    </Article>
  )
}

const InnerCard = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const Article = styled.article`
  width: 300px;
  height: 300px;
  margin: 1.5rem 1rem;
  perspective: 1000px;

  &:hover ${InnerCard} {
    transform: rotateY(180deg);
  }
`;

const FrontCard = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

const BackCard = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: transparent;
  border: 2px solid #a13941ff;
  border-radius: 5px;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;

  h3 {
    position: absolute;
    top: 20%;
    padding: 0 1rem;
  }

  p {
    position: absolute;
    top: 35%;
    padding: 0 1rem;
  }
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 2px solid #a13941ff;
  border-radius: 5px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

const BackImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  position: relative;
  opacity: 0.2;
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

export default ImageCard
