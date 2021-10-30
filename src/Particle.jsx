
import Particles from 'react-particles-js';
import './About.css';

const Particle=()=>{

    return(
        <>
        <div className="wrapper">
       <Particles
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800               
              },        
            },
            color: {
                value: "#15f2d8"
              },
              shape: {
                type: "star",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 10,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  speed: 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}  />
<div className="text">
  <h1><b>BEST PRODUCTS AND TOP TRENDING PRODUCTS</b></h1>
  <p>Enabling Innovation, Result, and Adaptability with Business 5.0 model in App Ecosystem</p>
      </div>
      </div>
        </>

    );
};
export default Particle;