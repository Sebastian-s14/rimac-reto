import { Separator } from '@/components/Separator'

export const Footer = () => {
    return (
        <footer className="bg-primary h-[152px] md:h-[106px] z-20">
            <div className="py-8 flex justify-between items-center md:px-[120px] px-6 flex-col md:flex-row bg-primary">
                <img
                    src="/logo-white.png"
                    alt="logo"
                    className="w-auto h-[42px] hidden md:block"
                />
                <img
                    src="/logo-white-mobile.png"
                    alt="logo"
                    className="w-auto h-5 block md:hidden"
                />
                <Separator className="my-6 w-full" />
                <p className="text-white font-bold text-xs leading-4 md:text-sm">
                    © 2023 RIMAC Seguros y Reaseguros.
                </p>
            </div>
        </footer>
    )
}
