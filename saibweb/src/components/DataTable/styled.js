import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    padding: 1rem 2rem 1rem;
    margin: 0 auto;
    
    table{
        width: 100%;
        border-collapse:collapse;
        text-align: left;

        thead{
            background-color: var(--roxo);
            tr{
                height: 1rem;
            }
            th{
               
                color: var(--preto);
                button{
                    border: none;
                    background-color: transparent;
                }
                &:nth-of-type(1){
                 
                   width: 10%;

                }
                &:nth-of-type(2){
                 
                 width: 15%;

                }
                &:nth-of-type(3){
                 
                 width: 15%;

                }
                &:nth-of-type(4){
                 
                 width: 15%;

                }
                &:nth-of-type(5){
                 
                 width: 5%;

                }
                &:nth-of-type(6){
                 
                 width: 15%;

                }
                &:nth-of-type(7){
                 
                 width: 35%;

                }
            }
        }
        button{
        background-color: transparent;
        border: none;
        padding-left: .5rem;
        }
        tr{
            border: 1px solid var(--roxo);
            font-weight: bold; 
        }
      

    
        
    
    }
`