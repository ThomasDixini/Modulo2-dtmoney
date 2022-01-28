
import styled from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header/index';
import { GlobalStyle } from './styles/global'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal/NewTransactionModal';
import { TransactionsContext } from './TransactionsContext';






export function App() {

  const [isNewTransactionOpenModal, setIsNewTransactionOpenModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpenModal(true)
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpenModal(false)
  }



  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={isNewTransactionOpenModal} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </TransactionsContext.Provider>
  );
}


