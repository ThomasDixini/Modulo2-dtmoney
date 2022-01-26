import  Container, { TransactionTypeModal }  from './styles'
import Modal from 'react-modal';
import closeImg from '../../assets/Vector.svg'
import incomesImg from '../../assets/Entradas.svg'
import outcomesImg from '../../assets/Saídas.svg'


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}



export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    return (
        
            <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}

            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            
            >

                <button 
                type="button" 
                className="react-modal-close"
                onClick={onRequestClose}
                >
                    <img src={closeImg} alt="Fechar Modal" />
                </button>
                <Container>
                    <h2>Cadastrar Transação</h2>

                    <input type="text" placeholder="Título" />
                    <input type="number" placeholder="Valor" />

                        <TransactionTypeModal>
                            <button 
                            type="button">

                                <img src={incomesImg} alt="Entrada" />
                                <span>Entrada</span>

                            </button>

                            <button 
                            type="button">

                                <img src={outcomesImg} alt="Saída" />
                                <span>Saída</span>

                            </button>
                        </TransactionTypeModal>

                    <input type="text" placeholder="Categoria" />

                    <button type="submit"> Cadastrar</button>
                </Container>

            </Modal>
        
    );
}