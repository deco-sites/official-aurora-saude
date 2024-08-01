import SiteInputText from "site/components/Site/site-input-text.tsx";
import { ufsOptions } from "site/helpers/Site/ufsOptions.ts";
import { citiesOptions } from "site/helpers/Simulador/cities.ts";
import SiteInputSelect from "site/components/Site/site-input-select.tsx";
import MobileInputSelectWithLabel from "site/components/Site/mobile-input-select-with-label.tsx";
import { useEffect, useState } from "preact/hooks";
import { yesOrNoOptions } from "site/helpers/Site/yes-or-no.ts";

export default function BeABrokerFormIsland() {
    const [brokerNamePlaceholder, setbrokerNamePlaceholder] = useState(
        "Escreva aqui",
    );
    const [responsibleNamePlaceholder, setresponsibleNamePlaceholder] =
        useState("Escreva aqui");
    const [emailPlaceholder, setEmailPlaceholder] = useState(
        "seuemail@email.com",
    );
    const [cnpjPlaceholder, setCnpjPlaceholder] = useState(
        "xx. xxx. xxx/xxxx-xx",
    );
    const [telPlaceholder, setTelPlaceholder] = useState("(xx) x xxxx xxxx");
    const [UFPlaceholder, setUFPlaceholder] = useState("MG");
    const [cityPlaceholder, setCityPlaceholder] = useState("Belo Horizonte");
    const [addressPlaceholder, setAddressPlaceholder] = useState(
        "Rua, Bairro e Número",
    );
    const [cepPlaceholder, setCepPlaceholder] = useState("xx.xxx-xxx");
    const [employeesQtyPlaceholder, setemployeesQtyPlaceholder] = useState(
        "Quantos funcionários tem a sua corretora?",
    );

    const [customerBasePlaceholder, setcustomerBasePlaceholder] = useState(
        "Não",
    );
    const [haveSales, sethaveSales] = useState(
        "Não",
    );

    useEffect(() => {
        const updateNamePlaceholder = () => {
            if (window.innerWidth < 640) {
                setbrokerNamePlaceholder("Nome da Corretora");
                setresponsibleNamePlaceholder("Nome do Responsável");
                setEmailPlaceholder("E-mail");
                setCnpjPlaceholder("CNPJ");
                setTelPlaceholder("Telefone");
                setUFPlaceholder("UF");
                setCityPlaceholder("Cidade");
                setAddressPlaceholder("Endereço");
                setCepPlaceholder("CEP");
                setemployeesQtyPlaceholder(
                    "Quantos funcionários tem a sua corretora?",
                );
                setcustomerBasePlaceholder("Não");
                sethaveSales("Não");
            } else {
                setbrokerNamePlaceholder("Escreva aqui");
                setresponsibleNamePlaceholder("Escreva aqui");
                setEmailPlaceholder("seuemail@email.com");
                setCnpjPlaceholder("xx. xxx. xxx/xxxx-xx");
                setTelPlaceholder("Telefone");
                setUFPlaceholder("UF");
                setCityPlaceholder("Cidade");
                setAddressPlaceholder("Endereço");
                setCepPlaceholder("xx.xxx-xxx");
                setemployeesQtyPlaceholder("Escreva aqui");
                setcustomerBasePlaceholder("Não");
                sethaveSales("Não");
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
                <div className="lg:max-w-[1400px] w-full pt-12 pb-16">
                    <div className="lg:px-48 flex flex-col gap-16">
                        <span className="font-sora font-semibold text-orange4 text-2xl">
                            Seja um corretor<br /> parceiro
                        </span>

                        <div className="flex flex-col gap-4 lg:gap-11">
                            <SiteInputText
                                id={"brokerName"}
                                name={"brokerName"}
                                label={"Nome da Corretora"}
                                placeholder={brokerNamePlaceholder}
                                wfull
                            />
                            <SiteInputText
                                id={"protocol"}
                                name={"protocol"}
                                label={"Nome do Responsável"}
                                placeholder={responsibleNamePlaceholder}
                                wfull
                            />
                            <div className="flex flex-col lg:flex-row gap-4 lg:gap-9">
                                <SiteInputText
                                    id={"email"}
                                    name={"email"}
                                    label={"E-mail"}
                                    placeholder={emailPlaceholder}
                                    wfull
                                />
                                <SiteInputText
                                    id={"cnpj"}
                                    name={"cnpj"}
                                    label={"CNPJ"}
                                    placeholder={cnpjPlaceholder}
                                    wfull
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4 lg:gap-9">
                                <SiteInputText
                                    id={"tel"}
                                    name={"tel"}
                                    label={"Telefone"}
                                    placeholder={telPlaceholder}
                                />

                                <div className="flex flex-col-reverse lg:hidden w-full gap-4 lg:gap-9">
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
                                <div className="flex gap-4 w-full lg:gap-9">
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
                            </div>
                            <div className="hidden lg:flex flex-col lg:flex-row w-full gap-4 lg:gap-9">
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
                            <SiteInputText
                                id={"cep"}
                                name={"cep"}
                                label={"Quantos funcionários tem a sua corretora?"}
                                placeholder={employeesQtyPlaceholder}
                                wfull
                            />
                            <div className="hidden lg:flex flex-col gap-9">
                                <SiteInputSelect
                                    id={"city"}
                                    name={"city"}
                                    label={"Já possui carteira de clientes?"}
                                    options={yesOrNoOptions}
                                    placeholder={customerBasePlaceholder}
                                />
                                <SiteInputSelect
                                    id={"city"}
                                    name={"city"}
                                    label={"Possui venda para lançar na abertura do código?"}
                                    options={yesOrNoOptions}
                                    placeholder={haveSales}
                                />
                            </div>
                            <div className="flex flex-col lg:hidden">
                                <MobileInputSelectWithLabel
                                    id={"city"}
                                    name={"city"}
                                    label={"Já possui carteira de clientes?"}
                                    options={yesOrNoOptions}
                                    placeholder={customerBasePlaceholder}
                                />
                                <MobileInputSelectWithLabel
                                    id={"city"}
                                    name={"city"}
                                    label={"Possui venda para lançar na<br /> abertura do código?"}
                                    options={yesOrNoOptions}
                                    placeholder={haveSales}
                                />
                            </div>
                            <div className="flex justify-end w-full">
                                <button className="bg-orange4 text-white w-full lg:w-auto lg:px-24 py-3 rounded-full">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
