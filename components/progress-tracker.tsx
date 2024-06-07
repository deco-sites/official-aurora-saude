import { useFormSteps } from "site/sdk/useFormSteps.ts";
import { useUI } from "../sdk/useUI.ts";
import { useEffect } from "https://esm.sh/v128/preact@10.19.6/hooks/src/index.js";

export default function ProgressTracker({ currentStep }) {
  const { changeStep } = useFormSteps();
  const { activeOption } = useUI();

  const steps = [
    { title: "Tipo de Simulação", status: true, step: 1 }, //true é ativo e false é inativo
    {
      title: { op1: "Sobre você", op2: "Sobre sua empresa" },
      status: true,
      step: 2,
    },
    { title: "Beneficiários", status: false, step: 3 },
    { title: "Escolha seu plano", status: false, step: 4 },
    { title: "Envio", status: false, step: 5 },
  ];

  const updatedSteps = steps.map((step) => ({
    ...step,
    status: step.step <= currentStep,
  }));

  return (
    <div className="flex justify-between items-center w-full py-6">
      {updatedSteps.map((step, index) => (
        //Antes do step.status === true eu estava usando index + 1 <= currentStep
        <div key={index} className="relative flex flex-col flex-1">
          <button
            disabled={!step.status}
            onClick={() => changeStep(step.step, "decrease")}
            className={`w-6 h-6 rounded-full flex items-center justify-center z-50 ${
              step.status === true
                ? "bg-[#ff8461] text-white"
                : "bg-[#ffdcd2] text-[#ffdcd2]"
            }`}
          >
          </button>
          <div
            className={`mt-2 ${
              step.status === true ? "text-[#ff8461]" : "text-[#ffdcd2]"
            }`}
          >
            <span className="font-semibold">
              {index === 1 && typeof step.title === "object"
                ? activeOption.value === 1 ? step.title.op1 : step.title.op2
                : step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`absolute top-3 w-full h-px 
              ${step.status === true ? "bg-[#ff8461]" : "bg-[#ffdcd2]"}
              ${
                step.status === true && updatedSteps[index + 1].status === false
                  ? "bg-gradient-to-r from-[#ff8461] to-[#ffdcd2]"
                  : ""
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
