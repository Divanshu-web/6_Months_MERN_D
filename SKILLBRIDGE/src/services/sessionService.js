import axios from "axios";
import { ADD_SESSION, ADMIN_BASE_URL, ALL_SESSION, BASE_URL, DELETE_SESSION, SINGLE_SESSION, UPDATE_SESSION } from "../endPoints";

function getToken()
{
   let token = localStorage.getItem('token');

   return{
      headers: {
         Authorization: token
      }
   }
}

export function addSession(data) {
   return axios.post(ADMIN_BASE_URL + ADD_SESSION, data, getToken())
}


export function allSession(data) {
   return axios.post(ADMIN_BASE_URL + ALL_SESSION, data, getToken())
}



export function singleSession(data) {
   return axios.post(BASE_URL + SINGLE_SESSION, data, getToken())
}

export function updateSession(data) {
   return axios.post(BASE_URL +UPDATE_SESSION, data, getToken())
}
export function deleteSession(data) {
   return axios.post(BASE_URL +DELETE_SESSION, data, getToken())
}