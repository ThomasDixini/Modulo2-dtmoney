import  Container  from './styles'
import Modal from 'react-modal';
import closeImg from '../../assets/Vector.svg'


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
                    <img src={closeImg} alt="" />
                </button>
                <Container>
                    <h2>Cadastrar Transação</h2>

                    <input type="text" placeholder="Título" />
                    <input type="number" placeholder="Valor" />
                    <input type="text" placeholder="Categoria" />

                    <button type="submit"> Cadastrar</button>
                </Container>

            </Modal>
        
    );
}