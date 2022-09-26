import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/globla'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './hooks/useTransactions'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransacionModalOpen] = useState(false)

    function handleOpenNewTransactionModal() {
        setIsNewTransacionModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransacionModalOpen(false)
    }
    return (
        <TransactionsProvider>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />
            <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
            <GlobalStyle />
        </TransactionsProvider>
    )
}
