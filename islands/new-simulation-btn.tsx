import { useFormSteps } from "site/sdk/useFormSteps.ts";

export default function NewSimulationButton() {
  const { activeStep, changeStep } = useFormSteps();
  return (
    <button
      onClick={(e) => {
        changeStep(0, "increase");
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
