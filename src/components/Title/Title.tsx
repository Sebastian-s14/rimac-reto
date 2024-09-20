export const Title = ({ text }: { text: string }) => {
    return (
        <h2 className="text-[32px] md:text-[40px] font-bold text-title leading-10 px-5">
            {text}
        </h2>
    )
}
