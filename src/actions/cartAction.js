import Axios from 'axios';
import {CART_ADD_ITEM,CART_REMOVE_ITEM,CART_SAVE_SHIPPING} from "../constants/cartContants";


const addToCart=(productId,qty)=>async (dispatch)=>{
    try{
        const {data}=await Axios.get("http://localhost:5000/api/products/"+productId);
      dispatch({type:CART_ADD_ITEM
        ,payload:{
          product:data._id,
          name:data.name,
          image:data.imgsrc,
          price:data.price,
          countInStock:data.countInStock,
          qty
      }});
    
    }catch(error){
console.log(error);
    };
}
const removeFromCart=(productId)=>(dispatch,getState)=>{
    dispatch({type:CART_REMOVE_ITEM,payload:productId});
   

}
const saveShipping=(data)=>(dispatch)=>{
    dispatch({type:CART_SAVE_SHIPPING,payload:data});
}


export {addToCart,removeFromCart,saveShipping};