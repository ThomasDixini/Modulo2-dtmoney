import { Container } from './styles';
import incomesImg from '../../assets/Entradas.svg'
import outcomesImg from '../../assets/Saídas.svg'
import totalImg from '../../assets/Total.svg'
import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {

    const { transactions } = useContext(TransactionsContext)


    const summaryDeposits = transactions.reduce((acc, transaction) => {
        if(transaction.type == 'deposit') {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;

            console.log(transactions)
        }

        return acc;
    }, { 
        deposit: 0,
        withdraw: 0,
        total: 0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomesImg} alt="Entradas" />
                    
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(summaryDeposits.deposit) }</strong>
            </div>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={outcomesImg} alt="Saídas" />
                    
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(summaryDeposits.withdraw)  }</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="Total" />
                    
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(summaryDeposits.total)  }</strong>
            </div>
        </Container>
    );
}