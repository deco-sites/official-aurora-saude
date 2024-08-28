import SiteInputText from "site/components/Site/site-input-text.tsx";
import SiteInputSelect from "site/components/Site/site-input-select.tsx";
import SiteUFSelect from "site/components/Site/site-uf-select.tsx";
import SiteCitiesSelect from "site/components/Site/site-cities-select.tsx";
import { ufsOptions } from "site/helpers/Site/ufsOptions.ts";
import { citiesOptions } from "site/helpers/Simulador/cities.ts";
import { useEffect, useState } from "preact/hooks";
import { indicationsOptions } from "site/helpers/Site/indications.ts";
import { invoke } from "../../runtime.ts";
import SendingConfirmation from "site/components/Site/sending-confirmation.tsx";
import { signal } from "@preact/signals";
import { PhoneMask } from "site/helpers/Simulador/phoneMask.ts";
import CustomSelect from "site/components/Site/custom-select.tsx";

export interface RequestQuoteIslandProps {
    recipientsEmail: string;
    subject: string;
}

const requestQuoteEmailSended = signal(false);

export default function RequestQuoteIsland(
    { recipientsEmail, subject }: RequestQuoteIslandProps,
) {
    const [namePlaceholder, setNamePlaceholder] = useState("Escreva aqui");
    const [emailPlaceholder, setEmailPlaceholder] = useState(
        "seuemail@email.com",
    );
    const [telPlaceholder, setTelPlaceholder] = useState("(xx) x xxxx xxxx");
    const [UFPlaceholder, setUFPlaceholder] = useState("MG");
    const [cityPlaceholder, setCityPlaceholder] = useState("Belo Horizonte");
    const [whereMeetAuroraPlaceHolder, setWhereMeetAuroraPlaceHolder] =
        useState(
            "Selecione",
        );

    const [ufs, setUfs] = useState([]);
    //const [selectedUf, setSelectedUf] = useState("");
    const [cities, setCities] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [UF, setUF] = useState("");
    const [city, setCity] = useState("");
    const [whereMeetAurora, setWhereMeetAurora] = useState("");
    const [customWhereMeetAurora, setCustomWhereMeetAurora] = useState("");

    // Buscar UFs na API do IBGE
    useEffect(() => {
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
            .then((response) => response.json())
            .then((data) => {
                setUfs(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar UFs: ", error);
            });
    }, []);

    //Faz o primeiro fetch usando MG como UF padrão
    useEffect(() => {
        fetch(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/MG/municipios`,
        )
            .then((response) => response.json())
            .then((data) => {
                setCities(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar cidades: ", error);
            });
    }, []);

    // Atualizar as cidades sempre que a UF selecionada mudar
    useEffect(() => {
        if (UF) {
            fetch(
                `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`,
            )
                .then((response) => response.json())
                .then((data) => {
                    setCities(data);
                })
                .catch((error) => {
                    console.error("Erro ao buscar cidades: ", error);
                });
        } else {
            setCities([]);
        }
    }, [UF]);

    useEffect(() => {
        const updateNamePlaceholder = () => {
            if (globalThis.innerWidth < 640) {
                setNamePlaceholder("Nome completo");
                setEmailPlaceholder("E-mail");
                setTelPlaceholder("Telefone");
                setUFPlaceholder("UF");
                setCityPlaceholder("Cidade");
                setWhereMeetAuroraPlaceHolder(
                    "Por onde você conheceu a aurora?",
                );
            } else {
                setNamePlaceholder("Escreva aqui");
                setEmailPlaceholder("seuemail@email.com");
                setTelPlaceholder("(xx) x xxxx xxxx");
                setUFPlaceholder("MG");
                setCityPlaceholder("Belo Horizonte");
                setWhereMeetAuroraPlaceHolder("Selecione");
            }
        };

        updateNamePlaceholder(); // Set initial placeholder based on screen size
        globalThis.addEventListener("resize", updateNamePlaceholder);

        return () =>
            globalThis.removeEventListener("resize", updateNamePlaceholder);
    }, []);

    const sendData = `
        Nome: ${name}
        E-mail: ${email}
        Telefone: ${tel}
        UF: ${UF}
        Cidade: ${city}
        Por onde conheceu a Aurora: ${whereMeetAurora}
    `;

    const handleSubmit = async (e) => {
        e.preventDefault();
        requestQuoteEmailSended.value = true;
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
                    className="flex flex-col gap-4 lg:gap-11"
                    onSubmit={handleSubmit}
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
                            value={tel}
                            inputValueSetter={setTel}
                            label={"Telefone"}
                            placeholder={telPlaceholder}
                            mask={PhoneMask}
                            maxLength={16}
                            wfull
                        />
                    </div>
                    <div className="flex mb-3 gap-4 lg:gap-11">
                        <div className="hidden lg:flex">
                            <SiteInputText
                                id={"tel"}
                                name={"tel"}
                                value={tel}
                                inputValueSetter={setTel}
                                label={"Telefone"}
                                placeholder={telPlaceholder}
                                mask={PhoneMask}
                                maxLength={16}
                                wfull
                            />
                        </div>
                        <SiteUFSelect
                            id={"uf"}
                            name={"uf"}
                            label={"UF:"}
                            value={UF}
                            inputValueSetter={setUF}
                            options={ufs}
                            placeholder={UFPlaceholder}
                            wfull
                        />
                        <SiteCitiesSelect
                            id={"city"}
                            name={"city"}
                            label={"Cidade:"}
                            value={city}
                            inputValueSetter={setCity}
                            options={cities}
                            placeholder={cities[0]?.nome}
                            wfull
                        />
                    </div>

                    {
                        /*
                    <div className="w-full lg:w-[40%]">
                        <SiteInputSelect
                            id={"whereDidYouMeetAurora"}
                            name={"whereDidYouMeetAurora"}
                            label={"Por onde você conheceu a Aurora?"}
                            value={whereMeetAurora}
                            inputValueSetter={setWhereMeetAurora}
                            options={indicationsOptions}
                            placeholder={whereMeetAuroraPlaceHolder}
                            wfull
                        />
                    </div>
                    */
                    }

                    <div className="w-full lg:w-[45%]">
                        <CustomSelect
                            options={indicationsOptions}
                            label={"Por onde você conheceu a Aurora?"}
                            value={customWhereMeetAurora}
                            inputValueSetter={setCustomWhereMeetAurora}
                        />
                    </div>

                    <div className="flex justify-end w-full">
                        <button
                            type="submit"
                            className="bg-orange4 text-white w-full lg:w-auto lg:px-24 py-3 rounded-full"
                        >
                            Solicite uma cotação
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    return requestQuoteEmailSended.value
        ? <SendingConfirmation signalToChange={requestQuoteEmailSended} />
        : formComponent;
}
