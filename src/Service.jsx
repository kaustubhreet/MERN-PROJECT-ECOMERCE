import {NavLink} from 'react-router-dom';
import { Link,Route } from 'react-router-dom';
import { useState,useEffect} from 'react';
import Flag from './footer.jsx';
import Particle from './Particle.jsx';
import './About.css';
import {useSelector,useDispatch} from 'react-redux';
import { listProducts } from './actions/productActions.js';
//import imag3 from './congrats3.png';
//import imag4 from './congrats4.png';
//import imag5 from './congrats5.png';
//import imag6 from './congrats6.png';
//import img1 from '../src/quantum pics/pic-blog-1.png';
//import img2 from '../src/quantum pics/pic-blog-2.png';

const Service = () => {
   //const [products,setProduct]=useState([]);
   const productList=useSelector(state=>state.productList);
   const {products,loading,error}=productList;
  const dispatch=useDispatch();
   useEffect(()=>{
  dispatch(listProducts());
  return()=>{
   //
  };
   },[])
 console.log(products);
    return loading? <div>loading...</div>:
    error?<div>{error}</div>: 
    
    (
        <>
            <Particle />
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                <Route path={'/product/:id'+products._id}></Route> 
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                        
                                { products.map((val)=>{
                                    return (
                <div className="col-md-4 col-10 mx-auto">
               
          <div class="card shadow p-3 mb-5 bg-white rounded" key={val._id} >
          <Link to={'/product/'+val._id}><img src={val.imgsrc} class="card-img-top" alt="343"/></Link>
      <div className="card-body">
      <h5 className="card-title"> {val.title}</h5>
        <p className="card-text">{val.desc}</p>
       <h6><strong>${val.price}</strong></h6>
        <NavLink to={'./product/'+val._id} className="btn btn-primary">
         Buy Now</NavLink>
      </div>
    </div>
  </div>                 )
                                }
                                )
                            }
                    </div>
                    </div>
                </div>
            </div>
            <br />
            < Flag />
        </>
    );
};
export default Service;