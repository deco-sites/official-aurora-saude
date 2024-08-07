import { useEffect, useRef, useState } from "preact/hooks";
import Image from "apps/website/components/Image.tsx";
import ColorfullButton from "site/components/Site/colorfull-btn.tsx";
import PlanDetailsModal from "../../components/Site/plan-details-modal.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Benefit {
    phrase: string;
}

export interface Plan {
    cardImage: ImageWidget;
    planName: string;
    benefits: Benefit[];
    basePrice: string;
    bgColor: string;
    textColor: string;
    titleColor: string;
    buttonTextColor: string;
    buttonBgColor: string;
}

export interface DiscoverOurPlansIslandProps {
    sectionTitle: string;
    plans: Plan[];
}

export default function DiscoverOurPlansIsland(
    { sectionTitle, plans }: DiscoverOurPlansIslandProps,
) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isSlideToLeft, setIsSlideToLeft] = useState("");
    const [isSlideToRight, setIsSlideToRight] = useState("");
    const [isModalOpen, setIsModalOpen] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio > 0.25) {
                        setIsVisible(true);
                        if (window.innerWidth < 640) {
                            setIsSlideToLeft("card-slide-up");
                            setIsSlideToRight("card-slide-down");
                        } else {
                            setIsSlideToLeft("card-slide-left");
                            setIsSlideToRight("card-slide-right");
                        }
                    } else {
                        setIsVisible(false);
                        setIsSlideToLeft("");
                        setIsSlideToRight("");
                    }
                });
            },
            { threshold: [0.25, 0.5, 0.75, 1] },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            <div
                ref={sectionRef}
                className="flex justify-center bg-gray4"
            >
                <div className="flex justify-center gap-6 lg:w-[1400px] pt-20 lg:pt-32 pb-32 lg:pb-44 w-screen">
                    <div className=" flex flex-col items-center w-full">
                        <span className="hidden lg:flex font-sora text-2xl text-black opacity-40 mb-56 lg:mb-6">
                            {sectionTitle}
                        </span>
                        <span className="flex lg:hidden font-sora text-center text-2xl text-black opacity-40 mb-56">
                            Conheça os<br /> nossos planos
                        </span>
                        <div
                            className={`flex flex-col lg:flex-row w-full justify-center`}
                        >
                            <div className="flex flex-col items-center justify-center gap-12 -mb-[300px] lg:mb-0">
                                <Image
                                    src={"/Site/a100-card.png"}
                                    alt={""}
                                    className={`w-[500px] lg:w-[650px] ${isSlideToLeft}`}
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center gap-12 lg:-ml-[580px]">
                                <Image
                                    src={"/Site/a300-card.png"}
                                    alt={""}
                                    className="w-[400px] lg:w-[650px]"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center gap-12 -mt-[300px] lg:mt-0 lg:-ml-[580px]">
                                <Image
                                    src={"/Site/a500-card.png"}
                                    alt={""}
                                    className={`w-[400px] lg:w-[650px] ${isSlideToRight}`}
                                />
                            </div>
                        </div>

                        <div
                            className={`flex w-full justify-between mt-56 lg:mt-0 lg:justify-center gap-6 h-6 px-10 lg:px-0 lg:gap-60 ${
                                isVisible ? "fade-in" : "opacity-0"
                            }`}
                        >
                            <button
                                onClick={() => setIsModalOpen(0)}
                                className="flex justify-center items-center bg-orange1 text-white rounded-full px-6 py-5 lg:px-5 lg:py-4 font-sora font-semibold"
                            >
                                a100
                            </button>

                            <button
                                onClick={() => setIsModalOpen(1)}
                                className="flex justify-center items-center bg-aquagreen text-white rounded-full px-6 py-5 lg:px-5 lg:py-4 font-sora font-semibold"
                            >
                                a300
                            </button>

                            <button
                                onClick={() => setIsModalOpen(2)}
                                className="flex justify-center items-center bg-yellow text-orange1 rounded-full px-6 py-5 lg:px-5 lg:py-4 font-sora font-semibold"
                            >
                                a500
                            </button>

                            {
                                /*
                            <ColorfullButton
                                bgColor="orange"
                                textColor="white"
                                text="a100"
                                link="#"
                            />
                            <ColorfullButton
                                bgColor="green"
                                textColor="white"
                                text="a300"
                                link="#"
                            />
                            <ColorfullButton
                                bgColor="yellow"
                                textColor="orange"
                                text="a500"
                                link="#"
                            />
                            */
                            }
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen !== null && (
                <PlanDetailsModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    plans={plans}
                />
            )}
        </>
    );
}
