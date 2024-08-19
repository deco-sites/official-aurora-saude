import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import { useState } from "preact/hooks";

export interface ReelsCardProps {
    image: ImageWidget;
    videoName: string;
    alt: string;
    title: string;
    description: string;
}

export default function ReelsCard(
    { image, videoName, alt, title, description }: ReelsCardProps,
) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <div className="relative">
            {!isPlaying
                ? (
                    <Image
                        src={image}
                        alt={alt}
                        className="rounded-2xl"
                    />
                )
                : (
                    <video
                        className="w-full h-full rounded-3xl"
                        controls
                    >
                        <source
                            src={`/Site/Videos/${videoName}`}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                )}

            <div className="w-full absolute bottom-4 flex items-center justify-between pl-14 pr-6">
                <div className="flex flex-col text-white font-sora">
                    <span className="font-bold">
                        {title}
                    </span>
                    <span className="font-light">
                        {description}
                    </span>
                </div>

                <Image
                    src={"/Site/play-circle-icon.svg"}
                    alt={alt}
                    className="rounded-2xl cursor-pointer w-10 h-10"
                    onClick={handlePlayClick}
                />
            </div>
        </div>
    );
}
