import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import totalIcon from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './styles'

export function Summary() {
    const { transactions } = useTransactions()

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'deposit') {
                acc.deposits += transaction.amount
                acc.total += transaction.amount
            } else {
                acc.withdraws += transaction.amount
                acc.total -= transaction.amount
            }

            return acc
        },
        {
            deposits: 0,
            withdraws: 0,
            total: 0
        }
    )
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeIcon} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeIcon} alt="Saidas" />
                </header>
                <strong>
                    -{' '}
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="hightlight-backgroud">
                <header>
                    <p>Total</p>
                    <img src={totalIcon} alt="Entradas" />
                </header>
                <strong>
                    {' '}
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}
