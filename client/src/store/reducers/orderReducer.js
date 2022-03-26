import { ADD_ORDER, FETCH_ORDERS, REMOVE_ORDER } from "../actions/types";

export const orderReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {order: action.data.order}
        case REMOVE_ORDER:
            return {order: false}
        case FETCH_ORDERS:
            return {orders: action.data.orders}
        default:
            return state;
    }
}