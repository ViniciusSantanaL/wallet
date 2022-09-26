import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface Transaction {
    id: number
    title: string
    type: string
    category: string
    amount: number
    createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[]
    createTransaction: (transactionInput: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTrancsations] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions').then((response) => setTrancsations(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', { ...transactionInput, createdAt: new Date() })
        const { transaction } = response.data

        setTrancsations([...transactions, transaction])
    }

    return <TransactionsContext.Provider value={{ transactions, createTransaction }}>{children}</TransactionsContext.Provider>
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context
}
