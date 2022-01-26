import  Container, { RadioBox, TransactionTypeModal }  from './styles'
import Modal from 'react-modal';
import closeImg from '../../assets/Vector.svg'
import incomesImg from '../../assets/Entradas.svg'
import outcomesImg from '../../assets/Saídas.svg'

import { FormEvent, useState } from 'react'


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}



export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {

    const [type, setType] = useState('deposit');

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');



    function handleCreateNewtransaction(event: FormEvent) {
        event.preventDefault();

        console.log(
            type,
            title,
            value,
            category
        )
    }   

    return (
        
            <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}

            overlayClassName="react-modal-overlay"
            className="react-modal-content"

            ariaHideApp={false}
            
            >

                <button 
                type="button" 
                className="react-modal-close"
                onClick={onRequestClose}
                >
                    <img src={closeImg} alt="Fechar Modal" />
                </button>
                <Container onSubmit={handleCreateNewtransaction}>
                    <h2>Cadastrar Transação</h2>

                    <input 
                    type="text" 
                    placeholder="Título" 
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    />

                    <input 
                    type="number" 
                    placeholder="Valor" 
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                    />

                        <TransactionTypeModal>
                            <RadioBox
                            type="button"
                            onClick={() => { setType('deposit') }}
                            isActive={type == 'deposit'}
                            activeColor="green"
                            >

                                <img src={incomesImg} alt="Entrada" />
                                <span>Entrada</span>

                            </RadioBox>

                            <RadioBox 
                            type="button"
                            onClick={() => { setType('withdraw') }}
                            isActive={type == 'withdraw'}
                            activeColor="red"
                            >

                                <img src={outcomesImg} alt="Saída" />
                                <span>Saída</span>

                            </RadioBox>
                        </TransactionTypeModal>

                    <input 
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    />

                    <button type="submit"> Cadastrar</button>
                </Container>

            </Modal>
        
    );
}