import { FnContext } from "deco/types.ts";
import QuickAccess from "site/components/Site/quick-access.tsx";

export interface Props {
    word: string;
}

export default function SearchPage() {
    return (
        <div className="flex justify-center px-10 lg:px-0">
            <div className="lg:max-w-[1400px] w-full">
                <div className="flex flex-col gap-16 py-16">
                    <QuickAccess />

                    <div className="flex justify-between items-center pb-7 border-b border-b-gray12">
                        <div className="flex gap-4">
                            <span className="text-gray10 text-xl">
                                Resultados da Pesquisa:
                            </span>
                            <span className="text-orange1 text-xl font-bold">
                                "planos"
                            </span>
                        </div>
                        <button className="text-orange4 font-bold">
                            Voltar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const loader = (props: Props, req: Request, ctx: FnContext) => {
    return {
        ...props,
        device: ctx.device,
    };
};
