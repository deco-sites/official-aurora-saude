import { useFormSteps } from "site/sdk/useFormSteps.ts";

interface IBtnProps {
  number: number;
  mission: string;
}

export default function ReceiveContactButton({ number, mission }: IBtnProps) {
  const { activeStep, changeStep } = useFormSteps();

  return (
    <button
      onClick={(e) => {
        changeStep(number, mission);
        //changeStep(currentStep + 1, e);
        //console.log(activeOption); //Dou um console.log na opção escolhida inicialmente
      }}
      className="flex items-center gap-8 bg-[#FF8461] rounded-full text-white text-left px-12 py-4 text-sm"
    >
      <img
        src={"/yellow-phone-icon.png"}
        alt="Icon"
        className="w-7"
      />
      Receber contato de <br /> um especialista
    </button>
  );
}
