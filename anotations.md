## Create React-App

 * Ele já cria o projeto React pra gente. Assim não precisamos criar e configurar ele todo do 0, e sim focar no que importa, que é o
 React.

 ## Exports/Imports

 * export function App()         →  Quando a exportação é colocada desse jeito, quando formos importar, a gente não "consegue" atribuir outro 
                                    nome a ela quando for importar.
                                    import { App } from './App';

 * export default App;          → Já com o export default , podemos colocar qualquer nome quando for importar. Ex:
                                    import Banana from ./App;