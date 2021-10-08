import react from 'react'
import imag from './congrats.png';
import {NavLink} from 'react-router-dom';
import Sdata from './Sdata';

const Card=(props)=>{
    return(
       <>
          <div className="col-md-4 col-10 mx-auto">
          <div class="card ">
      <img src={props.imgsrc} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> {props.title}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <NavLink to="./home" className="btn btn-primary">
            Go somewhere</NavLink>
      </div>
    </div>
  </div>

                
              
          
       </>
    );
};
export default Card;