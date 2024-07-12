import Image from "apps/website/components/Image.tsx";
import { careJourneyCardsInfos } from "site/helpers/Site/care-journey-cards.ts";
import CareJourneyCard from "site/islands/Site/care-journey-card.tsx";
import { signal, useSignal } from "@preact/signals";
import ColorfullButton from "site/components/Site/colorfull-btn.tsx";
import { useEffect, useState } from "preact/hooks";

export default function CareJourneyIsland() {
    const activeCard = useSignal(1);
    const [animationClass, setAnimationClass] = useState("");

    const handleNext = () => {
        setAnimationClass("slide-left");
        setTimeout(() => {
            activeCard.value = (activeCard.value + 1) %
                (careJourneyCardsInfos.length + 1);
            setAnimationClass("");
        }, 500);
    };

    const handlePrev = () => {
        setAnimationClass("slide-right");
        setTimeout(() => {
            activeCard.value =
                (activeCard.value - 1 + careJourneyCardsInfos.length) %
                careJourneyCardsInfos.length;
            setAnimationClass("");
        }, 500);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimationClass("");
        }, 500); // Duração da animação

        return () => clearTimeout(timeout);
    }, [animationClass]);

    return (
        <div className="w-full py-20 bg-yellow overflow-x-hidden">
            <div className="max-w-[1400px] mx-auto flex gap-36">
                <div className="flex flex-col font-sora gap-10 w-1/3">
                    <div className="flex flex-col gap-5">
                        <span className="text-pink1 text-4xl font-bold">
                            Jornada de <br />Cuidado:
                        </span>
                        <span className="text-purple text-2xl">
                            acompanhamento de <br /> saúde individualizado.
                        </span>
                    </div>
                    <button className="flex items-center text-darkPurple gap-1">
                        Conheça mais
                        <Image
                            src={"/Site/arrow-right-purple.svg"}
                            alt="icon"
                        />
                    </button>
                </div>
                <div className="flex gap-5 w-2/3">
                    <div className="flex">
                        <CareJourneyCard
                            key={careJourneyCardsInfos[0].id}
                            card={careJourneyCardsInfos[0]}
                            activeCard={activeCard}
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                            cardsLength={careJourneyCardsInfos.length}
                            isCurrent={careJourneyCardsInfos[0].id ===
                                activeCard.value}
                        />
                    </div>
                    <div className={`flex gap-5 ${animationClass}`}>
                        {careJourneyCardsInfos.slice(1).map((card) => (
                            <CareJourneyCard
                                key={card.id}
                                card={card}
                                activeCard={activeCard}
                                handleNext={handleNext}
                                handlePrev={handlePrev}
                                cardsLength={careJourneyCardsInfos.length}
                                isCurrent={card.id === activeCard.value}
                            />
                        ))}
                        <div className="bg-white flex flex-col gap-10 flex-shrink-0 justify-center rounded-3xl w-72 mx-2 px-10 py-14">
                            <span>
                                O cuidado não acaba <br /> aqui, ele começa.
                            </span>
                            <a href="#" className="">
                                Descubra como fazemos diferente
                            </a>
                            <ColorfullButton
                                bgColor="pink"
                                textColor="white"
                                text={"Saiba mais"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
