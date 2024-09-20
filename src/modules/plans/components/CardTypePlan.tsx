import { Card } from '@/components/Card'
import { cn } from '@/utils'

interface CardTypePlanProps {
    checked: boolean
    onChange: () => void
    id: string
    icon: string
    alt: string
    title: string
    description: string
    className?: string
}

export const CardTypePlan = ({
    id,
    title,
    description,
    icon,
    alt,
    checked,
    onChange,
    className,
}: CardTypePlanProps) => {
    return (
        <>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                className="accent-primary"
                hidden
            />
            <label
                htmlFor={id}
                className={cn(
                    'flex group flex-col border-transparent border-[3px] hover:border-primary hover:border-[3px] hover:rounded-3xl md:w-[256px] h-[212px] w-full',
                    className,
                    checked && 'border-primary rounded-3xl'
                )}
            >
                <Card className="pb-10 gap-0 group-hover:cursor-pointer shadow-card2 h-full">
                    {checked ? (
                        <img
                            src="/icons/radio-button.svg"
                            alt="radio button icon"
                            className="size-6 self-end"
                        />
                    ) : (
                        <div className="rounded-full size-6 border-checkbox border self-end group-hover:border-black"></div>
                    )}
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 md:flex-col">
                            <img src={icon} alt={alt} className="size-8" />
                            <p className="text-title font-bold text-xl leading-6">
                                {title}
                            </p>
                        </div>
                        <p className="text-xs leading-5 text-title">
                            {description}
                        </p>
                    </div>
                </Card>
            </label>
        </>
    )
}
