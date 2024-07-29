import Image from "apps/website/components/Image.tsx";
import { careJourneyCardsInfos } from "site/helpers/Site/care-journey-cards.ts";
import CareJourneyCard from "site/islands/Site/care-journey-card.tsx";
import { signal, useSignal } from "@preact/signals";
import ColorfullButton from "site/components/Site/colorfull-btn.tsx";
import { useEffect, useState } from "preact/hooks";
import { Device } from "apps/website/matchers/device.ts";

export default function CareJourneyIsland({ device }: Device) {
    console.log("luquinhaa", device);
    const activeCard = useSignal(1);
    const [animationClass, setAnimationClass] = useState("");
    const [leftCards, setLeftCards] = useState([careJourneyCardsInfos[0]]);
    const [rightCards, setRightCards] = useState(
        careJourneyCardsInfos.slice(1),
    );
    const [showControls, setShowControls] = useState("");

    const handleNext = () => {
        setTimeout(() => {
            if (rightCards.length > 0) {
                const nextCard = rightCards[0];
                setRightCards(rightCards.slice(1));
                setLeftCards([...leftCards, nextCard]);

                activeCard.value = (activeCard.value + 1) %
                    (careJourneyCardsInfos.length + 1);
            }
            setAnimationClass("");
            setShowControls("control-buttons");
        }, 500);
        setShowControls("control-buttons-hidden");
        setAnimationClass("slide-left");
    };

    const handlePrev = () => {
        if (leftCards.length > 1) {
            const prevCard = leftCards[leftCards.length - 1];
            setRightCards([prevCard, ...rightCards]);
            setLeftCards(leftCards.slice(0, -1));

            activeCard.value =
                (activeCard.value - 1 + careJourneyCardsInfos.length) %
                careJourneyCardsInfos.length;
        }
        setShowControls("control-buttons");
        setAnimationClass("slide-right");
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimationClass("");
        }, 500); // Duração da animação

        return () => clearTimeout(timeout);
    }, [animationClass]);

    return (
        <div className="w-full py-20 bg-yellow overflow-x-hidden">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-28 lg:gap-36">
                <div className="flex flex-col flex-1 px-16 font-sora gap-10 lg:w-1/3">
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
                <div className="pl-8 lg:pl-0 flex gap-5 lg:w-2/3">
                    <div className="flex">
                        {leftCards.length > 0 && (
                            <CareJourneyCard
                                key={leftCards[leftCards.length - 1].id}
                                card={leftCards[leftCards.length - 1]}
                                activeCard={activeCard}
                                handleNext={handleNext}
                                handlePrev={handlePrev}
                                cardsLength={careJourneyCardsInfos.length}
                                isCurrent={leftCards[leftCards.length - 1]
                                    .id === activeCard.value}
                                showControls={showControls}
                                device={device}
                            />
                        )}
                    </div>
                    <div className={`flex gap-5 ${animationClass}`}>
                        {rightCards.map((card) => (
                            <CareJourneyCard
                                key={card.id}
                                card={card}
                                activeCard={activeCard}
                                handleNext={handleNext}
                                handlePrev={handlePrev}
                                cardsLength={careJourneyCardsInfos.length}
                                isCurrent={card.id === activeCard.value}
                                showControls={showControls}
                            />
                        ))}
                        <div className="bg-white flex flex-col text-center gap-10 flex-shrink-0 items-center justify-center rounded-3xl w-[550px] mx-2 px-10 py-14">
                            <span className="font-sora text-4xl text-pink1">
                                O cuidado não acaba <br /> aqui, ele começa.
                            </span>
                            <a href="#" className="text-darkPurple">
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
