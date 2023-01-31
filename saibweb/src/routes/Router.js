import { BrowserRouter, Routes, Route} from "react-router-dom"
import {HomePage} from "../pages/HomePage"
import {EditUserPage} from "../pages/EditUserPage"
import {AddUserPage} from "../pages/AddUserPage"

 export const Router = () => {
  
    return(
    <BrowserRouter>

        <Routes>

            <Route index path="/" element={<HomePage/>} />
            <Route path="/editarUsuario/:id"element={<EditUserPage/>}/>
            <Route path="/criarUsuario"element={<AddUserPage/>}/>
            <Route path="*" element={<p>error</p>}/>
            
        </Routes>

    </BrowserRouter>
    )
}

