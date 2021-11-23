import {NavLink} from 'react-router-dom';
import { Link,Route } from 'react-router-dom';
import {useEffect} from 'react';
import Flag from './footer.jsx';
import Particle from './Particle.jsx';
import './About.css';
import {useSelector,useDispatch} from 'react-redux';
import { listProducts } from './actions/productActions.js';

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
      <div className="card-body  text-dark">
      <h5 className="card-title  text-dark"> {val.title}</h5>
        <p className="card-text  text-dark">{val.desc}</p>
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