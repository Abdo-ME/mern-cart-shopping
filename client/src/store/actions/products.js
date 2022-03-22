import {  FETCH_PRODUCTS, FILTER_ORDER, FILTER_SIZE } from "./types"

/////////////Fetch Products

export const fetchProducts = () => {
    return dispatch => {
        fetch("/api/products")
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: FETCH_PRODUCTS,
                    data: data
                })
            })
    }
}

/////////////////////// Filter By Order
export const filteredSort = (products, value) => {
        
    return dispatch => {
    const cloneProducts = [...products];
    let newProducts = cloneProducts.sort((a, b) => {
        if (value === "lowest") {
        return  a.price - b.price
        } else if (value === "highest") {
        return b.price - a.price    
        }  else{
        return a.id < b.id ? 1 : -1
        }
    });
    dispatch({
        type: FILTER_ORDER,
        data: {
            sort: value,
            products: newProducts
        }
    })
    }

}
/////////////Filter By Size

export const filteredSize = (products, value) => {
    return dispatch => {
        let newProducts = products.filter(p => p.sizes.includes(value))
        dispatch({
            type: FILTER_SIZE,
            data: {
                size: value,
                products: value === "ALL"? products:newProducts
            }
        })
    }   
}
