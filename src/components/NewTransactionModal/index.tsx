import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles'
import closeModalIcon from '../../assets/close.svg'
import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions()
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState<number>(0)
    const [category, setCategory] = useState('')

    const [type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()
        await createTransaction({ title, amount, category, type })
        onRequestClose()
        setTitle('')
        setAmount(0)
        setCategory('')
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            <Container onSubmit={handleCreateNewTransaction}>
                <button type="button" className="react-modal-close" onClick={onRequestClose}>
                    <img src={closeModalIcon} alt="Fechar Modal" />
                </button>
                <h2>Cadastrar Transacao</h2>

                <input placeholder="Titulo" value={title} onChange={(event) => setTitle(event.target.value)} />

                <input placeholder="Valor" value={amount} type="number" onChange={(event) => setAmount(Number(event.target.value))} />

                <TransactionTypeContainer>
                    <RadioBox type="button" isActive={type === 'deposit'} activeColor="green" onClick={() => setType('deposit')}>
                        <img src={incomeIcon} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type="button" isActive={type === 'withdraw'} activeColor="red" onClick={() => setType('withdraw')}>
                        <img src={outcomeIcon} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input placeholder="Categoria" value={category} onChange={(event) => setCategory(event.target.value)} />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}
