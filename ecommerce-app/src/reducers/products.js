

import {
    UPDATE_DATA,
    DELETE_PRODUCT,
    ADD_PRODUCT,
} from '../actions';



export default function products(state=[],action){
    switch(action.type){
        case UPDATE_DATA:
            return action.data
        case DELETE_PRODUCT:
            return action.data
        case ADD_PRODUCT:
            return [action.data , ...state]    
        default:
            return state
    }
}





