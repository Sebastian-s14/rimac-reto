import { BackButton } from '@/components/Button'
import { Skeleton } from '@/components/Skeleton'
import { Title } from '@/components/Title'
import { CardPlanItem } from '@/modules/plans/components/CardPlanItem'
import { CardTypePlan } from '@/modules/plans/components/CardTypePlan'
import { usePlans } from './hooks/usePlans'

export const Plans = () => {
    const {
        userName,
        isLoading,
        filterPlans,
        hasDiscount,
        selectedPlan,
        setSelectedPlan,
    } = usePlans()

    return (
        <div className="flex flex-col gap-8 pt-4">
            <BackButton to="/" />
            <div className="grid grid-cols-4 md:grid-cols-12 gap-x-4 md:gap-x-8 text-center">
                <div className="flex flex-col gap-2 md:col-start-4 md:col-end-10 col-span-4">
                    {isLoading ? (
                        <Skeleton className="w-full h-16" />
                    ) : (
                        <Title
                            text={`${userName} ¿Para quién deseas cotizar?`}
                            className="px-0 text-[28px]"
                        />
                    )}
                    <p className="text-title">
                        Selecciona la opción que se ajuste más a tus
                        necesidades.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <CardTypePlan
                    id="checkbox-plan-personal"
                    checked={selectedPlan === 'personal'}
                    onChange={() => setSelectedPlan({ planType: 'personal' })}
                    icon="/icons/user-protection.svg"
                    alt="for me icon"
                    title="Para mi"
                    description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
                    className="lg:col-start-4 lg:col-end-7 md:col-start-3 md:col-end-7"
                />
                <CardTypePlan
                    id="checkbox-plan-other"
                    checked={selectedPlan === 'other'}
                    onChange={() => setSelectedPlan({ planType: 'other' })}
                    icon="/icons/add-user.svg"
                    alt="for me icon"
                    title="Para alguien más"
                    description="Realiza una cotización para uno de tus familiares o cualquier persona."
                    className="lg:col-start-7 lg:col-end-10 md:col-start-7 md:col-end-11"
                />
            </div>
            {/* <Container className="mb-16"> */}
            {/* <div className="flex col-span-4  gap-8 md:col-start-1 md:col-end-13 lg:col-start-2 lg:col-end-12">
                    {filterPlans?.map((plan) => (
                        <CardPlanItem
                            key={plan.name}
                            title={plan.name}
                            icon={
                                plan.name.toLowerCase().includes('clínica')
                                    ? '/icons/hospital.svg'
                                    : '/icons/home.svg'
                            }
                            alt={
                                plan.name.toLowerCase().includes('clínica')
                                    ? 'hospital icon'
                                    : 'home icon'
                            }
                            hasDiscount={hasDiscount}
                            price={plan.price}
                            description={plan.description}
                        />
                    ))}
                </div> */}
            <div className="flex flex-wrap gap-8 w-full justify-center mb-16">
                {filterPlans?.map((plan) => (
                    <CardPlanItem
                        key={plan.name}
                        title={plan.name}
                        icon={
                            plan.name.toLowerCase().includes('clínica')
                                ? '/icons/hospital.svg'
                                : '/icons/home.svg'
                        }
                        alt={
                            plan.name.toLowerCase().includes('clínica')
                                ? 'hospital icon'
                                : 'home icon'
                        }
                        hasDiscount={hasDiscount}
                        price={plan.price}
                        description={plan.description}
                        isRecommended={plan.name === 'Plan en Casa y Clínica'}
                    />
                ))}
            </div>
            {/* </Container> */}
        </div>
    )
}
