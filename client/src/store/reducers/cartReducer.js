import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types"
const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
}
export const cartReducer = (state= initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:   
        return {
            cartItems: action.data.cartItems
        }   
        case REMOVE_FROM_CART:   
        return {
            cartItems: action.cartItems
        }   
        default:
            return state
    }
}
