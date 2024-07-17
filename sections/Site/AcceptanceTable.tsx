import LineTitle from "site/components/Site/Table/line-title.tsx";
import DataCellText from "../../components/Site/Table/data-cell-text.tsx";
import DataCellBoolean from "site/components/Site/Table/data-cell-boolean.tsx";

export interface IHospital {
    name: string;
    a100: boolean;
    a300: boolean;
    a500: boolean;
}

export interface IAcceptanceTable {
    hospitals: IHospital[];
}

export default function AcceptanceTable({ hospitals }: IAcceptanceTable) {
    return (
        <>
            <div className="flex justify-center px-10 lg:px-0">
                <div className="lg:max-w-[1400px] w-full pt-12 pb-16 lg:py-32 lg:px-40">
                    <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row w-full justify-between px-0 lg:px-20 mb-28">
                        <span className="text-orange4 text-4xl font-bold">
                            Compare e<br /> escolha o ideal<br /> para você
                        </span>

                        <span className="text-black text-opacity-50">
                            A Aurora é a única operadora com uma linha
                            de<br />serviços moderna, centrada no cuidado
                            integral e<br />individual de cada beneficiário.
                            Conheça osnossos<br />planos e descubra o melhor
                            para você.
                        </span>
                    </div>

                    <div className="w-full overflow-x-scroll lg:overflow-x-auto scrollbar-none">
                        <div className="min-w-max lg:min-w-full">
                            <div class="grid grid-cols-4 text-center gap-4">
                                <div></div>
                                <div class="bg-orange1 rounded-[10px] h-[110px] flex justify-center items-center text-2xl text-yellow">
                                    a100
                                </div>
                                <div class="bg-aquagreen rounded-[10px] h-[110px] flex justify-center items-center text-2xl text-yellow">
                                    a300
                                </div>
                                <div class="bg-yellow rounded-[10px] h-[110px] flex justify-center items-center text-2xl text-orange1">
                                    a500
                                </div>

                                <LineTitle text={"Valor"} />
                                <DataCellText text={"A partir de R$ 50,52*"} />
                                <DataCellText text={"A partir de R$ 104,67*"} />
                                <DataCellText text={"A partir de R$ 120,54*"} />

                                <LineTitle text={"Cobertura"} />
                                <DataCellText text={"Ambulatorial"} />
                                <DataCellText
                                    text={"Ambulatorial e hospitalar"}
                                />
                                <DataCellText
                                    text={"Ambulatorial e hospitalar e obstetrícia"}
                                />
                            </div>

                            <div className="p-8">
                                <hr />
                            </div>
                            <div className="flex flex-col gap-4 min-w-max lg:min-w-full">
                                {hospitals.map((hospital) => (
                                    <div class="grid grid-cols-4 text-center gap-4">
                                        <LineTitle text={hospital.name} />
                                        <DataCellBoolean
                                            value={hospital.a100}
                                        />
                                        <DataCellBoolean
                                            value={hospital.a300}
                                        />
                                        <DataCellBoolean
                                            value={hospital.a500}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
