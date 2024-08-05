import Icon from "site/components/ui/Icon.tsx";
import { Device } from "apps/website/matchers/device.ts";
import { FnContext } from "deco/types.ts";

export interface RedirectionsSectionProps {
    desktopTitle: string;
    mobileTitle: string;
    desktopText: string;
    mobileText: string;
    device: Device;
}

export interface Props {
    desktopTitle: string;
    mobileTitle: string;
    desktopText: string;
    mobileText: string;
}

export default function RedirectionsSection(
    { desktopTitle, mobileTitle, desktopText, mobileText, device }:
        RedirectionsSectionProps,
) {
    return (
        <>
            <div className="bg-inherit flex flex-col gap-20 px-10 pt-10 pb-20 lg:px-52 lg:pt-32 lg:pb-44">
                <div className="flex flex-col gap-4 lg:flex-row justify-between">
                    <span
                        className="text-yellow text-5xl font-sora font-semibold lg:w-2/3"
                        dangerouslySetInnerHTML={{
                            __html: device === "desktop"
                                ? desktopTitle
                                : mobileTitle,
                        }}
                    >
                    </span>
                    <span
                        className="text-white lg:w-1/3"
                        dangerouslySetInnerHTML={{
                            __html: device === "desktop"
                                ? desktopText
                                : mobileText,
                        }}
                    >
                    </span>
                </div>
                <div className="flex flex-col gap-4 lg:flex-row justify-between">
                    <button className="bg-white rounded-full py-6 px-10 text-pink1 flex justify-between gap-9 font-medium lg:font-normal">
                        Jornada de Cuidado
                        <Icon
                            class="h-auto"
                            id="PinkArrowDown"
                            strokeWidth={1}
                            size={20}
                        />
                    </button>
                    <button className="bg-white rounded-full py-6 px-10 text-pink1 flex justify-between gap-9 font-medium lg:font-normal">
                        App e Portal
                        <Icon
                            class="h-auto"
                            id="PinkArrowDown"
                            strokeWidth={1}
                            size={20}
                        />
                    </button>
                    <button className="bg-white rounded-full py-6 px-10 text-pink1 flex justify-between gap-9 font-medium lg:font-normal">
                        Dúvidas Frequentes
                        <Icon
                            class="h-auto"
                            id="PinkArrowDown"
                            strokeWidth={1}
                            size={20}
                        />
                    </button>
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
