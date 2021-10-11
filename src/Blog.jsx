import iblog from './quantum pics/pic-blog-1.png';
import Carousel from 'react-bootstrap/Carousel';
import carf from './quantum pics/c1.jpeg';
import carf2 from './quantum pics/c2.jpg';
import carf3 from './quantum pics/c3.jpg';
import Flag from './footer.jsx';
import { Link } from 'react-router-dom';
import iblog3 from './quantum pics/software.gif';
import iblog1 from './quantum pics/development.gif';
import iblog2 from './quantum pics/app-developer.png';
import './Blog.css';
const Blog = () => {
    return (
        <>

            <div className="container-fluid "  style={{padding:"100px 200px",backgroundImage:"radial-gradient(circle,  rgb(4 194 246), rgb(86 255 121))"}}>
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
                <img src={iblog} style={{width:"100%",height:"80%"}}  alt="dia" />
            </div>
            <div className="container-fluid " style={{padding:"100px 200px",backgroundImage:"radial-gradient(circle,rgb(114 242 45),rgb(242 209 0))"}}>
               <center><h1><br /><br />PROBLEM <strong>STATEMENT</strong></h1></center>
                <div className="underline" ></div>
                <br />
               <center><small >The presence of multiple objects in multiple categories caused many issues to keep turnaround time in control.<br/>
                Integrating different gestures control on a single screen was a bit complicated.Minimizing external
                sound disturbance to deliver a lucid sound effect to the added objects.
                </small></center><br/><br /><br />
                
            </div>
           {/* <center>
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
  </div></center>*/}
            <br />
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
   < img src={iblog1} class="card-img-top"  alt="WEB"/>
      <div class="card-body">
        <h5 class="card-title">  <Link to="/Blog1" >HOW TO BECOME WEBSITE DEVELOPER?</Link></h5>
        </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={iblog2} class="card-img-top"  alt="APP"/>
      <div class="card-body">
        <h5 class="card-title"> <Link to="/Blog2"> HOW TO BECOME APP DEVELOPER?</Link></h5>
       </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    < img src={iblog3} class="card-img-top" alt="SOFTWARE"/>
      <div class="card-body">
        <h5 class="card-title"><Link to="/Blog3" >HOW TO BECOME SOFTWARE DEVELOPER?</Link></h5>
          </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
            <br />
            <div className="container-fluid my-3">
            <Carousel variant="dark">
  <Carousel.Item fade interval={1000}>
    <img 
      className="d-block w-100"
      src={carf} style={{height:"500px"}}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carf2}style={{height:"500px"}}
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carf3} style={{height:"500px"}}
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel>
</div>
<br/>
{/*pages no */}
<div className="container-fluid">
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="Blog1">1</a></li>
    <li class="page-item"><a class="page-link" href="Blog2">2</a></li>
    <li class="page-item"><a class="page-link" href="Blog3">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div>

          {/*  <div className="social">
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
               
  </div>*/}
            < Flag />
        </>
    );
};
export default Blog;
