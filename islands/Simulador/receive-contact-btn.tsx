import Image from "apps/website/components/Image.tsx";
import { useFormSteps } from "../../sdk/Simulador/useFormSteps.ts";
import { invoke } from "../../runtime.ts";

interface IBtnProps {
  number: number;
  mission: string;
}

export default function ReceiveContactButton(
  { number, mission }: IBtnProps,
) {
  const { changeStep } = useFormSteps();

  const handleSaveLead = async () => {
    await invoke.site.actions.saveLead();
    changeStep(number, mission);
  };

  return (
    <button
      onClick={handleSaveLead}
      //changeStep(currentStep + 1, e);
      //console.log(activeOption); //Dou um console.log na opção escolhida inicialmente
      className="flex items-center gap-8 bg-orange1 rounded-full text-white text-left px-12 py-4 text-sm"
    >
      <Image
        src={"/Simulador/yellow-phone-icon.png"}
        alt="Icon"
        width=""
        height=""
        className="w-7"
      />
      Receber contato de <br /> um especialista
    </button>
  );
}
