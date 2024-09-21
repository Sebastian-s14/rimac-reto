import { useLocation } from 'react-router-dom'

import { cn } from '@/utils'

export const Stepper = () => {
    const { pathname } = useLocation()

    return (
        <div className="bg-foreground h-14 md:h-16 flex justify-center items-center gap-4">
            <StepperItem
                title="Planes y coberturas"
                step={1}
                isActive={pathname === '/planes'}
            />
            <StepperDots />
            <StepperItem
                title="Resumen"
                step={2}
                isActive={pathname === '/resumen'}
            />
        </div>
    )
}

export const StepperItem = ({
    title,
    isActive,
    step,
}: {
    title: string
    isActive?: boolean
    step: number
}) => {
    return (
        <div className="flex gap-4">
            <div
                className={cn(
                    'rounded-full size-6 text-xs flex justify-center items-center text-subtitle border border-subtitle',
                    {
                        'bg-highlight-secondary text-white': isActive,
                    }
                )}
            >
                {step}
            </div>
            <div
                className={cn('text-normal font-bold leading-6 text-subtitle', {
                    'text-highlight-secondary': isActive,
                    'text-title': isActive,
                })}
            >
                {title}
            </div>
        </div>
    )
}

export const StepperDots = () => {
    return <div className="text-subtitle">- - - -</div>
}
