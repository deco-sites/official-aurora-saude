import ColorfullButton from "site/components/Site/colorfull-btn.tsx";
import { Section } from "deco/blocks/section.ts";

export interface IProvidersSection {
    section: Section;
}

export default function ProvidersSection({ section }: IProvidersSection) {
    return (
        <>
            <div className="flex justify-center bg-aquagreen2">
                <div className="flex flex-col lg:flex-row gap-16 lg:w-[1400px] w-full pt-32 pb-36">
                    <div className="px-8 lg:px-0 flex flex-col gap-10">
                        <div className="flex flex-col gap-5 text-white font-sora">
                            <span className="text-5xl">
                                Rede médica <br />altamente<br /> qualificada
                            </span>
                            <span className="text-lg">
                                Confira quais são os prestadores
                                médico-hospitalares do seu plano.
                            </span>
                        </div>
                        <ColorfullButton
                            bgColor="yellow"
                            textColor="green"
                            text="Ver rede completa"
                            link="#"
                        />
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <section.Component {...section.props} />
                    </div>
                </div>
            </div>
        </>
    );
}
