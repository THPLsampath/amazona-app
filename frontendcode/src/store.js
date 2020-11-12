import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import data from './data';
import { cartReducers } from './Reducers/cartReducers';
import { productDetailsReducers, productListReducers } from './Reducers/productReducers';

const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    }
};
const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducers
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;

