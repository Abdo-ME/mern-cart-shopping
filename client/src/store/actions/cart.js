import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./types";

// ////////////////Add to Cart
export const addToCart = (product) => {    

    
    return (dispatch, getState) => {

        const cartItems = getState().cart.cartItems;
        const cartProductClone = [...cartItems];
     
        let num=0;
        const checkproduct = cartProductClone.some(i =>i._id === product._id )
        if (checkproduct) {
            num = cartProductClone.filter(p => p._id === product._id)[0].qty++
        } else {
            num = 1;
            cartProductClone.push({ ...product, qty: num })
        }
        dispatch({
            type: ADD_TO_CART,
            data: { cartItems: cartProductClone }
        });
        localStorage.setItem("cartItems",JSON.stringify(cartProductClone))
}
}

/////Remove Product  from Cart
export const removeProductCart = (id) => {
    
    return (dispatch, gatstate) => {

        const cartProducts = gatstate().cart.cartItems;
        let cartProductClone = [...cartProducts]
        const newCartProducts = cartProductClone.filter(product => product._id !== id)

        dispatch({
            type: REMOVE_FROM_CART,
            cartItems : newCartProducts
        })
    localStorage.setItem("cartItems",JSON.stringify(newCartProducts))
    }
}

///////////Clear products cart
export const clearCart = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_CART
        })
    }
}