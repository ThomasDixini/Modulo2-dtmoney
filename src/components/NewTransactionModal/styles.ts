import styled from 'styled-components'
import { darken } from 'polished'


 const Container = styled.form`
   h2 {
      color: var(--title-colors);

      margin-bottom: 2rem;
   }

   input {
      width: 100%;

      padding: 0 1.5rem;
      height: 4rem;
      border: 1px solid #d7d7d7;
      border-radius: 0.25rem;
      background-color: #e7e9ee;

      &::placeholder {
         color: var(--text-body);
      }

      & + input {
         margin-top: 1rem;
      }

   }

    button[type="submit"] {
         width: 100%;
         padding: 0 1.5rem;
         height: 4rem;
         margin-top: 1rem;

         border: none;
         border-radius: 0.25rem;

         background: var(--green);
         color: var(--shape);

         font-weight: 500;
         font-size: 1rem;

         transition: filter 0.2s;

         &:hover {
            filter: brightness(0.9);
         }

         
      }
 `;

 

export const TransactionTypeModal = styled.div`
   margin: 1rem 0;
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 0.5rem;

  

`;

interface RadioBoxProps {
   isActive: boolean;
}

export const RadioBox = styled.button<RadioBoxProps>`

      height: 4rem;
      border: 1px solid #d7d7d7;
      border-radius: 0.25rem;

      background: ${(props) => props.isActive ? '#ccc' : '#eee'};

      display: flex;
      justify-content:center;
      align-items: center;

      &:hover {
         border-color: ${darken(0.1, '#d7d7d7')} 
      }

      img {
         width: 20px;
         height: 20px;
      }

      span {
         display: inline-block;
         margin-left: 1rem;
         font-size: 1rem;
         color: var(--title-colors)
      }
      
      `


 export default Container;