import axios from "axios";
import { ADD_PRODUCT, ALL_PRODUCTS, BASE_URL } from "../endPoints";

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