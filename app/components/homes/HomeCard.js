import Link from "next/link"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faStar,faStarHalf,faCirclePlay} from "@fortawesome/free-solid-svg-icons"



const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags, video } }) => {
  return (
    <>
      <div className='box'>
        <div className='coverImage'>
          <img src={cover} alt='' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
              <div className='rate'>
                <i ><FontAwesomeIcon icon={faStar}/></i>
                <i ><FontAwesomeIcon icon={faStar}/></i>
                <i ><FontAwesomeIcon icon={faStar}/></i>
                <i ><FontAwesomeIcon icon={faStar}/></i>
                <i ><FontAwesomeIcon icon={faStarHalf}/></i>
              </div>
              <label>{rating}(Imdb)</label>
              <span>GP</span>
              <label>{time}</label>
            </div>
            <p>{desc}</p>
            <div className='cast'>
              <h4>
                <span>Starring </span>
                {starring}
              </h4>
              <h4>
                <span>Genres </span>
                {genres}
              </h4>
              <h4>
                <span>Tags </span>
                {tags}
              </h4>
            </div>
            <button className='primary-btn'>
              <i className='fas fa-play'><FontAwesomeIcon icon={faCirclePlay}/></i> PLAY NOW
            </button>
          </div>
          <div className='palyButton row'>
            <Link href={`/singlepage/${id}`}>
              <button>
                <div className='img'>
                  <img src='./images/play-button.png' alt='' />
                  <img src='./images/play.png' className='change' />
                </div>
                WATCH TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard
