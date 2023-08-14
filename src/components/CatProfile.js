import styled from "styled-components"


export default function CatProfile(){
    return (
        <ContainerGato>
            <Name>Bixano</Name>
            <ImagemGato src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4bl8u1VvQb83bVxraq-SmAyqdAu_iuMiDf4RqzrA&s" 
            alt="carregando imagem..."></ImagemGato>
            <Caracteristicas>Come e dorme</Caracteristicas>
            <Contato>21999999999</Contato>
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
