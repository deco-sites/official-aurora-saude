import Image from "apps/website/components/Image.tsx";
import { Signal, useSignal } from "@preact/signals";
import { useRef } from "preact/hooks";

export interface CommonQuestionOptionProps {
    activeQuestion: Signal<number | null>;
    index: number;
    question: {
        questionTitle: string;
        questionText: string;
    };
}

export default function CommmonQuestionOption(
    { activeQuestion, index, question }: CommonQuestionOptionProps,
) {
    const questionRef = useRef<HTMLDivElement>(null);

    function handleClickIcon(index: number) {
        if (activeQuestion.value === index) {
            activeQuestion.value = null;
        } else {
            activeQuestion.value = index;
            setTimeout(() => {
                if (questionRef.current) {
                    questionRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 300); // Atraso para permitir a transição de altura
        }
    }

    return (
        <div
            onClick={() => handleClickIcon(index)}
            ref={questionRef}
            className={`${
                activeQuestion.value === index
                    ? "bg-black bg-opacity-[.02] pb-8"
                    : "bg-orange1"
            } rounded-[20px] px-14 pt-8 flex flex-col gap-7 cursor-pointer transition-all duration-300`}
            style={{ scrollMarginTop: "20px" }}
        >
            <div className="flex justify-between">
                <span
                    className={`${
                        activeQuestion.value === index
                            ? "text-orange1"
                            : "text-white"
                    } font-bold`}
                >
                    {question.questionTitle}
                </span>
                <Image
                    src={`${
                        activeQuestion.value === index
                            ? "/Site/minus-square.svg"
                            : "/Site/plus-square.svg"
                    }`}
                    alt="Toggle Icon"
                    className="w-6 h-6"
                />
            </div>

            <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    activeQuestion.value === index ? "max-h-screen" : "max-h-0"
                }`}
            >
                <span
                    className={`${
                        activeQuestion.value === index ? "block" : "hidden"
                    } text-black text-opacity-40`}
                    dangerouslySetInnerHTML={{ __html: question.questionText }}
                />
            </div>
        </div>
    );
}
