import axios from "axios";

const BASE_URL= "https://miaudelos-api-nvtq.onrender.com/cats"

function createConfig(token){
return { headers: {Authorization: `Bearer ${token}`}}

}

function getCats(token){
    const promise = axios.get(BASE_URL, createConfig(token))
    return promise
}


function createCat(token){

}

function updateCat(token){

}

const apiCats = {getCats, createCat , updateCat}

export default apiCats