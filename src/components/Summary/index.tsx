import { Container } from './styles';
import incomesImg from '../../assets/Entradas.svg'
import outcomesImg from '../../assets/Saídas.svg'
import totalImg from '../../assets/Total.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomesImg} alt="Entradas" />
                    
                </header>
                <strong>R$5000,00</strong>
            </div>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={outcomesImg} alt="Saídas" />
                    
                </header>
                <strong>-R$1000,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="Total" />
                    
                </header>
                <strong>R$4000,00</strong>
            </div>
        </Container>
    );
}