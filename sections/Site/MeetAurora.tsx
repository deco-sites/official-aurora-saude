import ColorfullButton from "site/components/Site/colorfull-btn.tsx";

export default function MeetAurora() {
    return (
        <>
            <div className="flex justify-center lg:width-calc bg-pink1 py-20">
                <div className="flex gap-6 lg:w-[1400px] w-full">
                    <div className="flex flex-col w-full items-center">
                        <div className="flex flex-col gap-4 font-sora text-white text-3xl mb-10">
                            <span>Somos a primeira operadora de saúde</span>
                            <span>
                                do Brasil{" "}
                                <span className="border border-yellow rounded-full px-4 py-2">
                                    fundada por duas mulheres.
                                </span>
                            </span>
                        </div>
                        <ColorfullButton
                            bgColor={"yellow"}
                            textColor={"pink"}
                            text={"Conheça a Aurora Saúde"}
                            link={"#"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
