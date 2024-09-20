import { cn } from '@/utils'

export const Container = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <div
            className={cn(
                'grid grid-cols-4 md:grid-cols-12 gap-x-4 md:gap-x-8',
                className
            )}
        >
            {children}
        </div>
    )
}
