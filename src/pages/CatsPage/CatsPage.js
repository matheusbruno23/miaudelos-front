import { useContext, useEffect } from "react";
import CatProfile from "../../components/CatProfile";
import apiCats from "../../services/apiCats";
import { UserContext } from "../../contexts/UserContext";
import { useState } from "react";
import styled from "styled-components"

export default function CatsPage(){
    const [cats, setCats] = useState([])
    const {user} = useContext(UserContext)

    useEffect(getCatsList, [])

    function getCatsList(){
        apiCats.getCats(user.token)
        .then( res=> {
              const apiCats = res.data
              console.log(res.data)
              setCats(apiCats)
        })
        .catch( err => {
            console.log(err.message)
        })
    }

    return (
        <containerDisplay>
        { (cats.length === 0 || [] )?( <p>Você nao possui gatinhos cadastrados ainda</p> ) : (cats.map ( c => (
            <CatProfile 
            key={c.id} 
            name={c.name}
            photo_url={c.photo_url} 
            characteristics={c.characteristics} 
            contact_info={c.contact_info} 
            id={c.id}
            getCatsList={getCatsList}
            />
        )))}
        </containerDisplay> 


    )
} 

const containerDisplay = styled.div`
    width:640px;
    height:100%;
    display:flex;
    flex-direction: column;
`