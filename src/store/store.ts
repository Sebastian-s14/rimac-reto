import { create } from 'zustand'

interface SummaryData {
    userName: string
    document: string
    cellphone: string
    planType: 'personal' | 'other' | 'none'
    planName: string
    price: number
}

interface SummaryState {
    summaryData: SummaryData
    updateSummaryData: (data: Partial<SummaryData>) => void
}

export const useSummaryStore = create<SummaryState>()((set) => ({
    summaryData: {
        userName: '',
        document: '',
        cellphone: '',
        planType: 'none',
        planName: '',
        price: 0,
    },
    updateSummaryData: (data: Partial<SummaryData>) =>
        set((state) => ({ summaryData: { ...state.summaryData, ...data } })),
}))
