import { cn } from '@/utils'

export const Title = ({
    text,
    className,
}: {
    text: string
    className?: string
}) => {
    return (
        <h2
            className={cn(
                'text-[32px] md:text-[40px] font-bold text-title leading-10 px-5',
                className
            )}
        >
            {text}
        </h2>
    )
}
