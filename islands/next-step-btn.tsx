import Image from "apps/website/components/Image.tsx";
import { useUI } from "../sdk/useUI.ts";
import { useFormSteps } from "../sdk/useFormSteps.ts";

export default function NextStepBtn({ options }) {
  const { activeOption } = useUI();
  const { activeStep, changeStep } = useFormSteps();
  return (
    <button
      className="flex items-center gap-2"
      onClick={(e) => {
        console.log("clicou", activeOption.value);
        console.log("envio p servidor", options[activeOption.value - 1]);
        changeStep(activeStep.value, "increase");
        //changeStep(currentStep + 1, e);
        //console.log(activeOption); //Dou um console.log na opção escolhida inicialmente
      }}
    >
      <span className="text-orange">Próximo</span>
      <Image src={"/next-icon.png"} alt="" className="w-8" />
    </button>
  );
}
