import  Container  from '../NewTransactionModal/styles'
import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}



export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    return (
        <Container>
            <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            >
                Cadastrar Transação

            </Modal>
        </Container>
    );
}