import SiteInputText from "site/components/Site/site-input-text.tsx";
import SiteInputSelect from "site/components/Site/site-input-select.tsx";
import { ufsOptions } from "site/helpers/Site/ufsOptions.ts";
import { citiesOptions } from "site/helpers/Simulador/cities.ts";
import { useEffect, useState } from "preact/hooks";

export default function BeAProviderFormIsland() {
    const [socialReasonPlaceholder, setSocialReasonPlaceholder] = useState(
        "Escreva aqui",
    );
    const [responsibleNamePlaceholder, setResponsibleNamePlaceholder] =
        useState(
            "Escreva aqui",
        );
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

    useEffect(() => {
        const updateNamePlaceholder = () => {
            if (window.innerWidth < 640) {
                setSocialReasonPlaceholder("Razão Social");
                setResponsibleNamePlaceholder("Nome do Responsável");
                setEmailPlaceholder("Email");
                setCnpjPlaceholder("CNPJ");
                setTelPlaceholder("Telefone");
                setUFPlaceholder("UF");
                setCityPlaceholder("Cidade");
                setAddressPlaceholder("Endereço");
                setCepPlaceholder("CEP");
            } else {
                setSocialReasonPlaceholder("Escreva aqui");
                setResponsibleNamePlaceholder("Escreva aqui");
                setEmailPlaceholder("seuemail@email.com");
                setCnpjPlaceholder("xx. xxx. xxx/xxxx-xx");
                setTelPlaceholder("(xx) x xxxx xxxx");
                setUFPlaceholder("MG");
                setCityPlaceholder("Belo Horizonte");
                setAddressPlaceholder("Rua, Bairro e Número");
                setCepPlaceholder("xx.xxx-xxx");
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
                            Seja um prestador<br /> credenciado
                        </span>
                        <div className="flex flex-col gap-4 lg:max-w-[500px] text-black text-opacity-50">
                            <span>
                                Você, médico, clínica ou laboratório, é
                                apaixonado por cuidar da saúde das pessoas?
                                Aqui, na Aurora Saúde, acreditamos que a
                                colaboração é a chave para promover o bem-estar.
                            </span>
                            <span>
                                Convidamos você a se tornar um prestador
                                credenciado e fazer parte da nossa rede de
                                cuidados de qualidade. Junte-se a nós na missão
                                de oferecer atendimento excepcional e acessível
                                a mais pessoas.
                            </span>
                            <span>
                                Esse pode ser o começo de uma jornada conosco
                                para cuidar e estar junto de quem mais precisa!
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:gap-11">
                        <SiteInputText
                            id={"socialReason"}
                            name={"socialReason"}
                            label={"Razão Social"}
                            placeholder={socialReasonPlaceholder}
                            wfull
                        />
                        <SiteInputText
                            id={"name"}
                            name={"name"}
                            label={"Nome do Responsável"}
                            placeholder={responsibleNamePlaceholder}
                            wfull
                        />

                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-11">
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

                        <div className="flex gap-11">
                            <SiteInputText
                                id={"tel"}
                                name={"tel"}
                                label={"Telefone"}
                                placeholder={telPlaceholder}
                                wfull
                            />
                            <div className="hidden lg:flex gap-11 lg:w-3/5">
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
                                    options={ufsOptions}
                                    placeholder={cityPlaceholder}
                                    wfull
                                />
                            </div>
                        </div>
                        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-11">
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

                        <div className="flex gap-4 lg:hidden">
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
                                options={ufsOptions}
                                placeholder={cityPlaceholder}
                                wfull
                            />
                        </div>

                        <div className="flex justify-end w-full mt-4 lg:mt-0">
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
