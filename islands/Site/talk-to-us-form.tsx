import SiteInputText from "site/components/Site/site-input-text.tsx";
import SiteInputSelect from "site/components/Site/site-input-select.tsx";
import { ufsOptions } from "site/helpers/Site/ufsOptions.ts";
import { citiesOptions } from "site/helpers/Simulador/cities.ts";
import SiteTextArea from "site/components/Site/text-area.tsx";
import { useEffect, useState } from "preact/hooks";
import { invoke } from "../../runtime.ts";
import { signal } from "@preact/signals";
import SendingConfirmation from "site/components/Site/sending-confirmation.tsx";
import { PhoneMask } from "site/helpers/Simulador/phoneMask.ts";

export interface RequestQuoteIslandProps {
    recipientsEmail: string;
    subject: string;
}

const talkToUsEmailSended = signal(false);

export default function TalkToUsIsland(
    { recipientsEmail, subject }: RequestQuoteIslandProps,
) {
    const [namePlaceholder, setNamePlaceholder] = useState("Escreva aqui");
    const [emailPlaceholder, setEmailPlaceholder] = useState(
        "seuemail@email.com",
    );
    const [telPlaceholder, setTelPlaceholder] = useState("(xx) x xxxx xxxx");
    const [UFPlaceholder, setUFPlaceholder] = useState("MG");
    const [cityPlaceholder, setCityPlaceholder] = useState("Belo Horizonte");
    const [textAreaPlaceHolder, setTextAreaPlaceHolder] = useState(
        "Escreva sua mensagem aqui",
    );

    useEffect(() => {
        const updateNamePlaceholder = () => {
            if (window.innerWidth < 640) {
                setNamePlaceholder("Nome completo");
                setEmailPlaceholder("E-mail");
                setTelPlaceholder("Telefone");
                setUFPlaceholder("UF");
                setCityPlaceholder("Cidade");
                setTextAreaPlaceHolder("Escreva sua mensagem aqui");
            } else {
                setNamePlaceholder("Escreva aqui");
                setEmailPlaceholder("seuemail@email.com");
                setTelPlaceholder("(xx) x xxxx xxxx");
                setUFPlaceholder("MG");
                setCityPlaceholder("Belo Horizonte");
                setTextAreaPlaceHolder("Escreva sua mensagem aqui");
            }
        };

        updateNamePlaceholder(); // Set initial placeholder based on screen size
        globalThis.addEventListener("resize", updateNamePlaceholder);

        return () =>
            globalThis.removeEventListener("resize", updateNamePlaceholder);
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [UF, setUF] = useState("");
    const [city, setCity] = useState("");
    const [message, setMessage] = useState("");

    const sendData = `
        Nome: ${name}
        E-mail: ${email}
        Telefone: ${tel}
        UF: ${UF}
        Cidade: ${city}
        Mensagem: ${message}
    `;

    const handleSubmit = async (e) => {
        e.preventDefault();
        talkToUsEmailSended.value = true;
        await invoke.site.actions.sendEmail({
            recipientsEmail: recipientsEmail,
            subject: subject,
            data: sendData,
        });
    };

    const formComponent = (
        <div className="flex justify-center px-10 lg:px-0">
            <div className="lg:max-w-[1400px] w-full pt-12 pb-16 lg:py-32 lg:px-32">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 lg:gap-11"
                >
                    <span className="lg:hidden font-bold text-xl text-gray3">
                        Informações de contato:
                    </span>
                    <SiteInputText
                        id={"name"}
                        name={"name"}
                        label={"Nome"}
                        value={name}
                        inputValueSetter={setName}
                        placeholder={namePlaceholder}
                        wfull
                    />
                    <SiteInputText
                        id={"email"}
                        name={"email"}
                        label={"E-mail"}
                        value={email}
                        inputValueSetter={setEmail}
                        placeholder={emailPlaceholder}
                        wfull
                    />

                    <div className="block lg:hidden w-full">
                        <SiteInputText
                            id={"tel"}
                            name={"tel"}
                            label={"Telefone"}
                            value={tel}
                            inputValueSetter={setTel}
                            mask={PhoneMask}
                            maxLength={16}
                            placeholder={telPlaceholder}
                            wfull
                        />
                    </div>
                    <div className="flex mb-6 lg:mb-3 gap-4 lg:gap-11 border-b border-b-black pb-10 border-opacity-5 lg:pb-0 lg:border-none">
                        <div className="hidden lg:block">
                            <SiteInputText
                                id={"tel"}
                                name={"tel"}
                                label={"Telefone"}
                                value={tel}
                                inputValueSetter={setTel}
                                mask={PhoneMask}
                                maxLength={16}
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
                    <SiteTextArea
                        id={"message"}
                        name={"message"}
                        value={message}
                        inputValueSetter={setMessage}
                        placeholder={textAreaPlaceHolder}
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
    );

    return talkToUsEmailSended.value
        ? <SendingConfirmation signalToChange={talkToUsEmailSended} />
        : formComponent;
}
