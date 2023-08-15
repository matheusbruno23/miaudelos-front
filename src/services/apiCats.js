import axios from "axios";

const BASE_URL= "https://miaudelos-api-nvtq.onrender.com/cats"

function createConfig(token){
return { headers: {Authorization: `Bearer ${token}`}}

}

function getCats(token){
    const promise = axios.get(BASE_URL, createConfig(token))
    return promise
}


function getCatById(token, id){

}

function createCat(token, id){

}

function updateCat(token, id){
    const promise = axios.put(`${BASE_URL}/${id}`, createConfig(token))
    return promise
}

const apiCats = {getCats, createCat , updateCat}

export default apiCats