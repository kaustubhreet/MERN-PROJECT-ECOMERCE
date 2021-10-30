import React, { Component } from "react";
import Slider from "react-slick";
import icon1 from "../src/teamIcons/1.jpg";
import icon2 from "../src/teamIcons/2.jpg";
import icon3 from "../src/teamIcons/3.png";
import icon4 from "../src/teamIcons/4.png";
import icon5 from "../src/teamIcons/5.png";
import icon6 from "../src/teamIcons/6.png";
import "./slick.css"; 
import "./slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2500,
      cssEase: "linear"
    };
    return (
      <div >
        <div class="container shadow p-3 mb-5 bg-white rounded"> 
           <center><h1><strong>OUR </strong>CLIENT</h1> </center>
                   </div>
        <Slider {...settings}>
          <div>
          <img
      src={icon1}
      alt="first slide" style={{height:"250px",width:"220px",borderRadius:"50%"}}/>
          </div>
          <div>
          <img
      src={icon2}
      alt="first slide" style={{height:"250px",width:"220px",borderRadius:"50%"}}
    />
          </div>
          <div>
          <img
      src={icon3}
      alt="first slide" style={{height:"250px",width:"220px",borderRadius:"50%"}}
    />
          </div>
          <div>
          <img
      src={icon4}
      alt="first slide" style={{height:"250px",width:"220px",borderRadius:"50%"}}
    />
          </div>
          <div>
          <img
      src={icon5}
      alt="first slide" style={{height:"250px",width:"220px",borderRadius:"50%"}}
    />
          </div>
          <div>
          <img
      src={icon6}
      alt="first slide" style={{height:"250px",width:"220px",borderRadius:"50%"}}
    />
          </div>
        </Slider>
      </div>
    );
  }
}