import Image from "apps/website/components/Image.tsx";
import { useUI } from "../../sdk/Simulador/useUI.ts";

interface INextStep {
  executionFunc?: () => void;
}

export default function NextStepBtn({ options, executionFunc }: INextStep) { //Aqui era passado como primeira prop "options", mas não sei pq
  const { activeOption } = useUI();
  //const { activeStep, changeStep } = useFormSteps();

  return (
    <button
      className="bg-orange1 lg:bg-transparent rounded-full flex items-center justify-center px-8 py-3 lg:p-0 gap-2 lg:gap-6"
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
      <span className="text-white lg:text-orange1">Próximo</span>
      <div className="bg-orange1 rounded-full w-9 h-9 flex items-center justify-center">
        <Image
          src={"/Simulador/arrow-right-icon.png"}
          alt=""
          className="w-6"
          width=""
          height=""
        />
      </div>
    </button>
  );
}
