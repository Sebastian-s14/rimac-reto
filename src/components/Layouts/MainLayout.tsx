import { Outlet } from 'react-router-dom'

import { Header } from '@/components/Header'

export const MainLayout = () => {
    return (
        <div className="min-h-dvh flx flex-col px-6 md:px-[120px]">
            <Header />
            <main className="grid grid-cols-4 md:grid-cols-12 gap-x-4 md:gap-x-8">
                <Outlet />
            </main>
        </div>
    )
}
