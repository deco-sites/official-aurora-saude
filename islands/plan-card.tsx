import { useSelectPlan } from "site/sdk/useSelectPlan.ts";
import { signal } from "@preact/signals";

export interface IplanInfos {
  id: number;
  title: string;
  description: string;
  segmentation: string;
  coverage: string;
  coparticipation: string;
  accommodation: string;
  color: keyof typeof CARD_COLOR;
  onlybutton: boolean;
}

const CARD_COLOR = {
  orange: "bg-orange1",
  green: "bg-aquagreen",
  yellow: "bg-yellow",
};

export default function PlanCard({
  id,
  title,
  description,
  segmentation,
  coverage,
  coparticipation,
  accommodation,
  color,
  onlybutton,
}: IplanInfos) {
  const { selectedPlan } = useSelectPlan();

  const handleSelectPlan = (id: number) => {
    console.log(selectedPlan.value);
    const index = selectedPlan.value.indexOf(id);
    if (index === -1) {
      selectedPlan.value = [...selectedPlan.value, id];
    } else {
      selectedPlan.value = selectedPlan.value.filter((item) => item !== id);
    }
  };

  return (
    <div className="flex flex-col gap-4 flex-1">
      <div
        className={`flex flex-col gap-4 ${
          CARD_COLOR[color]
        } rounded-xl p-10 flex-1`}
      >
        <span
          className={`font-semibold text-2xl font-sora ${
            color != "yellow" ? "text-yellow" : "text-[#FA7651]"
          }`}
        >
          {title}
        </span>
        <span
          className={`text-sm flex-1 ${
            color != "yellow" ? "text-white" : "text-black"
          }`}
        >
          {description}
        </span>
      </div>

      <div className="flex flex-col gap-4 bg-white rounded-xl p-10">
        <div className="border-b flex items-center py-4">
          <span className="text-sm text-black text-opacity-25">
            <strong>Segmentação:</strong> {segmentation}
          </span>
        </div>

        <div className="border-b flex items-center py-4">
          <span className="text-sm text-black text-opacity-25">
            <strong>Abrangência:</strong> {coverage}
          </span>
        </div>

        <div className="border-b flex items-center py-4">
          <span className="text-sm text-black text-opacity-25">
            <strong>Coparticipação:</strong> {coparticipation}
          </span>
        </div>

        <div className="flex items-center pt-4">
          <span className="text-sm text-black text-opacity-25">
            <strong>Acomodação:</strong> {accommodation}
          </span>
        </div>
      </div>
      {onlybutton
        ? (
          <button
            className={`${
              CARD_COLOR[color]
            } rounded-full font-semibold text-sm px-12 py-3 ${
              color != "yellow" ? "text-yellow" : "text-[#FA7651]"
            }`}
          >
            Solicitar Contato
          </button>
        )
        : (
          <div className="flex flex-col justify-between border-[1px] border-[#D9D9D9] rounded-xl px-10 py-4">
            <span className="text-[#D9D9D9] text-sm">A partir de</span>
            <div className="flex justify-between">
              <span className="text-[#FA7651] text-2xl font-semibold font-sora">
                R$ XXX,XX
              </span>
              <button
                onClick={() => handleSelectPlan(id)}
                className={`rounded-full font-semibold text-sm px-12 py-2 ${
                  selectedPlan.value.includes(id)
                    ? `${CARD_COLOR[color]} ${
                      color != "yellow" ? "text-yellow" : "text-[#FA7651]"
                    }`
                    : "bg-gray6 text-white"
                }`}
              >
                Selecionar
              </button>
            </div>
          </div>
        )}
    </div>
  );
}
