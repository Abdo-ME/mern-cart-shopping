import { ADD_ORDER, REMOVE_ORDER } from "../actions/types";

export const orderReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {order: action.data.order}
        case REMOVE_ORDER:
            return {order: false}
      
    
        default:
            return state;
    }
}