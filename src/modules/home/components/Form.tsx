import { Button } from '@/components/Button'

export const Form = () => {
    return (
        <form className="flex flex-col gap-6 max-w-[350px]">
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
            <Button
                className="text-lg md:text-xl h-14 md:h-16 w-full md:max-w-[183px]"
                type="submit"
            >
                Cotiza aquí
            </Button>
        </form>
    )
}
