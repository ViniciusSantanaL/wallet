import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions').then((response) => console.log(response.data))
    }, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Websites</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>21/09/2022</td>
                    </tr>
                    <tr>
                        <td>Hamburguer</td>
                        <td className="withdraw">- R$ 65.00</td>
                        <td>Alimentacao</td>
                        <td>21/09/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel do apartamento</td>
                        <td className="withdraw">- R$ 1.500</td>
                        <td>Casa</td>
                        <td>12/03/2022</td>
                    </tr>
                    <tr>
                        <td>Computador</td>
                        <td className="deposit">R$ 6.500</td>
                        <td>Venda</td>
                        <td>15/05/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
