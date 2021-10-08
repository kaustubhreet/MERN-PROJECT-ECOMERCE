import react from 'react'
import imag from './congrats.png';
import Common from './Common';
import './home.css';
import Temp from './slider.js';
import FAQs from './FAQs';
import imag2 from '../src/quantum pics/pic-blog-1.png';
import imag3 from '../src/quantum pics/pic-blog-2.png';
import Flag from './footer.jsx';

const Home = () => {
    return (
        <>
            <section style={{ maxHeight: "500px" }}>
                <div className="container-fluid">

                    <svg viewBox="40 0 400 500"
                        preserveAspectRatio="xMinYMin meet">

                        <path d="M0, 100 C150, 200 350,
         0 500, 100 L500, 00 L0, 0 Z"
                            style={{ stroke: "none", fill: "rgb(133, 214, 251)" }}>
                        </path>
                    </svg>

                    <div className="row" style={{ marginTop: "-120%" }}>
                        <div className="col">
                            <img src={imag} class="del-img" />
                        </div>
                        <div className="col" style={{fontSize:"32",fontWeight:"800",textTransform:"uppercase"}}>
                            <h1>Do Bussiness With Us</h1>
                            <br />
                            <button className="btn" >Sign Up</button>
                        </div>
                    </div>

                </div>
            </section>
            <br />
            <div className="container-fluid">
                <div className="row" style={{ height: "420px" }}>
                    <div className="col" >
                        <div id="carouselExampleIndicators" style={{ height: "300px" }} class="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={imag3} class="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src={imag3} class="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src={imag3} class="d-block w-100" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span classv="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col" >
                        <div className="divtreview">
                            <p>We are starting to take new projets from 22-10-2021</p>
                        </div>
                        <div class="divtreview">
                            <p>We are going to hire senior UI designer from 20-10-2021</p>
                            <p>New app of our company is live now.Download app for regural updated.</p>

                        </div>
                    </div>
                </div>
            </div>
<section>
            <div class="social">
                <center><h1><strong>OUR </strong>STORY</h1> </center>
                <br />
                <div className="underline"  >

                </div>
                <br />

                <div className="social">
                    <div className="social-box">
                        <h1>social-1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias quod voluptates nostrum modi doloribus excepturi nisi praesentium natus reiciendis?
                            Voluptatibus quia earum quisquam quibusdam nobis distinctio ipsam dolore error itaque.</p>
                    </div>
                    <div className="social-box">
                        <h1>social-1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias quod voluptates nostrum modi doloribus excepturi nisi praesentium natus reiciendis?
                            Voluptatibus quia earum quisquam quibusdam nobis distinctio ipsam dolore error itaque.</p>

                    </div>
                    <div className="social-box">
                        <h1>social-1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias quod voluptates nostrum modi doloribus excepturi nisi praesentium natus reiciendis?
                            Voluptatibus quia earum quisquam quibusdam nobis distinctio ipsam dolore error itaque.</p>


                    </div>
                    <div className="social-box">
                        <h1>social-1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias quod voluptates nostrum modi doloribus excepturi nisi praesentium natus reiciendis?
                            Voluptatibus quia earum quisquam quibusdam nobis distinctio ipsam dolore error itaque.</p>
                    </div>
                </div>

            </div>
            <br/>
            <section>
                
    < Temp />
</section>
            </section>
<section>

    <div class="container-fluid">
   <FAQs /><br/>
        </div>
</section>
<br/>
< Flag />
        </>
    );
};


export default Home;