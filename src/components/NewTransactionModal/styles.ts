import styled from 'styled-components'


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

    button {
         width: 100%;
         padding: 0 1.5rem;
         height: 4rem;
         margin-top: 1rem;

         border: none;
         border-radius: 0.25rem;

         background: var(--green);
         color: var(--shape);

         font-weight: 500;

         transition: filter 0.2s;

         &:hover {
            filter: brightness(0.9);
         }

         
      }
 `;



 export default Container;