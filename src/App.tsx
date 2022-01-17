
import styled from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header/index';
import { GlobalStyle } from './styles/global'
import  Modal  from 'react-modal'
import { useState } from 'react';






export function App() {

  const [isNewTransactionOpenModal, setIsNewTransactionOpenModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpenModal(true)
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpenModal(false)
  }



  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <Modal
      isOpen={isNewTransactionOpenModal}
      onRequestClose={handleCloseNewTransactionModal}
      >
        Cadastrar Transação

      </Modal>
      <GlobalStyle/>
    </>
  );
}


