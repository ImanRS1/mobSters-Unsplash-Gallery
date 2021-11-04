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
          <h3>{props.author}</h3>
          <p>{props.descript}</p>
        </BackCard>
      </InnerCard>
    </Article>
  )
}

const InnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const Article = styled.article`
  width: 300px;
  height: 300px;
  padding: 1.5rem 1rem;
  perspective: 1000px;

  &:hover ${InnerCard} {
    transform: rotateY(180deg);
  }
`;

const FrontCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border: 2px solid #a13941ff;
  border-radius: 5px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: #F0E1B9FF;
  border: 2px solid #a13941ff;
  border-radius: 5px;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export default ImageCard
