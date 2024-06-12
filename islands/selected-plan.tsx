import { useUI } from "site/sdk/useUI.ts";

export default function SelectedPlan() {
  const { activeOption } = useUI();
  console.log("ericão", activeOption.value);
  return (
    <div className="flex justify-between bg-[#FF8461] rounded-2xl px-28 py-16">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-white text-2xl font-sora">
            O plano escolhido foi:
          </span>
          <span className="text-[#FCFF73] text-6xl font-bold font-sora">
            a100 rmbh
          </span>
        </div>
        <div className="flex items-baseline gap-4">
          <span className="text-sm text-white">Valor total por mês</span>
          <span className="text-white font-semibold font-sora text-xl">
            R$ XXX,XX
          </span>
        </div>
      </div>
      <div className="flex gap-4">
        <div
          className={`flex flex-col gap-4 px-12 py-6 border-[1px] border-wite rounded-2xl text-white ${
            activeOption.value != 1 ? "w-[600px]" : "w-96"
          }`}
        >
          <span className="flex gap-2 text-sm">
            <span className="font-semibold">Plano:</span>a100rmbh
          </span>
          <span className="flex gap-2 text-sm">
            <span className="font-semibold">Titular:</span>1 titular
          </span>
          <span className="flex gap-2 text-sm">
            <span className="font-semibold">Acomodação:</span>-
          </span>
          <span className="flex gap-2 text-sm">
            <span className="font-semibold">Dependentes:</span>03
          </span>
          <span className="flex gap-2 text-sm">
            <span className="font-semibold">Coparticipação:</span>com Copay
          </span>
        </div>
        {activeOption.value === 1 && (
          <div className="flex flex-col gap-6 px-12 py-6 border-[1px] border-[#FCFF73] rounded-2xl text-white w-64">
            <div className="flex items-center gap-2">
              <img src={"/desktop-icon.png"} alt="icon" className="w-4" />
              <span className="text-sm font-semibold">
                Enviar simulação por e-mail
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={"/user-icon.png"} alt="icon" className="w-4" />
              <span className="text-sm font-semibold">
                Receber contato de um consultor
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={"/store-icon.png"} alt="icon" className="w-4" />
              <span className="text-sm font-semibold">Nossas lojas</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
