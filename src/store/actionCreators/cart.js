import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/cart";

export const addToCart = (value) => {
    return {
        type : ADD_TO_CART,
        value : value
    }
}

export const deleteFromCart = (value) => {
    return {
        type : DELETE_FROM_CART,
        value : value
    }
}