import SiteInputText from "site/components/Site/site-input-text.tsx";
import SiteInputSelect from "site/components/Site/site-input-select.tsx";
import { ufsOptions } from "site/helpers/Site/ufsOptions.ts";
import { citiesOptions } from "site/helpers/Simulador/cities.ts";
import { useEffect, useState } from "preact/hooks";

export default function RequestQuoteIsland() {
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

    useEffect(() => {
        const updateNamePlaceholder = () => {
            if (window.innerWidth < 640) {
                setNamePlaceholder("Nome completo");
                setEmailPlaceholder("E-mail");
                setTelPlaceholder("Telefone");
                setUFPlaceholder("UF");
                setCityPlaceholder("Estado");
                setWhereMeetAuroraPlaceHolder("Selecione");
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
        window.addEventListener("resize", updateNamePlaceholder);

        return () =>
            window.removeEventListener("resize", updateNamePlaceholder);
    }, []);

    return (
        <div className="flex justify-center px-10 lg:px-0">
            <div className="lg:max-w-[1400px] w-full pt-12 pb-16 lg:py-32">
                <div className="flex flex-col gap-11">
                    <span className="lg:hidden font-bold text-xl text-gray3">
                        Informações de contato:
                    </span>
                    <SiteInputText
                        id={"name"}
                        name={"name"}
                        label={"Nome"}
                        placeholder={namePlaceholder}
                        wfull
                    />
                    <SiteInputText
                        id={"email"}
                        name={"email"}
                        label={"E-mail"}
                        placeholder={emailPlaceholder}
                        wfull
                    />

                    <div className="block lg:hidden w-full">
                        <SiteInputText
                            id={"tel"}
                            name={"tel"}
                            label={"Telefone"}
                            placeholder={telPlaceholder}
                            wfull
                        />
                    </div>
                    <div className="flex mb-3 gap-8">
                        <div className="hidden lg:block w-full">
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

                    <SiteInputSelect
                        id={"whereDidYouMeetAurora"}
                        name={"whereDidYouMeetAurora"}
                        label={"Por onde você conheceu a Aurora?"}
                        options={citiesOptions}
                        placeholder={whereMeetAuroraPlaceHolder}
                    />

                    <div className="flex justify-end w-full">
                        <button className="bg-orange4 text-white w-full lg:w-auto lg:px-24 py-3 rounded-full">
                            Solicite uma cotação
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
