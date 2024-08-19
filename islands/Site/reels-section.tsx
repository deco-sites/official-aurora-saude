import { ImageWidget } from "apps/admin/widgets.ts";

export interface Banner {
    image: ImageWidget;
    videoName: string;
    alt: string;
    title: string;
    description: string;
}

export interface Props {
    cards: Banner[];
}

import ReelsCard from "site/components/Site/reels-card.tsx";

export default function ReelsSectionIsland({ cards }: Props) {
    return (
        <>
            {cards.map((card) => (
                <ReelsCard
                    image={card.image}
                    videoName={card.videoName}
                    alt={card.alt}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </>
    );
}
