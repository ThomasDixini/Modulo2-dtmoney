import { Container } from "./styles";



export function TransactionTable() {
    return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Preço</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td >Desenvolvimento Web</td>
                    <td className="deposit">R$5000,00</td>
                    <td>Venda</td>
                    <td>16/01/2022</td>
                </tr>
                <tr>
                    <td >Aluguel</td>
                    <td className="withdraw">-R$1000,00</td>
                    <td>Venda</td>
                    <td>16/01/2022</td>
                </tr>
            </tbody>
        </table>
    </Container>
        
    );
}