import { Link, useNavigate} from "react-router-dom";
import styled from "styled-components"
import StyledForm from "../../components/StyledForm";
import apiAuth from "../../services/apiAuth"
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function LoginPage(){
    const navigate = useNavigate()
    const [form, setForm] = useState({email: "", password: ""})
    const {user,setUser} = useContext(UserContext)

    function handleForm(e){
       setForm({...form, [e.target.name]: e.target.value})
    }

    function handleLogin(e){
        e.preventDefault()

        apiAuth.login(form)
            .then( res => {
                const {token} = res.data
                setUser({token})
                navigate("/cats")
            })
            .catch(err => {
                console.log(err.response.data)
            })
        
    }

    return (

        <Container>
            <Logo src="https://s2.glbimg.com/cNcGRzTnqH-uXWP2RF66__GneE8=/0x0:439x273/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/U/C/V9PkuMSEu3hQDv1bzUmg/screenshot-201.png" 
            alt="Miaudelos"></Logo>
            <StyledForm onSubmit={handleLogin}>
                <StyledInput 
                placeholder="E-mail"
                name="email" 
                value={form.email}
                onChange={handleForm}
                type="email"
                required
                />
                <StyledInput 
                name="password"
                placeholder="Senha" 
                type="password"
                value={form.password}
                onChange={handleForm}
                required
                />
                <BotaoCadastro type="submit">Login</BotaoCadastro>
            </StyledForm>
            <StyledLink to="/signup">Não possui uma conta? Registre-se agora!</StyledLink>
        </Container>

    )
}

export const StyledLink = styled(Link)`
    font-size:14px;
    color: black;
    text-decoration: underline;
    margin-bottom: 10px;
`

export const BotaoCadastro= styled.button`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid black;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: white;
`

export const Logo = styled.img`
    width:100%;
    background-color:white;
`

export const Container = styled.div`
    width :100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    padding: 100px 0px 0px 0px;
`

export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px ;
    margin-top: 10px
`
