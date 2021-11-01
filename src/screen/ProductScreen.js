import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductScreen.css';
import { useEffect, useState } from 'react';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props){
   const [qty,setQty]=useState([1]);
    const productDetails=useSelector(state=>state.productDetails);
    const {product,loading,error}=productDetails;
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id));
        return ()=>{
//
        };
    },[]);

    const handleAddToCart=()=>{
        props.history.push("/cart/"+props.match.params.id+"?qty="+qty)
    }

   return(
       <>
           <div className="back-to-result">
        <Link to="/service"><button type="button" class="btn btn-outline-success shadow-lg p-3 mb-5 rounded">Back to Product Lists</button></Link>
      </div>
     {loading? <div>Loading.....</div>:
     error?<div>{error}</div>:
     (
      <div class="container mt-5 mb-5">
    <div class="card shadow-lg p-3 mb-5 bg-white rounded">
        <div class="row g-0">
            <div class="col-md-6 border-end">
                <div class="d-flex flex-column justify-content-center">
                    <div class="main_image"> 
                    <img  src={product.imgsrc} id="main_product_image" alt="product-img" style={{width:"100%",height:"100%"}}/> </div>
                    <div class="thumbnail_images">
                        <ul id="thumbnail">
                            <li><img  src={product.imgsrc} style={{width:"80px"}} alt="product-img"/></li>
                            <li><img  src={product.imgsrc} style={{width:"80px"}} alt="product-img"/></li>
                            <li><img  src={product.imgsrc} style={{width:"80px"}} alt="product-img"/></li>
                            <li><img  src={product.imgsrc} style={{width:"80px"}} alt="product-img"/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="p-3 right-side">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>{product.title}</h3> <span class="heart"><i class='fa fas-heart'></i></span>
                    </div>
                    <div class="mt-2 pr-3 content">
                        <p>{product.desc}</p></div>
                    <h3>${product.price}</h3>
                    <div class="ratings d-flex flex-row align-items-center">
                        <div class="d-flex flex-row"> <i class='bx bxs-star'></i> <i class='bx bxs-star'></i> <i class='bx bxs-star'></i> <i class='bx bxs-star'></i> <i class='bx bx-star'></i> </div> <span>441 reviews</span>
                    </div>
                    <div class="mt-5"> <span class="fw-bold">Color</span>
                        <div class="colors">
                            <ul id="marker">
                                <li id="marker-1"></li>
                                <li id="marker-2"></li>
                                <li id="marker-3"></li>
                                <li id="marker-4"></li>
                                <li id="marker-5"></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        Status: {product.countInStock>0?"In stock":"out of stock"}
                    </div>
                        <div class="inputs"> 
                        Qty:<select value={qty} onChange={(e)=>{
                            setQty(e.target.value)}}>
                            {[...Array(product.countInStock).keys()].map(x=>
                                <option key={x+1} value={x+1}>{x+1}</option>)}
                        
                        </select>
                        { product.countInStock >0?
                      <div className="buttons d-flex flex-row mt-5 gap-3"> 
                    <button className="btn btn-outline-dark">Buy Now</button>
                     <button onClick={handleAddToCart} className="btn btn-dark">Add to Basket</button> 
                     </div>:
                     <div><button className="btn btn-dark">Out of Stock</button></div>}
                     </div> 
                     
                    <div class="search-option"> 
                              </div>
                </div>
            </div>
        </div>
    </div>
   
</div>
 )}
    
       </>

   )
};

export default ProductScreen;