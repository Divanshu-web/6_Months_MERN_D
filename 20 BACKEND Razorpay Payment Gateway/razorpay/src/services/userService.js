import axios from "axios";
import { ADMIN_DASHBOARD, BASE_URL, LOGIN, REGISTER } from "../endPoints";


function token() {
   let token = localStorage.getItem("token")
   return {
      headers: {
         Authorization: token
      }
   }
}

export function register(data) {
   return axios.post(BASE_URL + REGISTER, data)
}


export function login(data) {
   return axios.post(BASE_URL + LOGIN, data)
}


export function adminDashboard(data) {
   return axios.post(BASE_URL + ADMIN_DASHBOARD, data, token())
}





