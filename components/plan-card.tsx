export interface IplanInfos {
  title: string;
  description: string;
  segmentation: string;
  coverage: string;
  coparticipation: string;
  accommodation: string;
  color: keyof typeof CARD_COLOR;
}

const CARD_COLOR = {
  orange: "bg-[#FF8461]",
  green: "bg-[#72CCCC]",
  yellow: "bg-[#FCFF73]",
};

export default function PlanCard(
  {
    title,
    description,
    segmentation,
    coverage,
    coparticipation,
    accommodation,
    color,
  }: IplanInfos,
) {
  return (
    <>
      <div className="flex flex-col gap-4 flex-1">
        <div
          className={`flex flex-col gap-4 ${
            CARD_COLOR[color]
          } rounded-xl p-10 flex-1`}
        >
          <span
            className={`font-semibold text-2xl ${
              color != "yellow" ? "text-[#FCFF73]" : "text-[#FA7651]"
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

        <div className="flex flex-col justify-between border-[1px] border-[#D9D9D9] rounded-xl px-10 py-4">
          <span className="text-[#D9D9D9] text-sm">A partir de</span>
          <div className="flex justify-between">
            <span className="text-[#FA7651] text-2xl font-semibold">
              R$ XXX,XX
            </span>
            <button
              className={`${
                CARD_COLOR[color]
              } rounded-full font-semibold text-sm px-12 py-2 ${
                color != "yellow" ? "text-[#FCFF73]" : "text-[#FA7651]"
              }`}
            >
              Simular
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
