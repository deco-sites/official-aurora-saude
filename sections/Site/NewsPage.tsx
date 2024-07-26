import { ImageWidget } from "apps/admin/widgets.ts";
import NewsPageTemplateIsland from "site/islands/Site/news-page-template.tsx";

export interface Banner {
    image: ImageWidget;
    width?: number;
    height?: number;
    alt: string;
}

export interface Image {
    image: ImageWidget;
    width?: number;
    height?: number;
    alt: string;
}

/** @titleBy title */
export interface RelatedNews {
    image: Banner;
    date: string;
    title: string;
    link: string;
}

export interface NewsPageProps {
    image: Banner;
    date: string;
    title: string;
    /**
     * @format rich-text
     * @description O texto da matéria
     */
    text: string;
    relatedsNews: RelatedNews[];
    galleryImages?: Image[];
}

export default function NewsPage(
    { image, date, title, text, relatedsNews, galleryImages }: NewsPageProps,
) {
    return (
        <NewsPageTemplateIsland
            image={image}
            date={date}
            title={title}
            text={text}
            relatedsNews={relatedsNews}
            galleryImages={galleryImages}
        />
    );
}
