import { User } from '@/types/user'

import axios from 'axios'

export const getUser = async () =>
    axios<User>({
        url: `${import.meta.env.VITE_API_URL}/user.json`,
    })
