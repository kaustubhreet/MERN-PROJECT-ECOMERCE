import {createStore,combineReducers, applyMiddleware,compose} from 'redux';
import {productListReducer,productDetailsReducer} from './reducers/productReducers';
import thunk from 'redux-thunk';
import {cartReducer} from './reducers/cartReducers';

const intitialState={};
const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer
})
const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store=createStore(reducer,intitialState,composeEnhancer(applyMiddleware(thunk)));
export default store;