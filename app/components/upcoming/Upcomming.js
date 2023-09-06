
import Ucard from "./Ucard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight ,faChevronCircleLeft, faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i class='fa fa-chevron-right'><FontAwesomeIcon icon={faChevronRight}/> </i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
      <i class='fa fa-chevron-Left'><FontAwesomeIcon icon={faChevronLeft}/> </i>
      </button>
    </div>
  )
}
const Upcomming = ({ items, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className='upcome'>
        <div className='container'>
          <div className='heading flexSB'>
            <h1>{title}</h1>
            <Link href='/'>View All</Link>
          </div>
          <div className='content'>
            <Slider {...settings}>
              {items.map((item) => {
                return (
                  <>
                    <Ucard key={item.id} item={item} />
                  </>
                )
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Upcomming


