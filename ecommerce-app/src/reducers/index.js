import {combineReducers} from 'redux'
import products from './products';
import other from './other';

export default combineReducers({
    products,
    other
})