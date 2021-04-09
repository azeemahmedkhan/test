import React from 'react'
import Image from './image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

const Card = (props) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="card text-left mb-3 border border-dark rounded">
        <img className="w-100" src={Image} alt=""/>
        <div className="card-body">
          <h5 className="card-title">
            {props.venue.name}
          </h5>
          <h6>{props.venue.capacity}</h6>
          <FontAwesomeIcon icon={faHeart} className="text-danger"/>
          <FontAwesomeIcon icon={farHeart} className="text-danger"/>
        </div>
      </div>
    </div>
  )
}

export default Card
