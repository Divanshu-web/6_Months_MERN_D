import axios from "axios";
import { BASE_URL, DASHBOARD, LOGIN, REGISTER } from "../endPoints";

export function register(data) {
   return axios.post(BASE_URL + REGISTER, data)
}


export function login(data) {
   return axios.post(BASE_URL + LOGIN, data)
}



export function dashboard(){
   return axios.post(BASE_URL + DASHBOARD)
}

