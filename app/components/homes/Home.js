import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import "./home.css"


import HomeCard from "./HomeCard"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i ><FontAwesomeIcon icon={faChevronRight}/></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
      <i ><FontAwesomeIcon icon={faChevronLeft}/></i>
      </button>
    </div>
  )
}
const Home = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    focusOnSelect: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <>
      <div className='homeContainer'>
        <Slider {...settings}>
          {items.map((item) => {
            return (
              <>
                <HomeCard key={item.id} item={item} />
              </>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default Home
