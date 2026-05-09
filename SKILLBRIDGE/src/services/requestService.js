import axios from "axios";
import { ADD_REQUEST, ADMIN_BASE_URL, ALL_REQUEST, BASE_URL, DELETE_REQUEST, SINGLE_REQUEST, UPDATE_REQUEST } from "../endPoints";

function getToken()
{
   let token = localStorage.getItem('token');

   return{
      headers: {
         Authorization: token
      }
   }
}


export const sendRequest = (data) => {
  return axios.post(ADMIN_BASE_URL + ADD_REQUEST, data, getToken());
};


export function addRequest(data) {
   return axios.post(ADMIN_BASE_URL + ADD_REQUEST, data, getToken())
}


export function allRequest(data) {
   return axios.post(ADMIN_BASE_URL + ALL_REQUEST, data, getToken())
}



export function singleRequest(data) {
   return axios.post(BASE_URL + SINGLE_REQUEST, data, getToken())
}

export function updateRequest(data) {
   return axios.post(BASE_URL +UPDATE_REQUEST, data, getToken())
}
export function deleteRequest(data) {
   return axios.post(BASE_URL +DELETE_REQUEST, data, getToken())
}