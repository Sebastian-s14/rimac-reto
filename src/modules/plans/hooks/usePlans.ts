import { useQuery } from '@tanstack/react-query'

import { getPlans } from '@/services/plans'
import { getUser } from '@/services/users'
import { calculateAge } from '@/utils/calculate-age'
import { highlightPhrases } from '@/utils/highlight-keywords'
import { useSummaryStore } from '@/store/store'
import { useEffect } from 'react'

export const usePlans = () => {
    const summaryData = useSummaryStore((state) => state.summaryData)
    const updateSummaryData = useSummaryStore(
        (state) => state.updateSummaryData
    )

    const { data: userData, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
    })

    const { data: dataPlans } = useQuery({
        queryKey: ['plans'],
        queryFn: getPlans,
        enabled: summaryData.planType !== 'none',
    })

    const userAge = calculateAge(userData?.data.birthDay ?? '')

    const filterPlans = dataPlans?.data.list
        .filter((plan) => plan.age >= userAge)
        .map((plan) => ({
            ...plan,
            description: highlightPhrases(plan.description),
        }))

    const hasDiscount: boolean = summaryData.planType === 'other'

    useEffect(() => {
        if (userData?.data) {
            updateSummaryData({
                userName: `${userData.data.name} ${userData.data.lastName}`,
            })
        }
    }, [updateSummaryData, userData?.data])

    return {
        userName: userData?.data.name,
        isLoading,
        filterPlans,
        hasDiscount,
        selectedPlan: summaryData.planType,
        setSelectedPlan: updateSummaryData,
    }
}
