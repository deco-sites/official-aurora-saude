export default function BrokersHomeDivisor() {
    return (
        <>
            <div className="relative flex items-center flex-col gap-10 h-[600px] lg:h-[300px] bg-white lg:bg-gray4">
                <div className="flex px-10 lg:px-0 justify-center lg:bg-fixed lg:bg-center lg:bg-no-repeat lg:bg-cover flex-col gap-10 w-full max-w-[1400px]">
                    <div className="absolute px-10 lg:px-0 inset-0 flex h-auto lg:h-[350px] justify-center -mt-28">
                        <div className="flex gap-6 max-w-[1400px] overflow-hidden rounded-[20px]">
                            <div className="flex flex-col lg:flex-row gap-7 pb-96 lg:pb-0">
                                <div className="flex flex-col justify-center items-center text-white lg:w-2/5 gap-9 bg-aquagreen rounded-[20px] py-11 lg:py-16 px-9 lg:px-20">
                                    <span>
                                        A Aurora Saúde nasceu para inovar e
                                        trazer uma experiência única de cuidado
                                        e bem-estar à vida das pessoas. Nosso
                                        propósito é oferecer a você e aos nossos
                                        clientes planos de saúde que traduzem
                                        uma forma de cuidado exclusiva e
                                        surpreendente.
                                    </span>
                                    <button className="w-fit bg-white text-aquagreen2 rounded-[20px] py-2 px-6">
                                        Quero ser um corretor
                                    </button>
                                </div>
                                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:w-3/5 bg-white rounded-[20px] px-10 pt-14 pb-20 lg:px-16 lg:py-28">
                                    <span className="text-aquagreen font-sora font-bold text-xl">
                                        Conheça a rede de atendimento com os
                                        melhores prestadores médico-hospitalares
                                        do seu plano.
                                    </span>
                                    {/*Aqui vai entrar o banner Providers*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
