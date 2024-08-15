import SiteInputText from "site/components/Site/site-input-text.tsx";
import { ufsOptions } from "site/helpers/Site/ufsOptions.ts";
import { citiesOptions } from "site/helpers/Simulador/cities.ts";
import SiteInputSelect from "site/components/Site/site-input-select.tsx";
import MobileInputSelectWithLabel from "site/components/Site/mobile-input-select-with-label.tsx";
import { useEffect, useState } from "preact/hooks";
import { yesOrNoOptions } from "site/helpers/Site/yes-or-no.ts";
import { invoke } from "../../runtime.ts";
import { signal } from "@preact/signals";
import SendingConfirmation from "site/components/Site/sending-confirmation.tsx";
import { PhoneMask } from "site/helpers/Simulador/phoneMask.ts";
import { cepMask } from "site/helpers/Simulador/cepMask.ts";
import { cnpjMask } from "site/helpers/Simulador/cnpjMask.ts";

export interface RequestQuoteIslandProps {
    recipientsEmail: string;
    subject: string;
}

const beABrokerEmailSended = signal(false);

export default function BeABrokerFormIsland(
    { recipientsEmail, subject }: RequestQuoteIslandProps,
) {
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
    const [haveSalesPlaceholder, sethaveSalesPlaceholder] = useState(
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
                sethaveSalesPlaceholder("Não");
            } else {
                setbrokerNamePlaceholder("Escreva aqui");
                setresponsibleNamePlaceholder("Escreva aqui");
                setEmailPlaceholder("seuemail@email.com");
                setCnpjPlaceholder("xx.xxx.xxx/xxxx-xx");
                setTelPlaceholder("(xx) x xxxx xxxx");
                setUFPlaceholder("Selecione");
                setCityPlaceholder("Selecione");
                setAddressPlaceholder("Rua, Número e Bairro");
                setCepPlaceholder("xx.xxx-xxx");
                setemployeesQtyPlaceholder("Escreva aqui");
                setcustomerBasePlaceholder("Não");
                sethaveSalesPlaceholder("Não");
            }
        };

        updateNamePlaceholder(); // Set initial placeholder based on screen size
        globalThis.addEventListener("resize", updateNamePlaceholder);

        return () =>
            globalThis.removeEventListener("resize", updateNamePlaceholder);
    }, []);

    const [brokerName, setBrokerName] = useState("");
    const [responsibleName, setResponsibleName] = useState("");
    const [email, setEmail] = useState("");
    const [cnpj, setCNPJ] = useState("");
    const [tel, setTel] = useState("");
    const [UF, setUF] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [cep, setCep] = useState("");
    const [employeesQty, setEmployeesQty] = useState("");
    const [customerBase, setCustomerBase] = useState("");
    const [haveSales, setHaveSales] = useState("");

    const sendData = `
        Nome da Corretora: ${brokerName}
        Nome do Responsável: ${responsibleName}
        E-mail: ${email}
        CNPJ: ${cnpj}
        Telefone: ${tel}
        UF: ${UF}
        Cidade: ${city}
        Endereço: ${address}
        Cep: ${cep}
        Quantidade de funcionários da corretora: ${employeesQty}
        Já possui carteira de clientes? ${customerBase}
        Possui venda para lançar na abertura do código? ${haveSales}
    `;

    const handleSubmit = async (e) => {
        e.preventDefault();
        beABrokerEmailSended.value = true;
        await invoke.site.actions.sendEmail({
            recipientsEmail: recipientsEmail,
            subject: subject,
            data: sendData,
        });
    };

    const formComponent = (
        <>
            <div className="flex justify-center px-10 lg:px-0">
                <div className="lg:max-w-[1400px] w-full pt-12 pb-16">
                    <div className="lg:px-48 flex flex-col gap-16">
                        <span className="font-sora font-semibold text-orange4 text-2xl">
                            Seja um corretor<br /> parceiro
                        </span>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4 lg:gap-11"
                        >
                            <SiteInputText
                                id={"brokerName"}
                                name={"brokerName"}
                                label={"Nome da Corretora"}
                                value={brokerName}
                                inputValueSetter={setBrokerName}
                                placeholder={brokerNamePlaceholder}
                                wfull
                            />
                            <SiteInputText
                                id={"responsibleName"}
                                name={"responsibleName"}
                                label={"Nome do Responsável"}
                                value={responsibleName}
                                inputValueSetter={setResponsibleName}
                                placeholder={responsibleNamePlaceholder}
                                wfull
                            />
                            <div className="flex flex-col lg:flex-row gap-4 lg:gap-9">
                                <SiteInputText
                                    id={"email"}
                                    name={"email"}
                                    label={"E-mail"}
                                    value={email}
                                    inputValueSetter={setEmail}
                                    placeholder={emailPlaceholder}
                                    wfull
                                />
                                <SiteInputText
                                    id={"cnpj"}
                                    name={"cnpj"}
                                    label={"CNPJ"}
                                    value={cnpj}
                                    inputValueSetter={setCNPJ}
                                    mask={cnpjMask}
                                    maxLength={18}
                                    placeholder={cnpjPlaceholder}
                                    wfull
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4 lg:gap-9">
                                <SiteInputText
                                    id={"tel"}
                                    name={"tel"}
                                    label={"Telefone"}
                                    value={tel}
                                    inputValueSetter={setTel}
                                    mask={PhoneMask}
                                    maxLength={16}
                                    placeholder={telPlaceholder}
                                />

                                <div className="flex flex-col-reverse lg:hidden w-full gap-4 lg:gap-9">
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
                                        mask={cepMask}
                                        maxLength={10}
                                        placeholder={cepPlaceholder}
                                        wfull
                                    />
                                </div>
                                <div className="flex gap-4 w-full lg:gap-9">
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
                            </div>
                            <div className="hidden lg:flex flex-col lg:flex-row w-full gap-4 lg:gap-9">
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
                                    mask={cepMask}
                                    maxLength={10}
                                    placeholder={cepPlaceholder}
                                    wfull
                                />
                            </div>
                            <SiteInputText
                                id={"employeesQty"}
                                name={"employeesQty"}
                                label={"Quantos funcionários tem a sua corretora?"}
                                value={employeesQty}
                                inputValueSetter={setEmployeesQty}
                                placeholder={employeesQtyPlaceholder}
                                wfull
                            />
                            <div className="hidden lg:flex flex-col gap-9">
                                <SiteInputSelect
                                    id={"customerBase"}
                                    name={"customerBase"}
                                    label={"Já possui carteira de clientes?"}
                                    value={customerBase}
                                    inputValueSetter={setCustomerBase}
                                    options={yesOrNoOptions}
                                    placeholder={customerBasePlaceholder}
                                />
                                <SiteInputSelect
                                    id={"haveSales"}
                                    name={"haveSales"}
                                    label={"Possui venda para lançar na abertura do código?"}
                                    value={haveSales}
                                    inputValueSetter={setHaveSales}
                                    options={yesOrNoOptions}
                                    placeholder={haveSalesPlaceholder}
                                />
                            </div>
                            <div className="flex flex-col lg:hidden">
                                <MobileInputSelectWithLabel
                                    id={"customerBase"}
                                    name={"customerBase"}
                                    label={"Já possui carteira de clientes?"}
                                    value={customerBase}
                                    inputValueSetter={setCustomerBase}
                                    options={yesOrNoOptions}
                                    placeholder={customerBasePlaceholder}
                                />
                                <MobileInputSelectWithLabel
                                    id={"haveSales"}
                                    name={"haveSales"}
                                    label={"Possui venda para lançar na<br /> abertura do código?"}
                                    value={haveSales}
                                    inputValueSetter={setHaveSales}
                                    options={yesOrNoOptions}
                                    placeholder={haveSales}
                                />
                            </div>
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
            </div>
        </>
    );

    return beABrokerEmailSended.value
        ? <SendingConfirmation signalToChange={beABrokerEmailSended} />
        : formComponent;
}
