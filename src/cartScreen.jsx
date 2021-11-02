import { useEffect } from 'react';
import { addToCart, removeFromCart } from './actions/cartAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../src/css/cart.css';

const CartScreen = (props) => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }
    const checkoutHandler=()=>{
        props.history.push("/signin?redirect=shipping");
    }
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [])

    return <>
        <div className="back-to-result">
            <Link to="/service"><button type="button" class="btn btn-outline-success shadow-lg p-3 mb-5 rounded">Back to Product Lists</button></Link>
        </div>
        <div className="cart-action shadow-lg p-3 mb-5 rounded">
            <h3>
                Subtotal({cartItems.reduce((a, c) => a + c.qty, 0)} items)
                :
                ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </h3>
            <Link to="checkout">
                <button className="btn btn-primary"onClick={checkoutHandler} disabled={cartItems.length === 0}>Proceed to Checkout</button>
      </Link>
        </div>

        <div className="container-fluid my-3">
            <div className="cart-list" style={{ overflowY: "scroll", height: "400px", width: "70%" }}>
                <ul className="cart-list-container row" >
                    <li>
                        <h3>
                            Shopping Cart
                        </h3>

                    </li>
                    {
                        cartItems.length === 0 ?
                            <div>
                                Cart is empty
                            </div>
                            :
                            cartItems.map(item =>
                                <li>
                                    <div className="cart-img mb-3">
                                        <img src={item.image} className="cart-img" alt="product"></img>
                                    </div>


                                    <div className="cart-name">
                                        <div style={{
                                            marginInline: "80%",
                                            marginTop: "-6%"
                                        }}>
                                            <Link to={"/product/" + item.product}>
                                                <button type="button" className="btn btn-primary mb-2" >
                                                    Add</button>
                                                {item.name}
                                            </Link>

                                        </div>
                                        <div style={{ marginTop: "-5%", marginLeft: "60%" }}>

                                            Qty:
                                            <select value={item.qty}  >
                                                {[...Array(item.countInStock).keys()].map(x =>
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                )}
                                            </select>

                                            <button type="button" className="btn btn-primary" style={{ marginInline: "13px" }} onClick={() => removeFromCartHandler(item.product)}>
                                                delete</button>
                                        </div>
                                        <h3 style={{
                                            marginInline: "40%",
                                            marginTop: "-3%"
                                        }}>Price: ${item.price}</h3>
                                    </div>

                                    <hr />
                                </li>
                            )
                    }
                </ul>

            </div>



        </div>
    </>
}
export default CartScreen;