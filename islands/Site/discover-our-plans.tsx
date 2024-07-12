import { useEffect, useRef, useState } from "preact/hooks";
import Image from "apps/website/components/Image.tsx";
import ColorfullButton from "site/components/Site/colorfull-btn.tsx";

export default function DiscoverOurPlansIsland() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isSlideToLeft, setIsSlideToLeft] = useState("");
    const [isSlideToRight, setIsSlideToRight] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio > 0.25) {
                        setIsVisible(true);
                        setIsSlideToLeft("card-slide-left");
                        setIsSlideToRight("card-slide-right");
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
            <div ref={sectionRef} className="flex justify-center bg-gray4">
                <div className="flex justify-center gap-6 lg:w-[1400px] w-full pt-32 pb-44">
                    <div className=" flex flex-col items-center">
                        <span className="font-sora text-2xl text-black opacity-40 mb-6">
                            Conheça os nossos planos
                        </span>
                        <div className={`flex w-full`}>
                            <div className="flex flex-col items-center justify-center gap-12">
                                <Image
                                    src={"/Site/a100-card.png"}
                                    alt={""}
                                    className={`w-[650px] ${isSlideToLeft}`}
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center gap-12 -ml-[580px]">
                                <Image
                                    src={"/Site/a300-card.png"}
                                    alt={""}
                                    className="w-[650px]"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center gap-12 -ml-[580px]">
                                <Image
                                    src={"/Site/a500-card.png"}
                                    alt={""}
                                    className={`w-[650px] ${isSlideToRight}`}
                                />
                            </div>
                        </div>

                        <div
                            className={`flex w-full justify-between ${
                                isVisible ? "fade-in" : "opacity-0"
                            }`}
                        >
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
