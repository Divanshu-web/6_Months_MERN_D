import axios from "axios";
import { ADMIN_BASE_URL, ALL_LEARNERMENTOR, BASE_URL, DELETE_LEARNERMENTOR, SINGLE_LEARNERMENTOR, UPDATE_LEARNERMENTOR } from "../endPoints";

function getToken()
{
   let token = localStorage.getItem('token');

   return{
      headers: {
         Authorization: token
      }
   }
}



export function allLearnerMentor(data) {
   return axios.post(ADMIN_BASE_URL + ALL_LEARNERMENTOR, data, getToken())
}


export function singleLearnerMentor(data) {
   return axios.post(BASE_URL + SINGLE_LEARNERMENTOR, data, getToken())
}

export function updateLearnerMentor(data) {
   return axios.post(BASE_URL +UPDATE_LEARNERMENTOR, data, getToken())
}
export function deleteLearnerMentor(data) {
   return axios.post(BASE_URL +DELETE_LEARNERMENTOR, data, getToken())
}