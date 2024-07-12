export interface Props {
    /**
     * @description Type of Header
     */
    type: "cliente" | "empresa" | "corretor" | "prestador";
}

type Color = "orange" | "purple" | "pink" | "yellow" | "white" | "darkPink";

interface IheaderOptions {
    id: number;
    name: string;
    color: Color;
    title: string;
    menuItems: { text: string; link: string }[];
    logo: string;
    textColor: "white" | "darkPink";
}

const headerOptions: IheaderOptions[] = [
    {
        id: 1,
        name: "cliente",
        color: "orange",
        title: "Sou Cliente",
        menuItems: [
            { text: "Quem somos", link: "#" },
            { text: "Nossos planos", link: "#" },
            { text: "Jornada de Cuidado", link: "#" },
        ],
        logo: "/Site/default_logo_aurora.svg",
        textColor: "white",
    },
    {
        id: 2,
        name: "empresa",
        color: "purple",
        title: "Sou Empresa",
        menuItems: [
            { text: "Quem somos", link: "#" },
            { text: "Nossos planos", link: "#" },
            { text: "Jornada de Cuidado", link: "#" },
        ],
        logo: "/Site/default_logo_aurora.svg",
        textColor: "white",
    },
    {
        id: 3,
        name: "corretor",
        color: "pink",
        title: "Sou Corretor",
        menuItems: [
            { text: "Seja um Corretor", link: "#" },
            { text: "Quem somos", link: "#" },
            { text: "Nossos planos", link: "#" },
            { text: "Vendas", link: "#" },
            { text: "Materiais de Apoio", link: "#" },
        ],
        logo: "/Site/default_logo_aurora.svg",
        textColor: "white",
    },
    {
        id: 4,
        name: "prestador",
        color: "yellow",
        title: "Sou Prestador",
        menuItems: [
            { text: "Seja um Prestador", link: "#" },
            { text: "Nossos planos", link: "#" },
            { text: "Vendas", link: "#" },
            { text: "Materiais de Apoio", link: "#" },
        ],
        logo: "/Site/logo_aurora_prestador.svg",
        textColor: "darkPink",
    },
];

const colors = {
    orange: "bg-orange1",
    purple: "bg-darkPurple",
    pink: "bg-pink2",
    yellow: "bg-yellow",
    white: "text-white",
    darkPink: "text-pink2",
};

export default function Section({ type }: Props) {
    const option = headerOptions.find((option) => option.name === type);
    if (!option) return null;
    const buttonsArr = headerOptions.filter((item) => item.name !== type);
    const startIndex = buttonsArr.findIndex((item) => item.id > option.id);

    let orderedOptions;
    if (startIndex === -1) {
        orderedOptions = [...buttonsArr];
    } else {
        orderedOptions = [
            ...buttonsArr.slice(startIndex),
            ...buttonsArr.slice(0, startIndex),
        ];
    }

    return (
        <div className="flex justify-center">
            <div className="flex gap-6 lg:w-[1400px] w-full px-10 lg:px-0">
                <div className="w-full">
                    <div className="flex justify-end lg:justify-between px-7 lg:px-16">
                        <div className="hidden lg:flex gap-3">
                            <a
                                href="#"
                                className={`relative font-bold ${
                                    option?.name === "prestador"
                                        ? "text-orange1"
                                        : "text-white"
                                } ${
                                    colors[
                                        option.color
                                    ]
                                } rounded-t-[20px] px-5 py-1`}
                            >
                                <div
                                    className={`absolute ${
                                        colors[option.color]
                                    } w-14 h-14 -bottom-[33.5px] -left-[25px]`}
                                >
                                    <div className="bg-orange4 w-[50%] h-[50%] absolute top-0 left-0 rounded-br-full">
                                    </div>
                                </div>

                                <div
                                    className={`absolute ${
                                        colors[option.color]
                                    } w-14 h-14 -bottom-[33.5px] -right-[25px]`}
                                >
                                    <div className="bg-orange4 w-[50%] h-[50%] absolute top-0 right-0 rounded-bl-full">
                                    </div>
                                </div>

                                <div
                                    className={`absolute ${
                                        colors[option.color]
                                    } w-full h-2 -bottom-2 left-0`}
                                >
                                </div>
                                <span className="relative z-10">
                                    {option.title}
                                </span>
                            </a>

                            {orderedOptions.map((headerOption, index) => (
                                <a
                                    key={headerOption.id}
                                    href="#"
                                    className={` ${
                                        colors[headerOption?.textColor]
                                    } ${
                                        colors[
                                            headerOption.color
                                        ]
                                    } rounded-[20px] px-5 py-1 z-10`}
                                >
                                    {headerOption.title}
                                </a>
                            ))}
                        </div>

                        <div className="flex gap-9 text-white">
                            <div className="hidden lg:flex items-center gap-9">
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <img
                                        src={"/Site/user-icon.svg"}
                                        alt="User Icon"
                                    />
                                    <span className="font-semibold">
                                        Áreas Logadas
                                    </span>
                                    <img
                                        src={"/Site/down-arrow.svg"}
                                        alt="Down Arrow"
                                    />
                                </div>
                                <a href="#">Perguntas Frequentes</a>
                                <a href="#">Quero ser Cliente</a>
                            </div>

                            <div className="flex gap-4 items-center">
                                <div className="flex gap-1 font-semibold">
                                    <span className="cursor-pointer">
                                        A+
                                    </span>
                                    <span className="cursor-pointer">
                                        A-
                                    </span>
                                </div>
                                <img
                                    src={"/Site/contrast-icon.svg"}
                                    alt="Contrast Icon"
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className={`relative flex items-center justify-between ${
                            colors[option.color]
                        } p-7 lg:p-16 mt-[6px] rounded-[20px] h-20 lg:h-48`}
                    >
                        <img
                            src={option.name === "prestador"
                                ? "/Site/logo_aurora_prestador.svg"
                                : "/Site/default_logo_aurora.svg"}
                            alt="Aurora Logo"
                            width={140}
                            className="w-28 lg:w-44"
                        />

                        <div className="flex items-center gap-5 lg:hidden rounded-3xl bg-[#FB7557] text-white px-5 py-2">
                            <span>Menu</span>
                            <img
                                src={"/Site/down-arrow.svg"}
                                alt=""
                                className=""
                            />
                        </div>

                        <div className="hidden lg:flex gap-12">
                            <div className="flex items-center gap-16">
                                {option?.menuItems.map((item) => (
                                    <a
                                        key={item.text}
                                        href="#"
                                        className={`${
                                            option.name === "prestador"
                                                ? "text-pink2"
                                                : "text-white"
                                        } font-bold text-lg font-sora`}
                                    >
                                        {item.text}
                                    </a>
                                ))}
                            </div>

                            <div
                                className={`flex gap-2 ${
                                    option.name === "prestador"
                                        ? "text-pink2 border-pink2"
                                        : "text-white border-white"
                                } items-center border rounded-full px-7 py-3 cursor-pointer`}
                            >
                                <img
                                    src={option.name === "prestador"
                                        ? "/Site/search-icon-pink.svg"
                                        : "/Site/search-icon.svg"}
                                    alt=""
                                    className="w-7 h-7"
                                />
                                <span>Buscar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
