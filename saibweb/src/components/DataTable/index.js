import React, {useEffect, useState} from "react";
import { Container } from "./styled"
import addImage from "../../assets/plus.png"
import deleteImage from "../../assets/minus.png"
import editImage from "../../assets/edit.png"
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { goToAddUserPage, goToEditUserPage } from "../../routes/coordinator";


export const DataTable = () => {
    
    const [dataUser, setDataUser] = useState([])
    const navigate = useNavigate()
   

   const getUser = async() => {
    const {data} = await api.get("/clientes");
    setDataUser(data.data)
   }

    useEffect ( ()=>{
        getUser()
    },[])
      
    
    const corfirmDeleteUser = (idUser)=> {
       const result = window.confirm("tem certeza que deseja excluir?")
       if(result){
         deleteUser(idUser) 
          
       }
   
    }
    
    
    
    const deleteUser = async(idUser) => {
        const id = idUser
        const {data} = await api.delete(`/cliente/${id}`)
        alert(`${data.message}`)
        getUser()
    }
   
    
    
   
    return(
        <>
            <Container>
              
                   <table>
                     <thead>
                        <tr>
                             <th>
                                <button>
                                    <img src={addImage} alt="adicionar" onClick={() => goToAddUserPage(navigate)}/>
                                </button>
                             </th>
                             <th>Nome</th>
                             <th>Endereço</th>
                             <th>Cidade</th>
                             <th>UF</th>
                             <th>Telefone</th>
                             <th>E-mail</th>
                         </tr>
                     </thead>
                     <tbody>
            {dataUser && dataUser.map((user) => (
                  <tr key={user.TECL_ID}>
                  <td>
                     <button>
                        <img src={deleteImage} alt="excluir" onClick={()=>{corfirmDeleteUser(user.TECL_ID)}}/>
                     </button>
                     <button>
                        <img src={editImage} alt="editar" onClick={()=> goToEditUserPage(navigate, user.TECL_ID )}/>
                     </button>
                  </td>
                  <td>{user.TECL_NOME}</td>
                  <td>{user.TECL_ENDERECO}</td>
                  <td>{user.TECL_CIDADE}</td>
                  <td>{user.TECL_UF}</td>
                  <td>{user.TECL_TELEFONE}</td>
                  <td>-</td>
             </tr>
            ))}
                     </tbody>
                   </table>
            </Container>
        </>
    )
}