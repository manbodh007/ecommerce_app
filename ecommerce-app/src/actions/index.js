import {createStore} from 'react-redux';

export const UPDATE_DATA = 'UPDATE_DATA';
export const UPDATE_CART_VALUE = 'UPDATE_CART_VALUE';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const SHOW_FORM = 'SHOW_FORM';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const SORT_PRODUCT = 'SORT_PRODUCT';

export function fetchProducts(){
    return(dispatch)=>{
       const url = 'https://my-json-server.typicode.com/manbodh007/JsonData/db';
       fetch(url)
       .then((response)=>response.json())
       .then((data)=>{
           console.log('data',data);
           dispatch(updateData(data.products));
       })
    }
}

export function updateData(data){
    return {
        type:UPDATE_DATA,
        data
    }
}

export function updateCartValue(data){
    return{
        type:UPDATE_CART_VALUE,
        data
    }
}

export function deleteProducts(data){
    return {
        type:DELETE_PRODUCT,
        data
    }
}

export function showProductForm(data){
    return {
        type:SHOW_FORM,
        data
    }
}

export function addNewProduct(data){
    return {
        type:ADD_PRODUCT,
        data
    }
}

export function editProduct(data){
    return {
        type:EDIT_PRODUCT,
        data
    }
}
export function sortProduct(data){
    return {
        type:SORT_PRODUCT,
        data
    }
}

