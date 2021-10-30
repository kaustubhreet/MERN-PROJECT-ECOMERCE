import {createStore,combineReducers, applyMiddleware,compose} from 'redux';
import {productListReducer} from './reducers/productReducers';
import thunk from 'redux-thunk';

const intitialState={};
const reducer=combineReducers({
    productList:productListReducer,
})
const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store=createStore(reducer,intitialState,composeEnhancer(applyMiddleware(thunk)));
export default store;