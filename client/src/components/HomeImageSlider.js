import { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../style/HomeMiddleSection.css"
import Card from "./Card/Card"

const HomeImageSlider = () => {
    const [listings, setListing] = useState([])


        useEffect(() => {
      const fetchListings = () => {
          try {
              fetch(`http://localhost:5000/listings/`)
                  .then((response) => response.json())
                  .then(({ listings }) => {
                      setListing(listings)
                  })
          } catch (err) {
              console.log(err)
          }
      }
      fetchListings()
  }, [])
      
      const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 2500,
}

  return (
    <div className = "sliderContainer">
        <div className="sliderHeading"><h1>Our latest properties</h1></div>
        <div className="imgslider">
        <Slider {...settings}>
          {listings.map((item) => (
              <Card item={item} key={item.id} />
          ))}
        </Slider>
      </div>
      <div className="linkButton">
        <button>Browse all Properties</button>
      </div>
    </div>
  )
}

export default HomeImageSlider
