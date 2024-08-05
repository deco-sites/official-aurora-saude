import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import { Device } from "apps/website/matchers/device.ts";
import { FnContext } from "deco/types.ts";

export interface Props {
    desktopTitle: string;
    mobileTitle: string;
}

export interface AppSectionProps {
    desktopTitle: string;
    mobileTitle: string;
    device: Device;
}

export default function AppSection(
    { desktopTitle, mobileTitle, device }: AppSectionProps,
) {
    return (
        <>
            <div className="flex justify-center bg-pink1">
                <div className="lg:max-w-[1400px] w-full flex flex-col lg:flex-row pt-14 pb-28 lg:pt-40 lg:pb-44">
                    <div className="lg:w-1/3 px-14 flex flex-col gap-5 font-sora">
                        <span
                            className="text-white text-5xl"
                            dangerouslySetInnerHTML={{
                                __html: device === "desktop"
                                    ? desktopTitle
                                    : mobileTitle,
                            }}
                        >
                        </span>
                        <span className="text-yellow text-lg">
                            No APP Aurora Saúde, disponível para Android e IOS,
                            e no Portal do Beneficiário, que fica aqui no nosso
                            site, você encontra tudo que precisa para cuidar da
                            sua saúde.
                        </span>
                    </div>
                    <div className="relative lg:w-2/3 flex justify-center overflow-x-hidden">
                        <Image
                            src={`${
                                device === "desktop"
                                    ? "/Site/desktop-laptop-mockup.png"
                                    : "/Site/mobile-laptop-mockup.png"
                            }`}
                            alt={"Laptop"}
                            className={`w-[862px] h-[638px] lg:w-auto lg:h-auto object-cover`}
                        />
                        <button className="absolute bottom-4 right-5 lg:left-4 font-medium bg-yellow rounded-full py-5 px-8 text-pink1 flex gap-9 w-fit">
                            {device === "desktop"
                                ? "Acesse o Portal do Beneficiário"
                                : "Portal do Beneficiário"}
                            <Icon
                                class="h-auto -rotate-90"
                                id="PinkArrowDown"
                                strokeWidth={1}
                                size={20}
                            />
                        </button>
                        <button className="absolute top-4 left-11 lg:left-auto lg:right-4 font-medium bg-yellow rounded-full py-5 px-8 text-pink1 flex gap-9 w-fit">
                            Baixe o app
                            <Icon
                                class="h-auto -rotate-90"
                                id="PinkArrowDown"
                                strokeWidth={1}
                                size={20}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export const loader = (props: Props, req: Request, ctx: FnContext) => {
    return {
        ...props,
        device: ctx.device,
    };
};
