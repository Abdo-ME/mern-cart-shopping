import { FETCH_PRODUCTS, FILTER_SIZE, FILTER_ORDER } from "../actions/types";

export const productsReducer = (state= {}, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS:
            return {products: action.data, filterProducts: action.data} 
        
        case FILTER_SIZE: 
            return {
                ...state,
                size: action.data.size,
                filterProducts: action.data.products
            }   
            
        case FILTER_ORDER: 
        return {
            ...state,
            sort: action.data.sort,
            filterProducts: action.data.products
        }   
        default:
            return state
    }
}







// import { FETCH_PRODUCTS,FILTER_ORDER, FILTER_SIZE} from "../actions/types";


// export const productsReducer = (state = {}, action) => {
    
//     switch (action.type) {
      
//     case FETCH_PRODUCTS:
//         // console.log(action.data);
//             return {
//                 products: action.data,
//                 filterProducts: action.data.products,
//                 sort: action.data.sort
//             }
        
//         case FILTER_SIZE:
//             console.log("actived");
//         return {
//             ...state,
//             filterProducts: action.data.products,
//             size : action.data.size
//         }
        
//         case FILTER_ORDER:
//         return {
//             ...state
//             , filterProducts: action.data.products,
//             sort : action.data.sort
//         }
//     default:
//             return state;
//     }
// }
