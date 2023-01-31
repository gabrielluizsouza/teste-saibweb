import axios from 'axios'

export const api = axios.create({
    baseURL: "https://interno.saibweb.com.br/api/v1/teste/"
})
