import styled from "styled-components"
import apiCats from "../services/apiCats"
import update from "../assets/download.jpeg"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"


export default function CatProfile(name , photo_url , characteristics , contact_info, id, getCatsList){

    const {user} = useContext(UserContext)

    function handleUpdate(){
        const confirmation = window.confirm("Gostaria de desativar o seu gatinho?")

        if(confirmation) {
            apiCats.updateCat(user.token, id)
            .then( res => {
                getCatsList()
            })
            .catch( err =>{
                console.log(err.message)
            })
        }
    }

    return (
        <ContainerGato>
            <Name>{name}</Name>
            <ImagemGato src={photo_url}
            alt="carregando imagem..."></ImagemGato>
            <Caracteristicas>{characteristics}</Caracteristicas>
            <Contato>{contact_info}</Contato>
            <UpdateButton src={update} alt="atualizar gatinho" onClick={handleUpdate}/> 
        </ContainerGato>
    )
}

const Name = styled.div`
    width:100%;
    font-size:25px;
    font-weight: 700;
    color:black;
    align-self: flex-start;
    margin-left: 20px;
`
const ImagemGato = styled.img`
    width:640px
    `
const Caracteristicas = styled.div`
`
const Contato = styled.div`
`

const ContainerGato = styled.div`
    width :100%;
    height: 550px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px; 
    background-color: white;
    margin-top:30px
`

const UpdateButton = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 5px:
`