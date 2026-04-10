import axios from "axios";
import { ADD_PRODUCT, ALL_PRODUCTS, BASE_URL, DELETE_PRODUCT, SINGLE_PRODUCT, UPDATE_PRODUCT } from "../endPoints";

function getToken()
{
   let token = localStorage.getItem('token');

   return{
      headers: {
         Authorization: token
      }
   }
}

export function addProduct(data) {
   return axios.post(BASE_URL + ADD_PRODUCT, data, getToken())
}


export function allProducts(data) {
   return axios.post(BASE_URL + ALL_PRODUCTS, data, getToken())
}



export function singleProduct(data) {
   return axios.post(BASE_URL + SINGLE_PRODUCT, data, getToken())
}

export function updateProduct(data) {
   return axios.post(BASE_URL +UPDATE_PRODUCT, data, getToken())
}
export function deleteProduct(data) {
   return axios.post(BASE_URL +DELETE_PRODUCT, data, getToken())
}