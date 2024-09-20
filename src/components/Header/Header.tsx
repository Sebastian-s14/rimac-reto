export const Header = () => {
    return (
        <header className="h-14 grid grid-cols-4 md:grid-cols-12 gap-x-4 md:gap-x-8">
            <div className="flex justify-between w-full col-span-4 md:col-span-12 items-center">
                <div>
                    <img src="/logo.png" alt="logo" />
                </div>
                <div className="flex gap-x-3 items-center">
                    <span className="text-sm font-semibold hidden md:block">
                        ¡Compra por este medio!
                    </span>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        translate="no"
                        href="tel:014116006"
                        className="font-bold md:text-lg"
                    >
                        (01) 411 6006
                    </a>
                </div>
            </div>
        </header>
    )
}
