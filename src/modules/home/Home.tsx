import { Separator } from '@/components/Separator'
import { Form } from '@/modules/home/components/Form'

export const Home = () => {
    return (
        <div>
            <div className="flex justify-between col-span-4 md:col-span-12 md:hidden gap-3">
                <div className="self-center">
                    <h1 className="font-bold text-xs">Seguro salud flexible</h1>
                    <h2 className="text-[28px] font-bold leading-9">
                        Creado para ti y tu familia
                    </h2>
                </div>
                <div>
                    <img
                        src="/image-home-mobile.png"
                        alt="image home mobile"
                        className="rounded-lg w-full h-auto min-h-40 min-w-32 block md:hidden"
                    />
                    {/* <img
                        src="/image-home-desktop.png"
                        alt="image home desktop"
                        className="rounded-lg w-full h-auto min-h-[560px] max-w-[480px] hidden md:block"
                    /> */}
                </div>
            </div>
            <Separator className="my-6" />
            <Form />
        </div>
    )
}
