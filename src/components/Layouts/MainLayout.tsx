import { Outlet } from 'react-router-dom'

import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

export const MainLayout = () => {
    return (
        <div className="min-h-dvh flx flex-col px-6 md:px-[120px]">
            <Header />
            <Container>
                <main className="col-span-4 md:col-span-12">
                    <Outlet />
                </main>
            </Container>
        </div>
    )
}
