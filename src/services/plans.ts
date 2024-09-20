import axios from 'axios'

import { PlansResponse } from '@/types/plans'

export const getPlans = async () =>
    axios<PlansResponse>({
        url: `${import.meta.env.VITE_API_URL}/plans.json`,
    })
