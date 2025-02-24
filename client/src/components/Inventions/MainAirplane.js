import { Link } from "react-router-dom";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import airplane_background from "./../images/Airplane/airplane_background.jpeg";
import airplane_item0 from "./../images/Airplane/airplane_item0.JPG";
import airplane_item1 from "./../images/Airplane/airplane_item1.JPG";
import airplane_item2 from "./../images/Airplane/airplane_item2.JPG";
import airplane_item3 from "./../images/Airplane/airplane_item3.png";
import airplane_item4 from "./../images/Airplane/airplane_item4.JPG";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
};

const MainAirplane = () => {

  return (
    <div className="MainAirplanes">
      <Fade top fraction={0.5} duration={1000}>
        <div className="MainAirplanes__title">
          Airplane
        </div>        
      </Fade>      
      <div className="MainAirplanes__body">      
        <img className="body__background" src={airplane_background} alt=""></img>
        <Link to="/Airplane" className="Airplanes__link">
          Click Me
        </Link>
        <div className="body__links">          
          <li>
            <ul>
              <div>-Links-</div>
            </ul>
            <ul>
              <a className="body__link" href="https://github.com/yumboy8747">Effel Tower Guy</a>
            </ul>
            <ul>
              <a className="body__link" href="https://github.com/CJ0823">Running Guy</a>  
            </ul>
            <ul>
              <a className="body__link" href="https://github.com/doi-h">One-leg Guy</a>  
            </ul>
            <ul>
              <a className="body__link" href="https://github.com/ryhyn123">One-arm Guy</a>  
            </ul>            
          </li>                    
        </div>                
        <div className="body__slider">
          <Slider {...settings} >
            <div className="slider-wrapper">
              <img className="slider__img0" src={airplane_item0} alt=""></img>
            </div>                
            <div className="slider-wrapper">
              <img className="slider__img1" src={airplane_item1} alt=""></img>              
            </div>
            <div className="slider-wrapper">
              <img className="slider__img2" src={airplane_item2} alt=""></img>
            </div>
            <div className="slider-wrapper">
              <img className="slider__img3" src={airplane_item3} alt=""></img>
            </div>
            <div className="slider-wrapper">
              <img className="slider__img4" src={airplane_item4} alt=""></img>
            </div>              
          </Slider>
        </div>                      
      </div>              
    </div>    
  );
};

export default MainAirplane;
