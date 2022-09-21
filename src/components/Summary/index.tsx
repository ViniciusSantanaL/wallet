import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import totalIcon from '../../assets/total.svg'
import { Container } from './styles'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeIcon} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeIcon} alt="Saidas" />
                </header>
                <strong>- R$ 500,00</strong>
            </div>
            <div className="hightlight-backgroud">
                <header>
                    <p>Total</p>
                    <img src={totalIcon} alt="Entradas" />
                </header>
                <strong>R$ 5000,00</strong>
            </div>
        </Container>
    )
}
