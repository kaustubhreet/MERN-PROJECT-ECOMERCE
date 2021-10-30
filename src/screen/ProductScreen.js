import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import data from '../Sdata';
import './ProductScreen.css';
import { useEffect } from 'react';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props){

    const productDetails=useSelector(state=>state.productDetails);
    const {product,loading,error}=productDetails;
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id));
        return ()=>{
//
        };
    },[])
/*    console.log({props});
  //console.log(data.val._id);
      console.log(props.match.params.id);
      const product=data.find(x=>x._id===props.match.params.id);
     
      const changeImage=(element)=> {
        var main_prodcut_image ='main_product_image';
        main_prodcut_image.src = element.src;
        }*/
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
                    <img  src={product.imgsrc} id="main_product_image" style={{width:"100%",height:"100%"}}/> </div>
                    <div class="thumbnail_images">
                        <ul id="thumbnail">
                            <li><img  src={product.imgsrc} style={{width:"80px"}}/></li>
                            <li><img  src={product.imgsrc} style={{width:"80px"}}/></li>
                            <li><img  src={product.imgsrc} style={{width:"80px"}}/></li>
                            <li><img  src={product.imgsrc} style={{width:"80px"}}/></li>
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
                    <div class="buttons d-flex flex-row mt-5 gap-3"> 
                    <button class="btn btn-outline-dark">Buy Now</button>
                     <button class="btn btn-dark">Add to Basket</button> 
                     </div>
                    <div class="search-option"> <i class='bx bx-search-alt-2 first-search'></i>
                        <div class="inputs"> 
                        <input type="text" name=""/> 
                        </div> <i class='bx bx-share-alt share'></i>
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