export interface Props {
    /**
     * @format rich-text
     * @description the text of button
     */
    text: string;
}

export default function TextPage({ text }: Props) {
    return (
        <>
            <div className="flex justify-center px-10 lg:px-0">
                <div className="lg:max-w-[1400px] w-full pt-12 pb-16 lg:py-32 lg:px-32">
                    <span dangerouslySetInnerHTML={{ __html: text }}></span>
                </div>
            </div>
        </>
    );
}
