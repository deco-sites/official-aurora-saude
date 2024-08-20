import Image from "apps/website/components/Image.tsx";
import { useUI } from "../../sdk/Simulador/useUI.ts";
import { signal } from "@preact/signals";
import { useFormSteps } from "site/sdk/Simulador/useFormSteps.ts";
import ClearForm from "site/helpers/Simulador/clearForm.ts";

interface INextStep {
  executionFunc?: () => void;
}

export const previousActiveOption = signal(1);

export default function NextStepBtn({ options, executionFunc }: INextStep) { //Aqui era passado como primeira prop "options", mas não sei pq
  const { activeOption } = useUI();
  const { activeStep } = useFormSteps();
  //const { activeStep, changeStep } = useFormSteps();

  return (
    <button
      className="bg-orange1 lg:bg-transparent rounded-full flex items-center justify-center px-8 py-3 lg:p-0 gap-2 lg:gap-6"
      onClick={(e) => {
        console.log(e);
        //console.log("clicou", activeOption.value);
        //console.log("envio p servidor", options[activeOption.value - 1]);
        //console.log("aqqui", options);
        //CheckFields();
        if (executionFunc) {
          executionFunc();
        }

        //O if abaixo é responsável por resetar os campos do formulário quando altero a opção escolhida na primeira tela
        if (previousActiveOption.value !== activeOption.value) {
          ClearForm();
        }

        //O if abaixo checa se estamos indo pro segundo passo e guarda o valor da opção escolhida na primeira tela em outra variável
        if (
          activeStep.value === 2 &&
          (previousActiveOption.value !== activeOption.value)
        ) {
          previousActiveOption.value = activeOption.value;
          //console.log("Passou pro step2", previousActiveOption.value);
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
