import { Container, Content } from './styles'
import logoImg from '../../assets/Logo.svg'
import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';


interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}




export function Header({ onOpenNewTransactionModal }:HeaderProps) {
    return (
        
        <Container>
            <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
            </Content>
        </Container>
        
    );
}