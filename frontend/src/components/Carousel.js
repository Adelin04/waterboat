import React from "react";

//import react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import CSS Carousel
import "./Carousel.css";

class Carousel extends React.Component {
  render() {
    const settings = {
      fade:true,
      dots: true,
      autoplay:true,
      infinite: true,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="imgSlider" src="./images/boat1.jpg" alt="boat1" />
          </div>
          <div>
            <img className="imgSlider" src="./images/boat2.jpg" alt="boat2" />
          </div>
          <div>
            <img className="imgSlider" src="./images/boat3.jpg" alt="boat3" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
