import axios from "axios";
import { ADD_SKILLS, ADMIN_BASE_URL, ALL_SKILLS, BASE_URL, DELETE_SKILLS, SINGLE_SKILLS, UPDATE_SKILLS } from "../endPoints";

function getToken()
{
   let token = localStorage.getItem('token');

   return{
      headers: {
         Authorization: token
      }
   }
}

export function addSkills(data) {
   return axios.post(ADMIN_BASE_URL + ADD_SKILLS, data, getToken())
}


export function allSkills(data) {
   return axios.post(ADMIN_BASE_URL + ALL_SKILLS, data, getToken())
}



export function singleSkills(data) {
   return axios.post(BASE_URL + SINGLE_SKILLS, data, getToken())
}

export function updateSkills(data) {
   return axios.post(BASE_URL +UPDATE_SKILLS, data, getToken())
}
export function deleteSkills(data) {
   return axios.post(BASE_URL +DELETE_SKILLS, data, getToken())
}