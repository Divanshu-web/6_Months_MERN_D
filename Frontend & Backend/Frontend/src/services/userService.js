import axios from 'axios'
import { BASE_URL, REGISTER } from '../../endpoints'

export function register(data) {
    return axios.post(BASE_URL + REGISTER, data)
}