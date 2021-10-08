import react from 'react'
import Carousel from 'react-bootstrap/Carousel';
import carf from './quantum pics/pic-blog-1.png';
import Table from 'react-bootstrap/Table';
import './love.css';
import Flag from './footer.jsx';
import Contactfo from './form.jsx';
import Temp from './slider.js';

const Contact=()=>{
  return(
    
        <div>
      <br/>
< Contactfo/>
<br/>
            
            <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carf}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carf}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carf}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br/>
<Temp/>
        <br/>
  
<br/>
< Flag/> 
</div> 
      
    )
};


export default Contact;
