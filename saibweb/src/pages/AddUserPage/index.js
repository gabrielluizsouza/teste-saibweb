import React from "react";
import { Header } from "../../components/Header";
import { useForm } from "../../hooks/useForm";
import { Container, Content,ContainerButton} from "./styled"
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";

export const AddUserPage = () => {
    const navigate = useNavigate()
    const [form, onChange,setForm] = useForm({nome: "", endereco: "", cidade: "", UF: "", telefone:""})
    
    const headerText = "Novo Registro"
    
    const createUser = async(body)=> {
        const response = await api.post("/cliente", body)
        
    }
   
   
    const handleClick = (e) => {
        e.preventDefault()
        const body = {
            TECL_NOME: form.nome,
            TECL_ENDERECO: form.endereco,
            TECL_CIDADE: form.cidade,
            TECL_UF: form.UF,
            TECL_TELEFONE: form.telefone
        } 
        createUser(body)
        setForm({nome: "", endereco: "", cidade: "", UF: "", telefone:""})

    }

    return(
        <>
        <Header headerText = {headerText} goTo={()=> goToHome(navigate)}/>
        <Container>
            <form onSubmit={handleClick}>
                <Content>
                <label>
                    Nome
                    <input 
                    name="nome"
                    value={form.nome}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Endereço
                    <input
                    name="endereco"
                    value={form.endereco}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Cidade
                    <input
                    name="cidade"
                    value={form.cidade}
                    onChange={onChange}
                    />
                </label>
                <label>
                    UF
                    <input
                    name="UF"
                    value={form.UF}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Telefone
                    <input
                    name="telefone"
                    value={form.telefone}
                    onChange={onChange}
                    />
                </label>
                </Content>

               <ContainerButton>
                    <button>Salvar</button>
                    <button onClick={()=> goToHome(navigate)}>Cancelar</button>
               </ContainerButton>
            </form>
                
          </Container>

        </>
    )
}