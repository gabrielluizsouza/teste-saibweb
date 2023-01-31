import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     
     * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
 
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  :root{
    font-size: 62.5%;
    --salmao: #F2A2A9;
    --roxo: #948EBF;
    --cinza: #F2F2F2;
    --preto: #0D0D0D

}
  background-color: var(--cinza);
     
`