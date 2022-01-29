import { Container } from "./styles";
import { api } from '../../services/api';
import { useContext, useEffect, useState } from "react";
import { TransactionsContext} from "../../TransactionsContext";



export function TransactionTable() {

    const { transactions } = useContext(TransactionsContext)
    

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
                {transactions.map(transaction => {
                    return (
                        <tr key={transaction.id}>
                            <td >{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR',{
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                                </td>
                            <td>{transaction.category}</td>
                            <td>
                            {new Intl.DateTimeFormat('pt-BR',).format(new Date(transaction.createdAt))}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </Container>
        
    );
}