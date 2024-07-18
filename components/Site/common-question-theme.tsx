import Image from "apps/website/components/Image.tsx";
import { Signal } from "@preact/signals";

export interface CommonQuestionThemeProps {
    index: number;
    text: string;
    activeQuestionsTheme: Signal<number>;
}

export default function CommonQuestionTheme(
    { index, text, activeQuestionsTheme }: CommonQuestionThemeProps,
) {
    function handleChangeActiveOption() {
        activeQuestionsTheme.value = index;
        console.log("clicou pra mudar");
    }

    return (
        <div
            className="flex justify-between pb-3 mb-14 border-b border-b-black border-opacity-15 cursor-pointer pr-9"
            onClick={handleChangeActiveOption}
        >
            <span
                className={`${
                    activeQuestionsTheme.value === index
                        ? "text-orange1"
                        : "text-black text-opacity-40"
                } font-sora`}
            >
                {text}
            </span>
            <Image
                src={`${
                    activeQuestionsTheme.value === index
                        ? "/Site/orange-arrow-right.svg"
                        : "/Site/gray-arrow-right.svg"
                }`}
                alt="Arrow Right"
            />
        </div>
    );
}
