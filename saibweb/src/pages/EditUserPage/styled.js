import styled from "styled-components";

export const Container = styled.div`
    
    padding: 5rem 2rem 1rem;
    max-width: 1120px;
    margin: 0 auto;

    label{
            display: inline-flex;
            flex-direction: column;
        }  
  
`
export const ContainerButton= styled.div`
            display: flex;
            justify-content: flex-end;
        
            button{
                width: 12rem;
                height: 3rem;
                background-color: var(--roxo);
                border: none;
                color: white;
                border-radius: 2px;
                margin: 5rem 0 0 2rem;  
             }    
        
        
` 
export const Content = styled.div`
        border: 1px solid  rgba(19, 24, 25, 0.3);
        padding: 3rem 2rem;
        border-radius: 20px;
        display: flex;
        flex-wrap: wrap;
        

        label{
            padding: 0 .5rem;
            margin: 2rem 0;
            &:nth-of-type(1){
            
                width: 55%;

            }
            &:nth-of-type(2){
                 
                width: 45%;
                
             }
             &:nth-of-type(3){
                 
                 width: 50%;
                 
              }
              &:nth-of-type(4){
                 
                 width: 5rem;
                 
              }
              &:nth-of-type(5){
                 
                 width: 45%;
                 
              }
              input{
                margin: .5rem 0;
                opacity: 0.3;
              }
        }
        
`