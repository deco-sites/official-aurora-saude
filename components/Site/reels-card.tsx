import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface ReelsCardProps {
    image: ImageWidget;
    alt: string;
    title: string;
    description: string;
    link: string;
}

export default function ReelsCard(
    { image, alt, title, description, link }: ReelsCardProps,
) {
    return (
        <div className="relative">
            <Image
                src={image}
                alt={alt}
                className="rounded-2xl"
            />

            <div className="w-full absolute bottom-4 flex items-center justify-between pl-14 pr-6">
                <div className="flex flex-col text-white font-sora">
                    <span className="font-bold">
                        {title}
                    </span>
                    <span className="font-light">
                        {description}
                    </span>
                </div>
                <a
                    href={link}
                    target="_blank"
                    className="flex-shrink-0"
                >
                    <Image
                        src={"/Site/play-circle-icon.svg"}
                        alt={alt}
                        className="rounded-2xl cursor-pointer w-10 h-10"
                    />
                </a>
            </div>
        </div>
    );
}
