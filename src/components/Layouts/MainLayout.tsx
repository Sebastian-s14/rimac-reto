import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Stepper } from '@/components/Stepper'
// import { Container } from '@/components/Container'

export const MainLayout = () => {
    return (
        <>
            <div className="min-h-dvh flex flex-col relative mx-auto">
                <Header />
                {/* <Container>
                    <main className="col-span-4 md:col-span-12 flex-grow px-6 md:px-12 lg:px-[120px]">
                        <Outlet />
                    </main>
                </Container> */}
                <div className="absolute bottom-0 left-0  h-full z-0 hidden md:block">
                    <img
                        src="/blur-purple-desktop.png"
                        alt="blur purple design"
                        className='h-full w-full max-w-[432px]'
                    />
                </div>
                <div className="absolute bottom-0 left-0  h-full z-0 block md:hidden">
                    <img
                        src="/blur-purple-mobile.png"
                        alt="blur purple design"
                        className='h-full w-full max-w-[432px]'
                    />
                </div>
                <div className="absolute  right-0 h-full z-0 hidden md:block">
                    <img
                        src="/blur-asset-green-desktop.png"
                        alt="blur green design"
                        className='h-full w-full max-w-[432px]'
                    />
                </div>
                <div className="absolute top-0 right-0 h-full z-0 block md:hidden">
                    <img
                        src="/blur-aqua-mobile.png"
                        alt="blur green design"
                        // className='h-full w-full max-w-[432px]'
                    />
                </div>
                <main className="px-6 md:px-12 lg:px-[120px] flex-grow relative z-20 container mx-auto">
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
