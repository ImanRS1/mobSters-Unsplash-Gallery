import React from 'react'

const ImageCard = props => {
  return (
    <article>
      <div>
        <div>
          <img src={props.url} alt={props.descript}/>
        </div>
        <div>
          <h3>{props.author}</h3>
          <p>{props.descript}</p>
        </div>
      </div>
    </article>
  )
}

export default ImageCard
