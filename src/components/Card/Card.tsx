export const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="shadow-card rounded-3xl px-6 py-4 flex flex-col gap-4">
            {children}
        </div>
    )
}
