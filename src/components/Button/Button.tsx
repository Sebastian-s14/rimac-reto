import { cva, type VariantProps } from 'class-variance-authority'
import { Link } from 'react-router-dom'

import { Container } from '@/components/Container'

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

export const BackButton = ({ to }: { to: string }) => {
    return (
        <Container>
            <div className="col-span-4 md:col-start-2">
                <Link
                    to={to}
                    className="flex gap-2 items-center text-highlight-secondary font-bold text-lg hover:opacity-80"
                >
                    <img
                        src="/icons/arrow-left.svg"
                        alt="Arrow left icon"
                        className="size-5"
                    />
                    Volver
                </Link>
            </div>
        </Container>
    )
}
