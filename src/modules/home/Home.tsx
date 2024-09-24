import { Badge } from '@/components/Badge'
import { Separator } from '@/components/Separator'
import { Form } from '@/modules/home/components/Form'

export const Home = () => {
    return (
        <div>
            {/* <Container> */}
            <div className="flex md:pt-8 pb-28 justify-center items-center">
                <div className="max-w-[480px]  max-h-[560px] w-full hidden md:block">
                    <img
                        src="/image-home-desktop.webp"
                        alt="image home desktop"
                        className="rounded-lg w-full h-full"
                    />
                </div>
                <div className="md:ml-8 lg:ml-32">
                    <div className="flex justify-between col-span-4 md:col-span-12 gap-3">
                        <div className="self-center flex flex-col gap-4">
                            <div>
                                <Badge variant="secondary" className="text-xs">
                                    Seguro Salud Flexible
                                </Badge>
                            </div>
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
                        </div>
                    </div>
                    <Separator className="my-6" />
                    <Form />
                </div>
            </div>
            {/* </Container> */}
            {/* <div className="flex py-8 justify-center">
                <img
                    src="/image-home-desktop.png"
                    alt="image home desktop"
                    className="rounded-lg w-full h-auto min-h-[560px] max-w-[480px] hidden md:block"
                />
                <div className="pl-32">
                    <Badge
                        variant="secondary"
                        className="text-sm h-6 font-bold tracking-[.4px]"
                    >
                        Seguro de salud flexible
                    </Badge>
                    <h2 className="text-[32px] font-bold leading-9">
                        Creado para ti y tu familia
                    </h2>
                    <Form />
                </div>
            </div> */}
            {/* <Footer /> */}
        </div>
    )
}
