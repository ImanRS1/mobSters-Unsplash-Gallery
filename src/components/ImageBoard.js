import React from 'react';
import ImageCard from './ImageCard';
import styled from "styled-components";

const ImageBoard = props => {

  const imageGenerator = data => {
    if(data.length === 0) {
      return <p className="no-results">Oops... We couldn't find any results for your search.</p>
    }
    return data.map(img => <ImageCard url={img.urls.small} author={img.user.name} descript={img.alt_description} key={img.id} />);
  }

  return (
    <ImageContainer>
      {imageGenerator(props.data)}
    </ImageContainer>
  )
}

const ImageContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .no-results {
    font-size: 2rem;
    text-align: center;
    padding: 2rem 1rem;
  }
`;

export default ImageBoard
