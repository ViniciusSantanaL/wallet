import logoIcon from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoIcon} alt="Logo" />
                <button onClick={onOpenNewTransactionModal}>Nova transferência</button>
            </Content>
        </Container>
    )
}
