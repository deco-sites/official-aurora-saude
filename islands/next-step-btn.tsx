import Image from "apps/website/components/Image.tsx";
import { useUI } from "../sdk/useUI.ts";
import { useFormSteps } from "../sdk/useFormSteps.ts";
import {
  CheckFields,
} from "../sdk/SecondStepOption1/checkStepTwoOption1Fields.ts";

interface INextStep {
  executionFunc?: () => void;
}

export default function NextStepBtn({ options, executionFunc }: INextStep) { //Aqui era passado como primeira prop "options", mas não sei pq
  const { activeOption } = useUI();
  const { activeStep, changeStep } = useFormSteps();

  return (
    <button
      className="bg-orange1 sm:bg-transparent rounded-full flex items-center justify-center px-12 py-3 sm:p-0 gap-2 sm:gap-6"
      onClick={(e) => {
        console.log(e);
        console.log("clicou", activeOption.value);
        console.log("envio p servidor", options[activeOption.value - 1]);
        console.log("aqqui", options);
        //CheckFields();
        if (executionFunc) {
          executionFunc();
        }

        //changeStep(activeStep.value, "increase"); //ESSE É O QUE ESTAVA FUNCIONANDO PERFEITAMENTE
        //changeStep(currentStep + 1, e);
        //console.log(activeOption); //Dou um console.log na opção escolhida inicialmente
      }}
    >
      <span className="text-white sm:text-orange1">Próximo</span>
      <div className="bg-orange1 rounded-full w-9 h-9 flex items-center justify-center">
        <Image src={"/arrow-right-icon.png"} alt="" className="w-6" />
      </div>
    </button>
  );
}
