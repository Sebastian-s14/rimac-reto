import { BackButton } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Separator } from '@/components/Separator'
import { Title } from '@/components/Title'
import { useSummaryStore } from '@/store/store'

export const Summary = () => {
    // const userName = 'User name'
    // const dni = '444888888'
    // const celular = '5130216147'
    // const plan = 'Plan en Casa y Clínica'
    // const costoPlan = '$99'

    const { userName, cellphone, document, planName, price } = useSummaryStore(
        (state) => state.summaryData
    )

    return (
        <div className="flex flex-col gap-10 pt-4 pb-5">
            <BackButton to="/planes" />
            <Container>
                <div className="md:col-start-2 md:col-end-12 col-span-4">
                    <Title text="Resumen del seguro" />
                </div>
            </Container>
            <Container>
                <div className="md:col-start-2 md:col-end-12 col-span-4">
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
                        <SummaryItem
                            title="Responsable de pago"
                            text1={`DNI: ${document}`}
                            text2={`Celular: ${cellphone}`}
                        />
                        <SummaryItem
                            title="Plan elegido"
                            text1={planName}
                            text2={`Costo del Plan: $${price} al mes`}
                        />
                    </Card>
                </div>
            </Container>
        </div>
    )
}

export const SummaryItem = ({
    title,
    text1,
    text2,
}: {
    title: string
    text1: string
    text2: string
}) => {
    return (
        <div className="flex flex-col gap-1">
            <p className="font-bold text-base text-primary leading-6">
                {title}
            </p>
            <p className="text-primary text-sm leading-6">{text1}</p>
            <p className="text-primary text-sm leading-6">{text2}</p>
        </div>
    )
}
