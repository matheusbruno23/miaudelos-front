import { StyledInput, Container, Logo, BotaoCadastro , StyledLink} from "../LoginPage/LoginPage"
import StyledForm from "../../components/StyledForm"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import apiAuth from "../../services/apiAuth"

export default function SignUpPage(){

    const [form, setForm] = useState({name:"", cpf:"" , email:"" , phone:"" , password:"" , confirmPassword:""})
    const navigate = useNavigate()

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value})
     }

    function handleSignUp(e) {
        e.preventDefault()

        apiAuth.signup(form).then(res => {
            navigate("/")
        }).catch( err => {
            console.log(err.message)
        })

    }

    return (
        <Container>
            <Logo src="https://s2.glbimg.com/cNcGRzTnqH-uXWP2RF66__GneE8=/0x0:439x273/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/U/C/V9PkuMSEu3hQDv1bzUmg/screenshot-201.png" 
            alt="Miaudelos"></Logo>
            <StyledForm onSubmit={handleSignUp}>
                <StyledInput
                    name="name"
                    placeholder="Nome"
                    value={form.name}
                    onChange={handleForm}
                    required
                />
                <StyledInput
                    name="cpf"
                    placeholder="Cpf"
                    value={form.cpf}
                    onChange={handleForm}
                    required
                />
                <StyledInput
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    value={form.email}
                    onChange={handleForm}
                    required
                />
                <StyledInput
                    name="phone"
                    placeholder="Telefone"
                    value={form.phone}
                    onChange={handleForm}
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
                <StyledInput
                    name="confirmPassword"
                    placeholder="Confirme a Senha"
                    type="password"
                    value={form.confirmPassword}
                    onChange={handleForm}
                    required
                />
                <BotaoCadastro type="submit">Cadastrar</BotaoCadastro>
            </StyledForm>
            <StyledLink to="/">
                Já possui uma conta? Logue agora!
                </StyledLink>
        </Container>

    )
}