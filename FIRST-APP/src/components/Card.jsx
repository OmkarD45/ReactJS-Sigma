import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://sphero.com/cdn/shop/articles/coding_languages_1100x.png?v=1619126283" alt="Coding image" width={455} />
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

export default Card