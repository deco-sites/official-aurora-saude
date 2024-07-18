import { useSignal } from "@preact/signals";
import CommonQuestionTheme from "site/components/Site/common-question-theme.tsx";
import CommmonQuestionOption from "site/components/Site/common-question-option.tsx";

export interface Theme {
    themeName: string;
    themeQuestions: Question[];
}

export interface Question {
    questionTitle: string;
    questionText: string;
}

export interface CommonQuestionsIslandProps {
    themes: Theme[];
}

export default function CommonQuestionsIsland(
    { themes }: CommonQuestionsIslandProps,
) {
    const activeQuestionsTheme = useSignal(0);
    const activeQuestion = useSignal<number | null>(null);

    return (
        <div className="flex gap-12">
            <div className="w-1/4 flex flex-col pt-8">
                {themes.map((theme, index) => (
                    <CommonQuestionTheme
                        key={index}
                        index={index}
                        text={theme.themeName}
                        activeQuestionsTheme={activeQuestionsTheme}
                    />
                ))}
            </div>

            <div className="w-3/4 flex flex-col gap-4">
                {themes[activeQuestionsTheme.value].themeQuestions.map((
                    question,
                    index,
                ) => (
                    <CommmonQuestionOption
                        key={index}
                        activeQuestion={activeQuestion}
                        index={index}
                        question={question}
                    />
                ))}
            </div>
        </div>
    );
}
