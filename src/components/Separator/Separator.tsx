import { cn } from '@/utils'

export const Separator = ({ className }: { className?: string }) => {
    return <div className={cn('h-[1px] bg-border md:hidden', className)}></div>
}
