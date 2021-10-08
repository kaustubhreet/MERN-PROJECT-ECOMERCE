import React from 'react'
import imag from './congrats.png';
import { NavLink } from 'react-router-dom';

const Common=(props)=>{
    return(
       <>
       <section id="header" className="d-flex-items-center">
       <div className="container-fliud nav_bg">
            <div className="row">
                <br/><br/>
                    <div className="row ">
<div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column margin-left-20%">
<h1> hey baby <strong className="brand-name" >Kaustubh </strong></h1>
<h2 className="my-3">
    {props.name}
</h2>
<div className="mt-3">
    <NavLink to="/service" className="btn btn-info">{props.visit}</NavLink>
</div>
</div>
<div className="col-lg-6 order-1 order-lg-2 header-img">
    <img src={props.image} className="img-fluid animated" alt="pics" />
</div>
</div>
</div>
</div>

       </section>
       </>
    );
};
export default Common;