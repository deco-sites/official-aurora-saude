import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { serviceCards } from "site/helpers/Site/service-cards.ts";
import ServiceCardIsland from "site/islands/Site/service-card-island.tsx";
import ColorfullButton from "site/components/Site/colorfull-btn.tsx";

export interface Props {
    src: ImageWidget;
    alt: string;
    width?: number;
    height?: number;
}

export interface IPhoto {
    photo: Props;
}

export default function Section({ photo }: IPhoto) {
    return (
        <>
            <div className="flex justify-center lg:width-calc">
                <div className="flex gap-6 lg:w-[1400px] w-full">
                    <div className="bg-white flex flex-col gap-14 pt-20 pb-24">
                        <div className="flex gap-5">
                            <div className="w-1/2 rounded-3xl">
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    width={photo.width}
                                    height={photo.height}
                                    className="w-full h-full rounded-3xl object-cover"
                                />
                            </div>
                            <div className="w-1/2 rounded-3xl flex flex-col bg-gray4 pt-24 pb-20 px-16">
                                <span className="font-sora text-black opacity-60 text-3xl font-semibold pb-5">
                                    Principais serviços <br /> ao beneficiário
                                </span>
                                <span className="font-sora text-lg text-black opacity-40 pb-10">
                                    Na área do beneficiário da Aurora, você
                                    encontra tudo o que precisa para cuidar da
                                    sua saúde.
                                </span>
                                <div>
                                    <ColorfullButton
                                        bgColor={"pink"}
                                        textColor={"yellow"}
                                        text={"Acesse o seu perfil"}
                                        link={"#"}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <ServiceCardIsland cards={serviceCards} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
