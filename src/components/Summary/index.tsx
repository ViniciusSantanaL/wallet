import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import totalIcon from '../../assets/total.svg'

export function Summary() {
    return (
        <section>
            <div>
                <p>Entradas</p>
                <img src={incomeIcon} alt="Entradas" />
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <p>Saidas</p>
                <img src={outcomeIcon} alt="Saidas" />
                <strong>R$ 500,00</strong>
            </div>
            <div>
                <p>Total</p>
                <img src={totalIcon} alt="Entradas" />
                <strong>R$ 5000,00</strong>
            </div>
        </section>
    )
}
