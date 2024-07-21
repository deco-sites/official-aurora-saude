//import { useState } from "preact/hooks";

import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { FnContext } from "deco/types.ts";
import { Device } from "apps/website/matchers/device.ts";

export interface Banner {
    /** @description desktop optimized image */
    desktop: {
        image: ImageWidget;
        width?: number;
        height?: number;
    };
    /** @description mobile optimized image */
    mobile: {
        image: ImageWidget;
        width?: number;
        height?: number;
    };
    /** @description Image's alt text */
    alt: string;
}

export interface Props {
    image: Banner;
    title: string;
}

export interface OverlaidVideoSectionProps {
    image: Banner;
    title: string;
    device: Device;
}

export default function OverlaidVideoSection(
    { image, title, device }: OverlaidVideoSectionProps,
) {
    //const [isPlaying, setIsPlaying] = useState(false);
    const isPlaying = false;

    const handlePlayClick = () => {
        //setIsPlaying(true);
    };

    const { alt, mobile, desktop } = image;

    return (
        <>
            <div className="flex items-center flex-col gap-10 h-[300px]">
                <div className="flex px-10 lg:px-0 justify-center lg:bg-fixed lg:bg-center lg:bg-no-repeat lg:bg-cover flex-col gap-10 w-full max-w-[1400px]">
                    <div className="relative flex justify-center w-full pb-[56.25%]">
                        {!isPlaying
                            ? (
                                <div className="absolute inset-0 flex items-start justify-center w-full h-[400px] lg:h-[500px]">
                                    {device !== "desktop" && (
                                        <>
                                            <Image
                                                className="rounded-3xl w-full h-[400px] object-cover"
                                                src={mobile.image}
                                                alt={alt}
                                                width={mobile.width ?? 360}
                                                height={mobile.height ?? 600}
                                                decoding="async"
                                            />
                                        </>
                                    )}
                                    {device === "desktop" && (
                                        <>
                                            <Image
                                                className="rounded-3xl w-full h-[500px] object-cover"
                                                src={desktop.image}
                                                alt={alt}
                                                width={desktop.width ?? 1440}
                                                height={desktop.height ?? 600}
                                                decoding="async"
                                            />
                                        </>
                                    )}
                                    <div className="absolute flex w-full justify-between px-4 md:px-16 bottom-4 md:bottom-12">
                                        <span
                                            className="text-white font-sora  text-xs lg:text-2xl font-bold"
                                            dangerouslySetInnerHTML={{
                                                __html: title,
                                            }}
                                        >
                                        </span>

                                        <div className="flex gap-3 lg:gap-6 items-center">
                                            <span className="text-sm text-white">
                                                Assista ao manifesto
                                            </span>
                                            <button
                                                onClick={handlePlayClick}
                                                className=""
                                            >
                                                <img
                                                    src={"/Site/play-circle-icon.svg"}
                                                    alt="Play Button"
                                                    className="w-6 h-6 wlg:w-12 lg:h-12"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                            : (
                                <div className="absolute inset-0 w-full">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/yGHnmcY168Q?autoplay=1"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="rounded-3xl w-full h-full"
                                    />
                                </div>
                            )}
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
