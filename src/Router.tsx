import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from '@/modules/home/Home'
import { Plans } from '@/modules/plans/Plans'
import { Summary } from '@/modules/summary/Summary'
import { MainLayout } from './components/Layouts/MainLayout'

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/plans',
                element: <Plans />,
            },
            {
                path: '/summary',
                element: <Summary />,
            },
        ],
    },
])

export const AppRouter = () => <RouterProvider router={router} />
