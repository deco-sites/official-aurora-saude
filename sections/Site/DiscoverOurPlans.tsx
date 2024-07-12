import Image from "apps/website/components/Image.tsx";
import ColorfullButton from "site/components/Site/colorfull-btn.tsx";

export default function DiscoverOurPlans() {
    return (
        <>
            <div className="flex justify-center bg-gray4">
                <div className="flex justify-center gap-6 lg:w-[1400px] w-full pt-32 pb-44">
                    <div className=" flex flex-col items-center">
                        <span className="font-sora text-2xl text-black opacity-40 mb-6">
                            Conheça os nossos planos
                        </span>
                        <div className="flex w-full">
                            <div className="flex flex-col items-center justify-center gap-12">
                                <Image
                                    src={"/Site/a100-card.png"}
                                    alt={""}
                                    className="w-[650px]"
                                />
                                <ColorfullButton
                                    bgColor="orange"
                                    textColor="white"
                                    text="a100"
                                    link="#"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center gap-12 -ml-[580px]">
                                <Image
                                    src={"/Site/a300-card.png"}
                                    alt={""}
                                    className="w-[650px]"
                                />
                                <ColorfullButton
                                    bgColor="green"
                                    textColor="white"
                                    text="a300"
                                    link="#"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center gap-12 -ml-[580px]">
                                <Image
                                    src={"/Site/a500-card.png"}
                                    alt={""}
                                    className="w-[650px]"
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
            </div>
        </>
    );
}
