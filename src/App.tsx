
import styled from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header/index';
import { GlobalStyle } from './styles/global'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal/NewTransactionModal';
import { TransactionsProvider } from './components/hooks/useTransactions';






export function App() {

  const [isNewTransactionOpenModal, setIsNewTransactionOpenModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpenModal(true)
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpenModal(false)
  }



  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={isNewTransactionOpenModal} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </TransactionsProvider>
  );
}


