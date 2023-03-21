import React from 'react'
import './feature.scss'

const Feature = ({title, text}) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className="gpt3__features-conatiner__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div  className="gpt3__features-conatiner__feature__text" >
        <p>{text}</p>
      </div>
      
    </div>
  )
}

export default Feature