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
                index: true,
                element: <Home />,
            },
            {
                path: '/planes',
                element: <Plans />,
            },
            {
                path: '/resumen',
                element: <Summary />,
            },
        ],
    },
])

export const AppRouter = () => <RouterProvider router={router} />
