import React from "react";
import { Header } from "../../components/Header";
import { useForm } from "../../hooks/useForm";
import { Container, Content,ContainerButton} from "./styled"
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";


export const EditUserPage = () => {
    const headerText = "Atualizar Registro"
    const navigate = useNavigate()
    const {id} = useParams()

    const [form, onChange, setForm] = useForm({nome: "", endereco: "", cidade: "", UF: "", telefone:""})

  
   
    const editUser = async(body)=> {
        const {data} = await api.put("/cliente", body)
        
        alert(`${data.message}`)
        
        goToHome(navigate)

    }
   console.log(navigate)
   
    const handleClick = (e) => {
        e.preventDefault()
        const body = {
            TECL_ID: id,
            TECL_NOME: form.nome,
            TECL_ENDERECO: form.endereco,
            TECL_CIDADE: form.cidade,
            TECL_UF: form.UF,
            TECL_TELEFONE: form.telefone
        } 
        editUser(body)
        setForm({nome: "", endereco: "", cidade: "", UF: "", telefone:""})

    }
   
    
    return(
        <>
        <Header headerText={headerText} goTo={()=> goToHome(navigate)}/>
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