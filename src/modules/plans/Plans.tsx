import { useState } from 'react'

import { Title } from '@/components/Title'
import { CardTypePlan } from '@/modules/plans/components/CardTypePlan'

export const Plans = () => {
    const [selectedPlan, setSelectedPlan] = useState<'personal' | 'other'>(
        'other'
    )

    const userName = 'User name'
    return (
        <div className="flex flex-col gap-8">
            <div className="h-16 bg-blue-500 -px-6 md:-mx-[120px] justify-center items-center hidden md:flex">
                Stepper
            </div>
            <div className="grid grid-cols-4 md:grid-cols-12 gap-x-4 md:gap-x-8 text-center">
                <div className="flex flex-col gap-2 md:col-start-4 md:col-end-10 col-span-4">
                    <Title
                        text={`${userName} ¿Para quién deseas cotizar?`}
                        className="px-0 text-[28px]"
                    />
                    <p className="text-title">
                        Selecciona la opción que se ajuste más a tus
                        necesidades.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4 lg:gap-8 md:gap-6 md:grid md:grid-cols-12">
                <CardTypePlan
                    id="checkbox-plan-personal"
                    checked={selectedPlan === 'personal'}
                    onChange={() => setSelectedPlan('personal')}
                    icon="/icons/user-protection.svg"
                    alt="for me icon"
                    title="Para mi"
                    description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
                    className="lg:col-start-4 lg:col-end-7 md:col-start-3 md:col-end-7"
                />
                <CardTypePlan
                    id="checkbox-plan-other"
                    checked={selectedPlan === 'other'}
                    onChange={() => setSelectedPlan('other')}
                    icon="/icons/add-user.svg"
                    alt="for me icon"
                    title="Para alguien más"
                    description="Realiza una cotización para uno de tus familiares o cualquier persona."
                    className="lg:col-start-7 lg:col-end-10 md:col-start-7 md:col-end-11"
                />
            </div>
        </div>
    )
}
