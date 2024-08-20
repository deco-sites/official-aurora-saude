import { ufsOptions } from "site/helpers/Site/ufsOptions.ts";
import { plansCardsInfos } from "site/helpers/Site/plans-cards-infos.ts";
import Image from "apps/website/components/Image.tsx";
import ColorfullButton from "site/components/Site/colorfull-btn.tsx";
import { useState } from "preact/hooks";

export default function PlansSectionIsland() {
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

    const [regionValue, setRegionValue] = useState();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setRegionValue(value);
    };

    return (
        <>
            <div className="flex justify-center px-10 lg:px-0 bg-gray4">
                <div className="lg:max-w-[1400px] w-full pt-12 pb-16 lg:py-32">
                    <div className="flex flex-col">
                        <div className="flex flex-col lg:flex-row w-full justify-between mb-48">
                            <span className="text-2xl text-orange4 font-bold lg:pl-20">
                                Escolha um plano<br />{" "}
                                para estar sempre junto<br /> de você.
                            </span>
                            <div className="flex gap-6 items-center z-50">
                                <label
                                    className="hidden lg:flex text-orange1 text-nowrap"
                                    htmlFor="regionValue"
                                >
                                    Região:
                                </label>
                                <div
                                    className={`relative w-full lg:w-auto`}
                                >
                                    <select
                                        className={`px-6 py-5 lg:py-2 lg:rounded-md bg-white bg-opacity-50 outline-none text-[#9ca3be] appearance-none pr-8 w-full`}
                                        id="regionValue"
                                        name="regionValue"
                                        value={regionValue}
                                        onChange={handleChange}
                                    >
                                        <option
                                            value=""
                                            selected
                                            disabled
                                            hidden
                                        >
                                            Belo Horizonte e RMBH
                                        </option>
                                        {ufsOptions.map((op) => (
                                            <option
                                                key={op.value}
                                                value={op.value}
                                            >
                                                {op.text}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <svg
                                            width="14"
                                            height="7"
                                            viewBox="0 0 16 9"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                                                fill="black"
                                                fill-opacity="0.25"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-44 lg:gap-5">
                            {plansCardsInfos.map((card) => (
                                <div
                                    className={`relative flex flex-1 flex-col ${
                                        bgColors[card.bgColor]
                                    } rounded-3xl px-11 lg:px-20 pb-16 lg:pb-24 pt-32 lg:pt-44`}
                                >
                                    <Image
                                        src={card.cardImage}
                                        alt={card.altImage}
                                        className="w-[550px] h-[400px] lg:w-[650px] lg:h-[450px] object-cover absolute -top-60 right-0"
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
                                        <div className="flex justify-center mt-14">
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
