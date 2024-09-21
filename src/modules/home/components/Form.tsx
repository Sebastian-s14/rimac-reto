import { Button } from '@/components/Button'
import { useQuoteForm } from '@/modules/home/hooks/usuQuoteForm'
import { cn } from '@/utils'

export const Form = () => {
    const {
        formState: { errors },
        onSubmit,
        register,
        handleSubmit,
    } = useQuoteForm()

    return (
        <form
            className="flex flex-col gap-6 md:max-w-[350px] mb-16 w-full"
            onSubmit={handleSubmit(onSubmit)}
        >
            <p className="text-primary font-semibold leading-5 text-sm tracking-[.2px]">
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría, 100% online.
            </p>
            <div className="flex flex-col gap-y-4">
                <div>
                    <div className="flex w-full">
                        <select className="border-placeholder border h-[56px] rounded-l-lg w-[140px] text-center">
                            <option value="DNI">DNI</option>
                            <option value="CE">CE</option>
                        </select>
                        <div className="relative w-full">
                            <label
                                htmlFor="document"
                                className="absolute px-4 text-title text-xs pt-1 leading-4"
                            >
                                Nro. de documento
                            </label>
                            <input
                                {...register('document')}
                                type="document"
                                className={cn(
                                    'border-placeholder border h-[56px] w-full rounded-r-lg px-4 py-2',
                                    errors.document?.message &&
                                        'border-red-500 outline-red-500'
                                )}
                            />
                        </div>
                    </div>
                    <ErrorMessage errorMessage={errors.document?.message} />
                </div>
                <div className="relative w-full">
                    <label
                        htmlFor="cellphone"
                        className="absolute px-4 text-title text-xs pt-1 leading-4"
                    >
                        Celular
                    </label>
                    <input
                        {...register('cellphone')}
                        id="cellphone"
                        type="text"
                        className={cn(
                            'border-placeholder border h-[56px] rounded-lg px-4 py-2 w-full text-primary',
                            errors.cellphone?.message &&
                                'border-red-500 outline-red-500'
                        )}
                        maxLength={9}
                    />
                    <ErrorMessage errorMessage={errors.cellphone?.message} />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <div className="flex gap-3">
                        <input
                            type="checkbox"
                            className="accent-primary"
                            {...register('privacyPolicy')}
                            id="privacyPolicy"
                        />
                        <label
                            htmlFor="privacyPolicy"
                            className={cn(
                                'text-primary font-normal text-sm',
                                errors.privacyPolicy?.message && 'text-red-500'
                            )}
                        >
                            Acepto la Política de Privacidad
                        </label>
                    </div>
                    <ErrorMessage
                        errorMessage={errors.privacyPolicy?.message}
                    />
                </div>
                <div>
                    <div className="flex gap-3">
                        <input
                            type="checkbox"
                            id="marketingPolicy"
                            className="accent-primary"
                            {...register('marketingPolicy')}
                        />
                        <label
                            htmlFor="marketingPolicy"
                            className={cn(
                                'text-primary font-normal text-sm',
                                errors.marketingPolicy?.message &&
                                    'text-red-500'
                            )}
                        >
                            Acepto la Política Comunicaciones Comerciales
                        </label>
                    </div>
                    <ErrorMessage
                        errorMessage={errors.marketingPolicy?.message}
                    />
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

export const ErrorMessage = ({ errorMessage }: { errorMessage?: string }) => {
    if (!errorMessage) return null
    return <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
}
