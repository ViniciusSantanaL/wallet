import logoIcon from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoIcon} alt="Logo" />
                <button>Nova transferência</button>
            </Content>
        </Container>
    )
}
