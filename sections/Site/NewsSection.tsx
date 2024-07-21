import NewsCard from "site/components/Site/news-card.tsx";

export default function NewsSection() {
    return (
        <>
            <div className="flex justify-center bg-white">
                <div className="lg:max-w-[1400px] w-full pt-12 lg:pb-16 lg:py-16 flex flex-col">
                    <div className="lg:mt-16 flex flex-col gap-10 px-10 lg:px-0 pb-10 lg:pb-0">
                        <span className="block lg:hidden font-sora font-bold text-2xl text-orange4">
                            Últimas Notícias
                        </span>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
                            <NewsCard
                                imageSrc={"/Site/LatestNews/newsphoto3.png"}
                                alt={"Imagem 3"}
                                date={"25 de setembro"}
                                title={"Aurora Saúde fecha parceria com MV Sistemas"}
                                link={"#"}
                            />
                            <NewsCard
                                imageSrc={"/Site/casalbanner2.png"}
                                alt={"Imagem 2"}
                                date={"29 de setembro"}
                                title={"Mineiras lançam operadora de saúde em BH"}
                                link={"#"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
