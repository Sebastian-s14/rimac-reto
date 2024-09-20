import { cva, type VariantProps } from 'class-variance-authority'

import './Button.scss'

const button = cva('btn', {
    variants: {
        variant: {
            primary: 'btn--primary',
            secondary: 'btn--secondary',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    ...props
}) => <button className={button({ variant, className })} {...props} />
