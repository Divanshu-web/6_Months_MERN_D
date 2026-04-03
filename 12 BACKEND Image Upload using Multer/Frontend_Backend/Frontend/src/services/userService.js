import axios from "axios";
import { BASE_URL, REGISTER } from "../endPoints";

export function register(data) {
   return axios.post(BASE_URL + REGISTER, data)
}





