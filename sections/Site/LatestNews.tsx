import NewsCard from "site/components/Site/news-card.tsx";

export default function LatestNews() {
    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col gap-16 lg:w-[1400px] w-full pt-14 pb-16 px-9 lg:px-0">
                    <span className="font-sora text-orange4 text-2xl font-bold lg:pl-14">
                        Últimas Notícias
                    </span>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <NewsCard
                            imageSrc={"/Site/LatestNews/newsphoto1.png"}
                            alt={"Imagem 1"}
                            date={"22 de agosto"}
                            title={"Minas Gerais ganha operadora de saúde fundada por mulheres"}
                            link={"#"}
                        />
                        <NewsCard
                            imageSrc={"/Site/LatestNews/newsphoto2.png"}
                            alt={"Imagem 2"}
                            date={"1 de setembro"}
                            title={"Um novo jeito de cuidar da saúde"}
                            link={"#"}
                        />
                        <NewsCard
                            imageSrc={"/Site/LatestNews/newsphoto3.png"}
                            alt={"Imagem 3"}
                            date={"25 de setembro"}
                            title={"Aurora Saúde fecha parceria com MV Sistemas"}
                            link={"#"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
