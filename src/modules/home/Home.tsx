import { Button } from '@/components/Button'

export const Home = () => {
    return (
        <div className="col-span-4 md:col-span-12">
            <div className="flex justify-between col-span-4 md:col-span-12 md:hidden">
                <div className="self-center">
                    <h1 className="font-bold text-xs">Seguro salud flexible</h1>
                    <h2 className="text-[28px] font-bold leading-9">
                        Creado para ti y tu familia
                    </h2>
                </div>
                <div>
                    <img
                        src="/image-home-mobile.png"
                        alt="image home mobile"
                        className="rounded-lg w-full h-auto min-h-40 min-w-32 block md:hidden"
                    />
                    {/* <img
                        src="/image-home-desktop.png"
                        alt="image home desktop"
                        className="rounded-lg w-full h-auto min-h-[560px] max-w-[480px] hidden md:block"
                    /> */}
                </div>
            </div>
            <Separator />
            <Form />
        </div>
    )
}

export const Separator = () => {
    return <div className="h-[1px] bg-border my-6 md:hidden"></div>
}

export const Form = () => {
    return (
        <div className="flex flex-col gap-6 max-w-[350px]">
            <p className="text-primary font-semibold leading-5 text-sm tracking-[.2px]">
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría, 100% online.
            </p>
            <div className="flex flex-col gap-y-4 border-blue-500 border">
                <select>
                    <option value="DNI">DNI</option>
                    <option value="CE">CE</option>
                </select>
                <input type="dni" className="border-red-700 border" />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                    <input
                        type="checkbox"
                        name="privacy-policy"
                        id="privacy-policy"
                        className="accent-primary"
                    />
                    <label
                        htmlFor="privacy-policy"
                        className="text-primary font-normal text-sm"
                    >
                        Acepto la Política de Privacidad
                    </label>
                </div>
                <div className="flex gap-3">
                    <input
                        type="checkbox"
                        name="marketing-policy"
                        id="marketing-policy"
                        className="accent-primary"
                    />
                    <label
                        htmlFor="marketing-policy"
                        className="text-primary font-normal text-sm"
                    >
                        Acepto la Política Comunicaciones Comerciales
                    </label>
                </div>
                <div>
                    <a
                        href="https://www.rimac.com/terminos-y-condiciones"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="text-primary font-semibold text-xs underline"
                    >
                        Aplican Términos y Condiciones.
                    </a>
                </div>
            </div>
            <div className="self-center">
                <Button
                    variant="primary"
                    className="text-lg md:text-xl h-14 md:h-16"
                >
                    Cotiza aquí
                </Button>
            </div>
        </div>
    )
}
