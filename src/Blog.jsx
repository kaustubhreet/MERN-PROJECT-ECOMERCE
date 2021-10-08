import react from 'react'
import iblog from './quantum pics/pic-blog-1.png';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import carf from './quantum pics/pic-blog-1.png';
import './Blog.css';
import Flag from './footer.jsx';
const Blog = () => {
    return (
        <>

            <div className="container-fluid ">
               <center><br /> <h1><strong>CONCEPT</strong> BEHIND VIDEOBOMB</h1>
                    <div className="underline"></div>
                    <br />
                    <small> Experience the exciting world of augmented reality through realistic animated
                        and 3D objects in the real world with Videobomb. <br />Combining the concept of
                        Augmented Reality and Machine learning, it enables users to scan the popular
                        tied-up products and play with their latest videos and objects. The platform
                        also allows to share their augmented reality experiences by sharing their location.
                    </small></center><br />
            </div>
            <div className="count-pic">
                <img src={iblog} style={{width:"100%",height:"80%"}}  />

            </div>
            <div className="container-fluid bg-success text-light" style={{
    backgroundColor:"blanchedalmond"
   }}>
               <center><h1><br /><br />PROBLEM <strong>STATEMENT</strong></h1></center>
                <div className="underline" ></div>
                <br />
               <center><small >The presence of multiple objects in multiple categories caused many issues to keep turnaround time in control.<br/>
                Integrating different gestures control on a single screen was a bit complicated.Minimizing external
                sound disturbance to deliver a lucid sound effect to the added objects.
                </small></center><br/>
                
            </div>
            <center>
            <br/>
                <div className="cont">

                    <div className="div-1" >
                        <div className="div-1-text">
                        <strong>WEB APP</strong> <br />
                        Node.js
                        </div>
                        
                    </div>
                    <div className="div-1">
                        <div className="div-1-text">
                        <strong>
                            TECHNOLOGIES </strong><br />
                        Xcode <br />(AR KiT, AV Foundation, Scent)

                        </div>
                        
                    </div>
                    <div className="div-1">
                        
                        <div className="div-1-text">
                        <strong>MOBILE APP</strong>
                        <br />  iOS
                        </div>
                        
                    </div>
                </div></center>
            <br />

            <br />
            <Carousel variant="dark">
  <Carousel.Item fade interval={1000}>
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
<br/><br></br>

            <div className="social">
                <center><h1><strong>OUR </strong>STORY</h1> </center>
                <br />
                <div className="underline" ></div>
                <br />
                <div className="social-icons">

                </div><br />
                <div className="social-icons" style={{backgroundColor:"rgb(225, 252, 255)",height:"200px"}}>
                    <br /> <h1>kaustubh</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est
                        provident suscipit quae expedita doloremque quidem. Nesciunt dolor in ab assumenda,
                        ipsum obcaecati est ex voluptatem molestiae culpa fuga praesentium.</p>
                </div>
                <div className="social-icons" style={{backgroundColor:"rgb(221, 255, 255)",height:"200px"}}>
                    <br /><h1>kaustubh</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est
                        provident suscipit quae expedita doloremque quidem. Nesciunt dolor in ab assumenda,
                        ipsum obcaecati est ex voluptatem molestiae culpa fuga praesentium.</p>
                </div>
                <br /><br />
                <div className="social-icons-1" style={{backgroundColor:"rgb(225, 252, 255)"}}>
                    <br /> <h1>kaustubh</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est
                        provident suscipit quae expedita doloremque quidem. Nesciunt dolor in ab assumenda,
                        ipsum obcaecati est ex voluptatem molestiae culpa fuga praesentium.</p>
                </div>
                <div className="social-icons-1" style={{backgroundColor:"rgb(221, 255, 255)"}}>
                    <br /><h1>kaustubh</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est
                        provident suscipit quae expedita doloremque quidem. Nesciunt dolor in ab assumenda,
                        ipsum obcaecati est ex voluptatem molestiae culpa fuga praesentium.</p>
                </div>
               
            </div>
           
        </>
    );
};
export default Blog;
