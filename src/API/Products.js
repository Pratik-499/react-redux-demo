import axios from "axios"

export const products_api = axios.create({
    baseURL:'https://fakestoreapi.com',
    timeout: 15000
});