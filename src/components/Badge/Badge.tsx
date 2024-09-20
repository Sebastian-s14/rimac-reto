import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils'

const badgeVariants = cva(
    'inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-black h-[20px]',
    {
        variants: {
            variant: {
                default: 'border-transparent bg-highlight-primary text-title',
                secondary: 'border-transparent bg-linear-gradient text-primary',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
