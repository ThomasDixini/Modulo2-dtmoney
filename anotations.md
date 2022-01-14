## Create React-App

 * Ele já cria o projeto React pra gente. Assim não precisamos criar e configurar ele todo do 0, e sim focar no que importa, que é o
 React.

 ## Exports/Imports

 * export function App()         →  Quando a exportação é colocada desse jeito, quando formos importar, a gente não "consegue" atribuir outro 
                                    nome a ela quando for importar.
                                    import { App } from './App';

 * export default App;          → Já com o export default , podemos colocar qualquer nome quando for importar. Ex:
                                    import Banana from ./App;



## Styled components

 * A biblioteca styled components é uma biblioteca que deixa a gente estilizar um componente do React em seu próprio arquivo.
   E isso uma das vantagens, é que essa estilização fica apenas no escopo do componente e assim não gere conflito nos arquivos css.

   Exemplo de como é usado:

   const Title = styled.h1`             → Depois do styled. vem sempre a tag html e depois a crase (styled.{tag}``)
   
   color: #999;
   font-size: 2rem;
   
   `