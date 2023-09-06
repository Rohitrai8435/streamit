import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCirclePlay } from "@fortawesome/free-solid-svg-icons"



const Ucard = ({ item: { id, cover, name, time } }) => {
  return (
    <>
      <div className='MovieBox'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <h3>{name}</h3>
          <span>{time}</span> <br />
          {/*<Link to={`/singlepage/${id}`}>*/}
          <button className='primary-btn'>
            <i className='fas fa-play' ><FontAwesomeIcon icon={faCirclePlay} color="white"/>PLAY NOW</i>
          </button>
          {/*</Link>*/}
        </div>
      </div>
    </>
  )
}

export default Ucard
