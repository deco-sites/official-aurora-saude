import SiteInputSelect from "site/components/Site/site-input-select.tsx";
import { ufsOptions } from "site/helpers/Site/ufsOptions.ts";
import { plansCardsInfos } from "site/helpers/Site/plans-cards-infos.ts";
import Image from "apps/website/components/Image.tsx";
import ColorfullButton from "site/components/Site/colorfull-btn.tsx";

export default function PlansSection() {
    const bgColors = {
        yellow: "bg-yellow",
        orange: "bg-orange1",
        green: "bg-aquagreen",
    };

    const textColors = {
        white: "text-white",
        yellow: "text-yellow",
        orange: "text-orange1",
        green: "text-aquagreen2",
        black: "text-black text-opacity-45",
    };

    return (
        <>
            <div className="flex justify-center px-10 lg:px-0 bg-gray4">
                <div className="lg:max-w-[1400px] w-full pt-12 pb-16 lg:py-32">
                    <div className="flex flex-col">
                        <div className="flex w-full justify-between mb-36">
                            <span className="text-2xl text-orange4 font-bold">
                                Escolha um plano<br />{" "}
                                para estar sempre junto<br /> de você.
                            </span>

                            <div>
                                <SiteInputSelect
                                    id={"uf"}
                                    name={"uf"}
                                    label={"Região:"}
                                    options={ufsOptions}
                                    placeholder={"Belo Horizonte e RMBH"}
                                />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            {plansCardsInfos.map((card) => (
                                <div
                                    className={`relative flex flex-1 flex-col ${
                                        bgColors[card.bgColor]
                                    } rounded-3xl px-20 pb-16 pt-48`}
                                >
                                    <Image
                                        src={card.cardImage}
                                        alt={card.altImage}
                                        className="w-[550px] h-[400px] object-cover absolute -top-44 right-0"
                                    />
                                    <span
                                        className={`font-sora text-[60px] mb-6 ${
                                            textColors[card.titleColor]
                                        }`}
                                    >
                                        {card.title}
                                    </span>
                                    <span
                                        className={`${
                                            textColors[card.textColor]
                                        }`}
                                        dangerouslySetInnerHTML={{
                                            __html: card.text,
                                        }}
                                    >
                                    </span>
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="flex-1"></div>
                                        <div className="flex justify-center mt-4">
                                            <ColorfullButton
                                                text={"Solicite sua cotação"}
                                                link={"#"}
                                                bgColor={card.buttonColor}
                                                textColor={card.textButtonColor}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
