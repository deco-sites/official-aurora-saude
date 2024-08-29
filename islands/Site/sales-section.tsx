import { Signal, signal } from "@preact/signals";
import SupportMaterialCard from "site/components/Site/support-material-card.tsx";

export default function SalesSectionIsland() {
    const sections = [
        {
            id: 1,
            label: "Vendas 1 a 29 vidas",
            textColor: "text-white",
            color: "bg-orange1",
        },
        {
            id: 2,
            label: "Vendas 30 a 99 vidas",
            textColor: "text-white",
            color: "bg-pink1",
        },
        {
            id: 3,
            label: "Vendas acima de 100 vidas",
            textColor: "text-white",
            color: "bg-purple",
        },
        {
            id: 4,
            label: "Pós-Venda",
            textColor: "text-white",
            color: "bg-aquagreen",
        },
        {
            id: 5,
            label: "Campanhas de Venda",
            textColor: "text-pink1",
            color: "bg-yellow",
        },
    ];

    const shadowColors = {
        1: "shadow-outline-orange5",
        2: "shadow-outline-pink7",
        3: "shadow-outline-purple2",
        4: "shadow-outline-aquagreen3",
        5: "shadow-outline-yellow2",
    };

    const activeSection = signal(sections[0].id);

    const NavigationButton = ({ section }) => {
        return (
            <button
                className={`relative p-2 ${section.textColor} rounded-full py-5 px-12 whitespace-nowrap ${section.color} ${
                    activeSection.value === section.id
                        ? `${shadowColors[section.id]} lg:shadow-none`
                        : ""
                }`}
                onClick={() => {
                    activeSection.value = section.id;
                }}
            >
                {section.label}
                {
                    /*
                <div className="absolute bottom-0 left-0 w-full h-2 bg-red">
                </div>*/
                }
            </button>
        );
    };

    const SectionContent = () => {
        const activeColor = sections.find(
            (section) => section.id === activeSection.value,
        )?.color;

        return (
            <div
                className={`p-16 rounded-[20px] ${activeColor} transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[10px]`}
            >
                <SupportMaterialCard />
                <SupportMaterialCard />
            </div>
        );
    };

    return (
        <div className="flex justify-center lg:px-10 bg-gray4">
            <div className="lg:max-w-[1400px] w-full pt-12 pb-16 lg:py-20 flex flex-col gap-5 lg:gap-20">
                <div className="flex flex-col gap-5 lg:gap-[10px]">
                    <div className="flex px-10 lg:px-0 lg:hidden flex-col gap-5 font-sora mb-14">
                        <span className="text-orange1 text-xl font-bold">
                            Materiais<br /> de apoio
                        </span>
                        <span className="  text-black text-opacity-40">
                            Acesse os materiais de<br />{" "}
                            apoio abaixo e fique por<br />{" "}
                            dentro das campanhas de<br />{" "}
                            vendas, baixe documentos<br />{" "}
                            de apoio e muito mais.
                        </span>
                    </div>
                    <div className="flex pl-10 lg:pl-0 gap-3 lg:gap-0 lg:justify-between overflow-x-scroll scrollbar-none py-1">
                        {sections.map((section) => (
                            <NavigationButton
                                key={section.id}
                                section={section}
                            />
                        ))}
                    </div>
                    <div className="px-10 lg:px-0">
                        <SectionContent />
                    </div>
                </div>
            </div>
        </div>
    );
}
