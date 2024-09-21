import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Stepper } from '@/components/Stepper'
// import { Container } from '@/components/Container'

export const MainLayout = () => {
    return (
        <>
            <div className="min-h-dvh flex flex-col ">
                <Header />
                {/* <Container>
                    <main className="col-span-4 md:col-span-12 flex-grow px-6 md:px-12 lg:px-[120px]">
                        <Outlet />
                    </main>
                </Container> */}
                <main className="px-6 md:px-12 lg:px-[120px] flex-grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export const BasicLayout = () => {
    return (
        <div className="min-h-dvh flex flex-col">
            <Header />
            <Stepper />
            <main className="px-6 md:px-12 lg:px-[120px] flex-grow">
                <Outlet />
            </main>
        </div>
    )
}
