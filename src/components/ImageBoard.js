import React from 'react';
import ImageCard from './ImageCard';

const ImageBoard = props => {

  const imageGenerator = data => {
    return data.map(img => <ImageCard url={img.urls.small} author={img.user.name} descript={img.alt_description} />)
  }

  return (
    <section>
      {imageGenerator(props.data)}
    </section>
  )
}

export default ImageBoard
