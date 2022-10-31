import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/cart";

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    const {value} = action
    switch (action.type) {
        case ADD_TO_CART: 
        const productValue = state.cart.find(el => el.id === value.id)
            if (productValue) {
                productValue.count++
                const arr = state.cart.filter(el => el.id !== value.id)
                return {cart : [...arr,productValue]}
            } else {
                value.count = 1
            }
            return {cart: [...state.cart, value]}
        case DELETE_FROM_CART : 
        const product = state.cart.find(el => el.id === value)
            if (product.count > 1) {
                product.count--
                const arr = state.cart.map(el => {
                    if (el.id !== value) {
                    return el
                } else {
                    return product
                }
                })
            return {cart : [...arr]} 
    }   else {

        return {cart :[...state.cart.filter(el => el.id !== product.id)]}
    }
        
        default: return state
    }
}

export default cartReducer