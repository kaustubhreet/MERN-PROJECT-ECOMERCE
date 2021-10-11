import imag6 from './congrats6.png';
import './cart.css';

const Cart=()=>{
    return(
<>
<header>
   <div className="continue-shopping">
       <h3>Continue Shopping</h3>
   </div>
   <div className="cart-icon">
       <i class="fas fa-cart">Cart</i>
       <p>4</p>
   </div>
   </header>
   <hr/>
   <section className="main-cart-section">
       <h1>Shopping Cart</h1>
     <p>you have <span className="total-items-count"></span>items in cart </p>
     <div className="cart-items">

         <div className="cart-items-container">
            
             <div className="items-info">
                 <div className="product-img">
                     <img src={imag6} style={{height:100}} alt="product-6"></img>
                 </div>
                 <div className="title">
                     <h2>Product-1</h2>
                     <p>
                         black color
                     </p>
                 </div>
                 <div className="add-minus-quantity">
                  <i class="fa fa-minus minus" aria-hidden="true"></i>
                  <input type="text" style={{width:35,marginInline:15}} placeholder="3"/>
                  <i class="fa fa-plus" id="add" aria-hidden="true"></i>
                 </div>
                 <div className="price">
                     <h3>$200</h3>
                 </div>
                 <div className="remove-items">
                 <i class="fa fa-facebook remove" aria-hidden="true"></i>
                 </div>
                 <hr/>
                
             </div>
             
         </div>
         
     </div>
   </section>
</>
    )
};
export default Cart;