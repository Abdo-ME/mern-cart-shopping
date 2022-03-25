import { ADD_ORDER, CLEAR_CART} from "./types"


export const addOrder = (order) => {

return async(dispatch) => {
   await fetch('/api/orders', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: ADD_ORDER,
                data: {
                    order: data
                }
            })
        })
        localStorage.clear('cartItems');
        dispatch({type: CLEAR_CART})
        
       
}
}
