import react from 'react'
import imag from './congrats.png';
import left from '../src/quantum pics/left.jpeg';
import right from '../src/quantum pics/right.jpg';
import why from '../src/quantum pics/bg-1.jpg';
import chose from '../src/quantum pics/quantumpc.gif';
import Common from './Common';
import Temp from './slider.js';
import './About.css';
import './home.css';
import Flag from './footer.jsx';
import Team from './Team';
import Typing from './Typing.jsx';

const About=()=>{
    return(
       <>
        <Typing/>
      {/*<Common name={"Hey Visitors , Want To Know About Me?"} image={imag} visit={"Get Ready!!!"} />
      */}
       <div className="container-fluid">
       <div className="left">
       <img src={left} style={{height:"470px",width:"390px",borderRadius:"20%"}} />
       </div>
       <div className="right" >
       <img src={right} style={{height:"470px",width:"390px",borderRadius:"20%"}}/>
       </div>
       <div className="center"><br/>
        <h1/> <strong><b>REVOLUTIONISING  THE  CONCEPT  OF  SOFTWARE DEVELOPMENT THROUGH PATH-BREAKING INNOVATION</b>
        <br/><p>We are innovators, thinkers, and makers at your service.
     Dedicating our extensive knowledge to create user-centric designs backed.</p></strong>
       </div>
       </div>
       <div class="container-fluid" id="chose" style={{backgroundRepeat:"no-repeat",
       backgroundImage:`url(${why})`,backgroundSize:"cover",color:"yellow",
       wordSpacing:"4px",opacity:"0.9",fontWeight:"800",
       fontSize:"22px"}}>
           <center><h1 style={{ fontSize:"32px"}}>WHY  TO CHOOSE US? </h1></center>
           <br/>
           <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas minima
                voluptas deleniti, sit ipsum, consequuntur fugit aut, placeat enim aliquid 
                id aperiam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Accusantium dicta deserunt voluptatum harum dignissimos doloremque id 
                sit unde dolore atque ullam 
                fugit dolorum facilis quaerat ad, necessitatibus obcaecati soluta quidem.
                Blanditiis, et molestiae! Vitae distinctio officia maiores alias.</p>
       </div>
       <br/>
<br/>
<div class="social">
                <center><h1><strong>OUR </strong>STORY</h1> </center>
                <br />
                <div className="underline"  >

                </div>
                <br />

                <div className="social">
                    <div className="social-box">
                        <h1>UI DESIGNER</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias quod voluptates nostrum modi doloribus excepturi nisi praesentium natus reiciendis?
                            Voluptatibus quia earum quisquam quibusdam nobis distinctio ipsam dolore error itaque.</p>
                    </div>
                    <div className="social-box">
                        <h1>UX DEVELOPER</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias quod voluptates nostrum modi doloribus excepturi nisi praesentium natus reiciendis?
                            Voluptatibus quia earum quisquam quibusdam nobis distinctio ipsam dolore error itaque.</p>

                    </div>
                    <div className="social-box">
                        <h1>WEB DEVELOPER</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias quod voluptates nostrum modi doloribus excepturi nisi praesentium natus reiciendis?
                            Voluptatibus quia earum quisquam quibusdam nobis distinctio ipsam dolore error itaque.</p>


                    </div>
                    <div className="social-box">
                        <h1>APP DEVELOPER</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias quod voluptates nostrum modi doloribus excepturi nisi praesentium natus reiciendis?
                            Voluptatibus quia earum quisquam quibusdam nobis distinctio ipsam dolore error itaque.</p>
                    </div>
                </div>

            </div>
            <br/>
       <div className="container-fluid" >
           <center><h1>BE PARTNER WITH USE</h1></center>
           <p style={{backgroundRepeat:"no-repeat",backgroundSize:"cover",
           color:"red ",textAlign:"center",fontWeight:"20px",
           fontSize:"25px",padding:"150px 100px",backgroundImage:`url(${chose})`}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias quod voluptates nostrum modi doloribus excepturi nisi praesentium natus reiciendis?
                            Voluptatibus quia earum quisquam quibusdam nobis distinctio ipsam dolore error itaque.
           </p>
       </div>
      <br/>
      <Team/>
      <br/>

      <div className="container-fluid" >
      <Temp/>
      </div>
      <br/>
< Flag />
       </>
    );
};
export default About;