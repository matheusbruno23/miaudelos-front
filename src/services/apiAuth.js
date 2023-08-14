import axios from "axios"

const BASE_URL= "https://miaudelos-api-nvtq.onrender.com"

function login(body){
    const promise = axios.post(`${BASE_URL}/` , body)
    return promise
}   

function signup(body){
    const promise = axios.post(`${BASE_URL}/signup` , body)
    return promise
}

const apiAuth = {login, signup}

export default apiAuth