//Queremos te ouvir.<br /> Deixe sua mensagem <br />abaixo.
//Queremos te<br /> ouvir. Deixe<br /> sua mensagem <br />abaixo.

import SiteInputText from "site/components/Site/site-input-text.tsx";
import { ufsOptions } from "site/helpers/Site/ufsOptions.ts";
import { citiesOptions } from "site/helpers/Simulador/cities.ts";
import SiteInputSelect from "site/components/Site/site-input-select.tsx";
import SiteTextArea from "site/components/Site/text-area.tsx";
import { useEffect, useState } from "preact/hooks";

export default function OmbudsmanIsland() {
    const [protocolNumberPlaceholder, setProtocolNumberPlaceholder] = useState(
        "xxx.xxx.xxx-xx",
    );
    const [cardCodePlaceholder, setCardCodePlaceholder] = useState(
        "x.xxx.xxxxxxx",
    );
    const [namePlaceholder, setNamePlaceholder] = useState("Escreva aqui");
    const [emailPlaceholder, setEmailPlaceholder] = useState(
        "seuemail@email.com",
    );
    const [cpfPlaceholder, setCpfPlaceholder] = useState("xxx.xxx.xxx-xx");
    const [telPlaceholder, setTelPlaceholder] = useState("(xx) x xxxx xxxx");
    const [UFPlaceholder, setUFPlaceholder] = useState("MG");
    const [cityPlaceholder, setCityPlaceholder] = useState("Belo Horizonte");
    const [addressPlaceholder, setAddressPlaceholder] = useState(
        "Rua, Bairro e Número",
    );
    const [cepPlaceholder, setCepPlaceholder] = useState("xx.xxx-xxx");
    const [textareaPlaceholder, setTextareaPlaceholder] = useState(
        "Escreva sua mensagem aqui",
    );

    useEffect(() => {
        const updateNamePlaceholder = () => {
            if (window.innerWidth < 640) {
                setProtocolNumberPlaceholder("Número do Protocolo");
                setCardCodePlaceholder("Código da Carteirinha");
                setNamePlaceholder("Nome Completo");
                setEmailPlaceholder("Email");
                setCpfPlaceholder("CPF");
                setTelPlaceholder("Telefone");
                setUFPlaceholder("UF");
                setCityPlaceholder("Cidade");
                setAddressPlaceholder("Endereço");
                setCepPlaceholder("CEP");
                setTextareaPlaceholder("Escreva sua mensagem aqui");
            } else {
                setProtocolNumberPlaceholder("xxx.xxx.xxx-xx");
                setCardCodePlaceholder("x.xxx.xxxxxxx");
                setNamePlaceholder("Escreva aqui");
                setEmailPlaceholder("seuemail@email.com");
                setCpfPlaceholder("xxx.xxx.xxx-xx");
                setTelPlaceholder("(xx) x xxxx xxxx");
                setUFPlaceholder("MG");
                setCityPlaceholder("Belo Horizonte");
                setAddressPlaceholder("Rua, Bairro e Número");
                setCepPlaceholder("xx.xxx-xxx");
                setTextareaPlaceholder("Escreva sua mensagem aqui");
            }
        };

        updateNamePlaceholder(); // Set initial placeholder based on screen size
        window.addEventListener("resize", updateNamePlaceholder);

        return () =>
            window.removeEventListener("resize", updateNamePlaceholder);
    }, []);

    return (
        <>
            <div className="flex justify-center px-10 lg:px-0">
                <div className="lg:max-w-[1400px] w-full pt-12 pb-16 lg:py-32 lg:px-32">
                    <div className="mb-14 flex flex-col px-8 gap-5 lg:gap-0 lg:flex-row lg:items-center justify-between lg:px-14 lg:pb-16 lg:border-b border-b-black border-opacity-15 ">
                        <span className="font-sora text-2xl text-orange1 font-bold">
                            Ouvidoria <br /> Aurora Saúde
                        </span>
                        <div className="flex flex-col gap-4 lg:max-w-[500px] text-black text-opacity-50">
                            <span>
                                A Ouvidoria da Aurora é um canal de comunicação
                                independente e imparcial, que atua como um
                                espaço de diálogo entre você e nós.
                            </span>
                            <span>
                                Nosso objetivo é acolher suas manifestações,
                                seja para assegurar seus direitos contratuais e
                                regulamentares, seja para contribuir para a
                                melhoria de nossos serviços.
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:gap-11">
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 border-b border-b-black border-opacity-15 lg:border-none pb-10 lg:pb-0">
                            <SiteInputText
                                id={"protocol"}
                                name={"protocol"}
                                label={"Número do Protocolo"}
                                placeholder={protocolNumberPlaceholder}
                                wfull
                            />
                            <SiteInputText
                                id={"cardcode"}
                                name={"cardcode"}
                                label={"Código da Carteirinha"}
                                placeholder={cardCodePlaceholder}
                                wfull
                            />
                        </div>
                        <SiteInputText
                            id={"name"}
                            name={"name"}
                            label={"Nome"}
                            placeholder={namePlaceholder}
                            wfull
                        />
                        <div className="flex flex-col lg:flex-row gap-5">
                            <SiteInputText
                                id={"email"}
                                name={"email"}
                                label={"E-mail"}
                                placeholder={emailPlaceholder}
                                wfull
                            />
                            <div className="block lg:hidden">
                                <SiteInputText
                                    id={"tel"}
                                    name={"tel"}
                                    label={"Telefone"}
                                    placeholder={telPlaceholder}
                                    wfull
                                />
                            </div>
                            <SiteInputText
                                id={"cpf"}
                                name={"cpf"}
                                label={"CPF"}
                                placeholder={cpfPlaceholder}
                                wfull
                            />
                        </div>
                        <div className="flex gap-4 lg:hidden">
                            <SiteInputText
                                id={"cep"}
                                name={"cep"}
                                label={"CEP"}
                                placeholder={cepPlaceholder}
                                wfull
                            />
                            <SiteInputText
                                id={"address"}
                                name={"address"}
                                label={"Endereço"}
                                placeholder={addressPlaceholder}
                                wfull
                            />
                        </div>
                        <div className="flex mb-3 gap-8 border-b border-b-black border-opacity-15 lg:border-none pb-10 lg:pb-0">
                            <div className="hidden lg:block">
                                <SiteInputText
                                    id={"tel"}
                                    name={"tel"}
                                    label={"Telefone"}
                                    placeholder={telPlaceholder}
                                    wfull
                                />
                            </div>

                            <SiteInputSelect
                                id={"uf"}
                                name={"uf"}
                                label={"UF:"}
                                options={ufsOptions}
                                placeholder={UFPlaceholder}
                                wfull
                            />
                            <SiteInputSelect
                                id={"city"}
                                name={"city"}
                                label={"Cidade:"}
                                options={citiesOptions}
                                placeholder={cityPlaceholder}
                                wfull
                            />
                        </div>
                        <div className="hidden lg:flex flex-col lg:flex-row gap-5">
                            <SiteInputText
                                id={"address"}
                                name={"address"}
                                label={"Endereço"}
                                placeholder={addressPlaceholder}
                                wfull
                            />
                            <SiteInputText
                                id={"cep"}
                                name={"cep"}
                                label={"CEP"}
                                placeholder={cepPlaceholder}
                                wfull
                            />
                        </div>
                        <SiteTextArea
                            id={"message"}
                            name={"message"}
                            placeholder={textareaPlaceholder}
                        />

                        <div className="flex justify-end w-full">
                            <button className="bg-orange4 text-white w-full lg:w-auto lg:px-24 py-3 rounded-full">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
