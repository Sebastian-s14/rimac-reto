import { useNavigate } from 'react-router-dom'

import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Separator } from '@/components/Separator'
import { useSummaryStore } from '@/store/store'
import { cn } from '@/utils'

const DISCOUNT = 0.95

interface CardPlanItemProps {
    title: string
    icon: string
    alt: string
    price: number
    description: string[]
    hasDiscount: boolean
    isRecommended?: boolean
}

export const CardPlanItem = ({
    title,
    icon,
    alt,
    price,
    description,
    hasDiscount,
    isRecommended,
}: CardPlanItemProps) => {
    const navigate = useNavigate()

    const updateSummaryData = useSummaryStore(
        (state) => state.updateSummaryData
    )

    const finalPrice = hasDiscount ? price * DISCOUNT : price

    return (
        <Card
            className={cn(
                'pt-[68px] px-8 pb-12 gap-6 shadow-card2 w-[288px] h-[687px]',
                isRecommended && 'pt-[40px]'
            )}
        >
            <div>
                {isRecommended && (
                    <div className="mb-1">
                        <Badge>Plan Recomendado</Badge>
                    </div>
                )}
                <div className="flex gap-4 ">
                    <>
                        <div className="flex flex-col gap-6 font-black">
                            <p className="text-title text-2xl leading-8">
                                {title}
                            </p>
                            <div className="flex flex-col gap-1">
                                <p className="text-xs text-subtitle">
                                    COSTO DEL PLAN
                                </p>
                                {hasDiscount ? (
                                    <>
                                        <p className="text-sm text-subtitle font-normal line-through">
                                            ${price} antes
                                        </p>
                                        <p className="text-xl">
                                            ${finalPrice} al mes
                                        </p>
                                    </>
                                ) : (
                                    <p className="text-xl">${price} al mes</p>
                                )}
                            </div>
                        </div>
                    </>
                    <img src={icon} alt={alt} className="size-14" />
                </div>
            </div>
            <Separator className="md:block" />
            <div className="flex flex-col gap-10 justify-between h-full">
                <ul className="flex flex-col gap-6 list-disc pl-4">
                    {description.map((item, index) => (
                        <li key={index} className="text-base text-title">
                            <div
                                dangerouslySetInnerHTML={{ __html: item }}
                            ></div>
                        </li>
                    ))}
                </ul>
                <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => {
                        updateSummaryData({
                            price: finalPrice,
                            planName: title,
                        })
                        navigate('/resumen')
                    }}
                >
                    Seleccionar plan
                </Button>
            </div>
        </Card>
    )
}
