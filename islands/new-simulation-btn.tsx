import { useFormSteps } from "site/sdk/useFormSteps.ts";
import { useUI } from "site/sdk/useUI.ts";
import { options } from "site/helpers/form-step1-menu-options.ts";

export default function NewSimulationButton() {
  const { activeStep, changeStep } = useFormSteps();

  const {
    activeOption,
    selectedYellowText,
    selectedNormalText,
    selectedImage,
  } = useUI();

  return (
    <button
      onClick={(e) => {
        changeStep(0, "increase");
        activeOption.value = options[0].id;
        selectedYellowText.value = options[0].yellowText;
        selectedNormalText.value = options[0].normaltext;
        selectedImage.value = options[0].image;

        //changeStep(currentStep + 1, e);
        //console.log(activeOption); //Dou um console.log na opção escolhida inicialmente
      }}
      className="flex items-center gap-8 bg-gray4 rounded-full px-12 py-4 text-sm text-black text-opacity-55"
    >
      <img src={"/calculator-icon.png"} alt="Icon" className="w-6" />
      Nova Simulação
    </button>
  );
}
