//Queremos te ouvir.<br /> Deixe sua mensagem <br />abaixo.
//Queremos te<br /> ouvir. Deixe<br /> sua mensagem <br />abaixo.

import SiteInputText from "site/components/Site/site-input-text.tsx";
import { ufsOptions } from "site/helpers/Site/ufsOptions.ts";
import { citiesOptions } from "site/helpers/Simulador/cities.ts";
import SiteInputSelect from "site/components/Site/site-input-select.tsx";
import SiteTextArea from "site/components/Site/text-area.tsx";
import { useEffect, useState } from "preact/hooks";
import { invoke } from "../../runtime.ts";
import { signal } from "@preact/signals";
import SendingConfirmation from "site/components/Site/sending-confirmation.tsx";

export interface OmbudsmanIslandProps {
    recipientsEmail: string;
    subject: string;
}

const ombudsmanEmailSended = signal(false);

export default function OmbudsmanIsland(
    { recipientsEmail, subject }: OmbudsmanIslandProps,
) {
    const [protocolNumberPlaceholder, setProtocolNumberPlaceholder] = useState(
        "xxxxxxxxxxxxxxxxxxxx",
    );
    const [cardCodePlaceholder, setCardCodePlaceholder] = useState(
        "xxxxxxxxxxxxxxxxx",
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
                setProtocolNumberPlaceholder("xxxxxxxxxxxxxxxxxxxx");
                setCardCodePlaceholder("xxxxxxxxxxxxxxxxx");
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
        globalThis.addEventListener("resize", updateNamePlaceholder);

        return () =>
            globalThis.removeEventListener("resize", updateNamePlaceholder);
    }, []);

    const [protocolNumber, setProtocolNumber] = useState("");
    const [cardCode, setCardCode] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [tel, setTel] = useState("");
    const [UF, setUF] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [cep, setCep] = useState("");
    const [message, setMessage] = useState("");

    const sendData = `
        Número do Protocolo: ${protocolNumber}
        Código da Carteirinha: ${cardCode}
        Nome: ${name}
        E-mail: ${email}
        CPF: ${cpf}
        Telefone: ${tel}
        UF: ${UF}
        Cidade: ${city}
        Endereço: ${address}
        Cep: ${cep}
        Mensagem: ${message}
    `;

    const handleSubmit = async (e) => {
        e.preventDefault();
        ombudsmanEmailSended.value = true;
        await invoke.site.actions.sendEmail({
            recipientsEmail: recipientsEmail,
            subject: subject,
            data: sendData,
        });
    };

    const formComponent = (
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
                    <form
                        className="flex flex-col gap-4 lg:gap-11"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 border-b border-b-black border-opacity-15 lg:border-none pb-10 lg:pb-0">
                            <SiteInputText
                                id={"protocol"}
                                name={"protocol"}
                                label={"Número do Protocolo"}
                                value={protocolNumber}
                                inputValueSetter={setProtocolNumber}
                                placeholder={protocolNumberPlaceholder}
                                wfull
                            />
                            <SiteInputText
                                id={"cardcode"}
                                name={"cardcode"}
                                label={"Código da Carteirinha"}
                                value={cardCode}
                                inputValueSetter={setCardCode}
                                placeholder={cardCodePlaceholder}
                                wfull
                            />
                        </div>
                        <SiteInputText
                            id={"name"}
                            name={"name"}
                            label={"Nome"}
                            value={name}
                            inputValueSetter={setName}
                            placeholder={namePlaceholder}
                            wfull
                        />
                        <div className="flex flex-col lg:flex-row gap-5">
                            <SiteInputText
                                id={"email"}
                                name={"email"}
                                label={"E-mail"}
                                value={email}
                                inputValueSetter={setEmail}
                                placeholder={emailPlaceholder}
                                wfull
                            />
                            <div className="block lg:hidden">
                                <SiteInputText
                                    id={"tel"}
                                    name={"tel"}
                                    label={"Telefone"}
                                    value={tel}
                                    inputValueSetter={setTel}
                                    placeholder={telPlaceholder}
                                    wfull
                                />
                            </div>
                            <SiteInputText
                                id={"cpf"}
                                name={"cpf"}
                                label={"CPF"}
                                value={cpf}
                                inputValueSetter={setCpf}
                                placeholder={cpfPlaceholder}
                                wfull
                            />
                        </div>
                        <div className="flex gap-4 lg:hidden">
                            <SiteInputText
                                id={"cep"}
                                name={"cep"}
                                label={"CEP"}
                                value={cep}
                                inputValueSetter={setCep}
                                placeholder={cepPlaceholder}
                                wfull
                            />
                            <SiteInputText
                                id={"address"}
                                name={"address"}
                                label={"Endereço"}
                                value={address}
                                inputValueSetter={setAddress}
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
                                    value={tel}
                                    inputValueSetter={setTel}
                                    placeholder={telPlaceholder}
                                    wfull
                                />
                            </div>

                            <SiteInputSelect
                                id={"uf"}
                                name={"uf"}
                                label={"UF:"}
                                value={UF}
                                inputValueSetter={setUF}
                                options={ufsOptions}
                                placeholder={UFPlaceholder}
                                wfull
                            />
                            <SiteInputSelect
                                id={"city"}
                                name={"city"}
                                label={"Cidade:"}
                                value={city}
                                inputValueSetter={setCity}
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
                                value={address}
                                inputValueSetter={setAddress}
                                placeholder={addressPlaceholder}
                                wfull
                            />
                            <SiteInputText
                                id={"cep"}
                                name={"cep"}
                                label={"CEP"}
                                value={cep}
                                inputValueSetter={setCep}
                                placeholder={cepPlaceholder}
                                wfull
                            />
                        </div>
                        <SiteTextArea
                            id={"message"}
                            name={"message"}
                            value={message}
                            inputValueSetter={setMessage}
                            placeholder={textareaPlaceholder}
                        />

                        <div className="flex justify-end w-full">
                            <button
                                type="submit"
                                className="bg-orange4 text-white w-full lg:w-auto lg:px-24 py-3 rounded-full"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

    return ombudsmanEmailSended.value
        ? <SendingConfirmation signalToChange={ombudsmanEmailSended} />
        : formComponent;
}
