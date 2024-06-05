import type { ImageWidget } from "apps/admin/widgets.ts";
import OptionButton from "../islands/first-step-opt-btn.tsx";
import FirstStepImage from "../islands/first-step-img.tsx";
import NextStepBtn from "../islands/next-step-btn.tsx";

export interface CTA {
  text: string;
  icon?: ImageWidget;
  link: string;
}

export interface Props {
  background: {
    src: ImageWidget;
    alt: string;
  };
  buttonNextStep: CTA;
}

const options = [
  {
    id: 1,
    icon: "/home-icon.png",
    image: "/banner1.png",
    option: "Você e sua família",
    yellowText: "Inicie a simulação de sua proposta",
    normaltext: "e mude para o plano que anda junto.",
  },
  {
    id: 2,
    icon: "/bag-icon.png",
    image: "/banner2.jpeg",
    option: "MEI ou empresas de 01 a 29 vidas",
    yellowText: "Ofereça a tranquilidade de um plano de saúde",
    normaltext: "que caminha ao lado dos seus colaboradores",
  },
  {
    id: 3,
    icon: "/bag-icon.png",
    image: "/banner3.png",
    option: "Empresas de 30 a 99 vidas",
    yellowText: "Invista no bem-estar da sua equipe",
    normaltext: "com o plano de saúde que está sempre junto!",
  },
  {
    id: 4,
    icon: "/bag-icon.png",
    image: "/banner4.png",
    option: "Empresas acima de 100 vidas",
    yellowText: "Temos uma solução customizada para sua empresa.",
    normaltext: "Solicite uma cotação personalizada!",
  },
];

export default function FormStepOne() {
  return (
    <>
      <div
        className="flex justify-center"
        style={{ width: "calc(100vw - 18px)" }}
      >
        <div className="flex w-[1400px]">
          <div className="flex items-end h-full">
            <span
              className="text-xs text-gray-200 w-full"
              style={{
                "writing-mode": "vertical-lr",
                "transform": "rotate(180deg)",
              }}
            >
              *Contratação de plano coletivo por adesão via administrador de
              benefícios.
            </span>
          </div>

          <div className="flex gap-6">
            <FirstStepImage />
            <div className="bg-bg-gray rounded-2xl p-8 w-1/4">
              <span className="text-[#8b8b8b]">
                Antes de começarmos, precisamos saber um pouco mais sobre você:
              </span>

              <div className="flex flex-col gap-4 mt-8">
                {options?.map((op) => <OptionButton op={op} />)}
              </div>
              <div className="flex justify-end py-8">
                <NextStepBtn options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
