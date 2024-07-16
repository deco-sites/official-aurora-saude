import Image from "apps/website/components/Image.tsx";

export default function Footer() {
    return (
        <>
            <div className="flex justify-center bg-pink3">
                <div className="lg:w-[1400px] w-full pt-24 pb-16">
                    <footer className="flex flex-col text-white px-10 lg:px-0">
                        <div className="border-b border-b-white lg:border-none pb-12 lg:pb-0 flex mb-10 gap-12 items-center">
                            <Image
                                src={"/Site/Footer/aurora-logo.svg"}
                                alt={""}
                            />
                            <div className="flex gap-5">
                                <Image
                                    src={"/Site/Footer/facebook-icon.svg"}
                                    alt={""}
                                    className="w-6"
                                />
                                <Image
                                    src={"/Site/Footer/instagram-icon.svg"}
                                    alt={""}
                                    className="w-6"
                                />
                                <Image
                                    src={"/Site/Footer/linkedin-icon.svg"}
                                    alt={""}
                                    className="w-6"
                                />
                                <Image
                                    src={"/Site/Footer/whatsapp-icon.svg"}
                                    alt={""}
                                    className="hidden lg:flex w-6"
                                />
                            </div>
                        </div>
                        <div className="w-full flex justify-center lg:justify-start text-sm pb-20">
                            <div className="hidden lg:flex lg:w-3/5 gap-20 border-r border-r-white p-12 whitespace-nowrap">
                                <div className="flex flex-col">
                                    <span className="font-semibold mb-6">
                                        Sou cliente
                                    </span>
                                    <div className="flex flex-col gap-3">
                                        <span>Quem somos</span>
                                        <span>Nossos planos</span>
                                        <span>Jornada de Cuidado</span>
                                        <span>Notícias</span>
                                        <span>Cotação</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold mb-6">
                                        Precisa de Ajuda?
                                    </span>
                                    <div className="flex flex-col gap-3">
                                        <span>Ouvidoria</span>
                                        <span>Perguntas Frequentes</span>
                                        <span>Fale com a Gente</span>
                                        <span>Trabalhe conosco</span>
                                        <span>Políticas de Privacidade</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold mb-6">
                                        Sou corretor
                                    </span>
                                    <div className="flex flex-col gap-3">
                                        <span>Sou corretor</span>
                                        <span>Seja um Corretor</span>
                                        <span>Materiais de Apoio</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold mb-6">
                                        Prestador
                                    </span>
                                    <div className="flex flex-col gap-3">
                                        <span>Seja um Prestador</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-2/5 text-center lg:text-left items-center lg:items-start flex flex-col gap-8 lg:py-12 lg:pl-20">
                                <div className="flex flex-col gap-4">
                                    <span>Precisa de ajuda?</span>
                                    <a href="#" className="flex gap-3">
                                        <Image
                                            src={"/Site/Footer/whatsapp-icon.svg"}
                                            alt={""}
                                        />
                                        <span>Tire dúvidas no Whatsapp</span>
                                    </a>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span>
                                        Já tem o plano e quer falar conosco?
                                        Ligue para:
                                    </span>
                                    <div className="flex gap-3 justify-center lg:justify-start">
                                        <Image
                                            src={"/Site/Footer/phone-icon.svg"}
                                            alt={""}
                                        />
                                        <span>4000 2105</span>
                                    </div>
                                </div>

                                <div className="hidden lg:flex gap-3">
                                    <Image
                                        src={"/Site/Footer/android.svg"}
                                        alt={""}
                                    />
                                    <Image
                                        src={"/Site/Footer/apple.svg"}
                                        alt={""}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row items-center justify-between text-xs border-t border-t-white p-8">
                            <span className="block lg:hidden mb-4">
                                CNPJ: 49.955.478/0001-64
                            </span>
                            <span className="block lg:hidden mb-6">
                                Endereço: Rua Ministro Orozimbo Nonato, 422 -
                                Sala 903 - Vila da Serra - Nova Lima - MG
                            </span>
                            <div className="hidden lg:flex items-center gap-12">
                                <div className="bg-black p-1 inline-block">
                                    <div className="border-white border-[1px] p-[5px] inline-block">
                                        <span className="p-2">
                                            ANS Nº: 423629
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Image
                                src={"/Site/Footer/ans-logo.svg"}
                                alt={""}
                                className="hidden lg:block"
                            />
                            <div className="flex lg:hidden justify-between w-full mb-6">
                                <div className="flex items-center gap-12">
                                    <div className="bg-black p-1 inline-block">
                                        <div className="border-white border-[1px] p-[5px] inline-block">
                                            <span className="p-2">
                                                ANS Nº: 423629
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    src={"/Site/Footer/ans-logo.svg"}
                                    alt={""}
                                />
                            </div>
                            <span className="hidden lg:block">
                                CNPJ: 49.955.478/0001-64
                            </span>
                            <span className="hidden lg:block">
                                Endereço: Rua Ministro Orozimbo Nonato, 422 -
                                Sala 903 - Vila da Serra - Nova Lima - MG
                            </span>
                            <span className="block lg:hidden mb-5">
                                Política de Privacidade
                            </span>
                            <span>Todos os Direitos Reservados © 2023</span>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
