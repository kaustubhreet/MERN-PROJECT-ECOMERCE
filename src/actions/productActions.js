import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL} from "../constants/productConstants";
import axios from 'axios';

const listProducts=()=>async(dispatch)=>{
    dispatch({type:PRODUCT_LIST_REQUEST});
    // const fetchData=async()=>{
        try{
        const {data}=await axios.get("http://localhost:5000/api/products");
       dispatch({type:PRODUCT_LIST_SUCCESS,payload:data});
        }catch(error){
            dispatch({type:PRODUCT_LIST_FAIL,payload:error.message});
        }
        // setProduct(data);
        }
       // fetchData();

       const detailsProduct=(productId)=>async(dispatch)=>{
     try{
         dispatch({type:PRODUCT_DETAILS_REQUEST,payload:productId});
         const {data}=await axios.get("http://localhost:5000/api/products/"+productId);
         dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data});
     }catch(error){
         dispatch({type:PRODUCT_DETAILS_FAIL,payload:error.message});
     }
       }
       
export {listProducts,detailsProduct}