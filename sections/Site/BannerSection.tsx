import { ImageWidget } from "apps/admin/widgets.ts";
import { Device } from "apps/website/matchers/device.ts";
import Image from "apps/website/components/Image.tsx";
import { FnContext } from "deco/types.ts";

//DesktopText: Dúvidas, reclamações<br />ou sugestões? Envie <br />uma mensagem.
//MobileText: Dúvidas,<br /> reclamações<br />ou sugestões? <br />Envie uma <br />mensagem.

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

const DEFAULT_PROPS = {
    preload: true,
};

export interface Props {
    image?: Banner;
    /**
     * @description Check this option when this banner is the biggest image on the screen for image optimizations
     */
    preload?: boolean;
    title?: string;
    desktopText?: string;
    mobileText?: string;
    textColor: "Laranja" | "Amarelo" | "Branco";
    fontSize: "24" | "26" | "30";
    fontWeight: "bold" | "semi-bold";
}

const textColors = {
    Laranja: "text-orange4",
    Amarelo: "text-yellow",
    Branco: "text-white",
};

const fontSizes = {
    "24": "text-2xl",
    "26": "text-[26px]",
    "30": "text-3xl",
};

const fontWeights = {
    bold: "font-bold",
    "semi-bold": "font-semibold",
};

interface BannerSectionProps {
    image: Banner;
    title?: string;
    desktopText?: string;
    mobileText?: string;
    textColor: keyof typeof textColors;
    fontSize: keyof typeof fontSizes;
    fontWeight: keyof typeof fontWeights;
    device: Device;
}

export default function BannerSection(
    {
        image,
        title,
        desktopText,
        mobileText,
        textColor,
        fontSize,
        fontWeight,
        device,
    }: BannerSectionProps,
) {
    const { alt, mobile, desktop } = image;

    return (
        <div className="relative flex rounded-3xl px-10 lg:px-0">
            {device !== "desktop" && (
                <>
                    <span
                        className={`absolute top-1/2 transform -translate-y-1/2 left-16 font-sora ${
                            fontWeights[fontWeight]
                        } ${textColors[textColor]} ${fontSizes[fontSize]}`}
                        dangerouslySetInnerHTML={{ __html: mobileText }}
                    />
                    <Image
                        class="object-cover w-full h-full rounded-[20px]"
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
                    <span
                        className={`absolute top-1/2 transform -translate-y-1/2 left-8 font-sora ${
                            fontWeights[fontWeight]
                        } ${textColors[textColor]} ${fontSizes[fontSize]}`}
                        dangerouslySetInnerHTML={{ __html: desktopText }}
                    />
                    <Image
                        class="object-cover w-full h-full rounded-[20px]"
                        src={desktop.image}
                        alt={alt}
                        width={desktop.width ?? 1440}
                        height={desktop.height ?? 600}
                        decoding="async"
                    />
                </>
            )}
        </div>
    );
}

export const loader = (props: Props, req: Request, ctx: FnContext) => {
    return {
        ...props,
        device: ctx.device,
    };
};
