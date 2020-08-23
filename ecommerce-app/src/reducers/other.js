import {
UPDATE_CART_VALUE, 
SHOW_FORM,
EDIT_PRODUCT,
SORT_PRODUCT
} from '../actions';

const intialState = {
    cart_item:0,
    display:'none',
    editable:null,
    sorted:false,
}

export default function other(state=intialState,action){
    switch(action.type){
         case UPDATE_CART_VALUE:
            return {
                ...state,
                cart_item:action.data
            }
        case SHOW_FORM:
            return{
                ...state,
                display:action.data,
                editable:null
            }
        case EDIT_PRODUCT:
            return {
                ... state,
                display:'flex',
                editable:action.data
            }
        case SORT_PRODUCT:
            return {
                ...state,
                sorted:action.data
            }
        default:
          return state
    }
}