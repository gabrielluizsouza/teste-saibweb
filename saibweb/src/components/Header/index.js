import React from "react";
import { Container , Content} from "./styled"
import backButton from "../../assets/back.png"

export const Header = ({headerText, goTo}) => {

    const returnNoCancel = () => {
        
        const result = window.confirm("os dados não serão salvos tem certeza que deseja sair?")
        if(result){
         goTo()
        }
        
    }
    return(
        <>
            <Container>
                <Content>
                    {goTo ? <button onClick={()=>{returnNoCancel()}}>  <img src={backButton} /></button> : ""}
                  
                    <h2>{headerText}</h2>
                </Content>
            </Container>
        </>
    )
}