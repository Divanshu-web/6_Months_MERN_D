
import axios from "axios";
import { ADD_CATEGORY, ALL_CATEGORIES, BASE_URL, DELETE_CATEGORY, SINGLE_CATEGORY, UPDATE_CATEGORY, } from "../endPoints";


function token() {
   let token = localStorage.getItem("token")
   return {
      headers: {
         Authorization: token
      }
   }
}

export function addCategory(data) {
   return axios.post(BASE_URL + ADD_CATEGORY, data, token())
}
export function updateCategory(data) {
   return axios.post(BASE_URL + UPDATE_CATEGORY, data, token())
}

export function AllCategories(data) {
   return axios.post(BASE_URL + ALL_CATEGORIES, data, token())
}


export function singleCategory(data) {
   return axios.post(BASE_URL + SINGLE_CATEGORY, data, token())
}


export function deleteCategory(data) {
   return axios.post(BASE_URL + DELETE_CATEGORY, data, token())
}
