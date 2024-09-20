import { Card } from '@/components/Card'
import { Separator } from '@/components/Separator'
import { Title } from '@/components/Title'

export const Summary = () => {
    const userName = 'User name'
    const dni = '444888888'
    const celular = '5130216147'
    const plan = 'Plan en Casa y Clínica'
    const costoPlan = '$99'

    return (
        <div className="col-span-4 md:col-span-12 flex flex-col gap-10 pt-4 pb-5">
            <Title text="Resumen del seguro" />
            <Card>
                <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-black leading-4 tracking-[.8px]">
                        PRECIOS CALCULADOS PARA:
                    </p>
                    <div className="flex gap-3 items-center">
                        <img
                            src="/icons/family.svg"
                            alt="family icon"
                            className="size-6"
                        />
                        <p className="text-primary font-bold text-xl leading-4 tracking-[.2px]">
                            {userName}
                        </p>
                    </div>
                </div>
                <Separator />
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-base text-primary leading-6">
                        Responsable de pago
                    </p>
                    <p className="text-primary text-sm leading-6">DNI: {dni}</p>
                    <p className="text-primary text-sm leading-6">
                        Celular: {celular}
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-base text-primary leading-6">
                        Plan elegido
                    </p>
                    <p className="text-primary text-sm leading-6">{plan}</p>
                    <p className="text-primary text-sm leading-6">
                        Costo del Plan: {costoPlan} al mes
                    </p>
                </div>
            </Card>
        </div>
    )
}
