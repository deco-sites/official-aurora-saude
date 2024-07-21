import ReelsCard from "site/components/Site/reels-card.tsx";

export default function ReelsSectionIsland({ cards }) {
    console.log(cards);
    return (
        <>
            {cards.map((card) => (
                <ReelsCard
                    image={card.image}
                    alt={card.alt}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                />
            ))}
        </>
    );
}
