import Image from "apps/website/components/Image.tsx";
import { useUI } from "../../sdk/Simulador/useUI.ts";
import { useStepTwoOption1InputValues } from "site/sdk/Simulador/SecondStepOption1/useStepTwoOption1InputValues.ts";
import { useStepThreeInputValues } from "site/sdk/Simulador/ThirdStep/useStepThreeInputValues.ts";
import { useStepTwoOption2InputValues } from "site/sdk/Simulador/SecondStepOption2/useStepTwoOption2InputValues.ts";

interface ISelectedPlan {
  selectedPlanName: string;
  totalValue: number;
}

export default function SelectedPlan(
  { selectedPlanName, totalValue }: ISelectedPlan,
) {
  const { activeOption } = useUI();
  const {
    ufValue,
    cityValue,
    ageRangeValue,
  } = useStepTwoOption1InputValues();
  const {
    ufValue2,
    cityValue2,
  } = useStepTwoOption2InputValues();
  const {
    thirdStepSignal,
  } = useStepThreeInputValues();

  {
    /*
  //Varrer o aray transformedArray.value e procurar o plano com o id igual a selectedPlan.value e retornar o cd_plano desse cara
  const selectedPlanObject = transformedArray.value.find((plan) =>
    plan.id === selectedPlan.value
  );
  const cd_plano = signal(0);

  if (selectedPlanObject) {
    cd_plano.value = selectedPlanObject.cd_plano;
    console.log("CD_PLANO", cd_plano.value);
  } else {
    console.log("Plano não encontrado");
  }

  const filledRanges = signal([]);

  filledRanges.value = thirdStepSignal.value.beneficiariesValuesArr.map((
    item,
  ) => item.range);
  filledRanges.value = [...new Set(filledRanges.value)];
  console.log("Array de idades no formato que preciso", filledRanges.value);*/
  }

  return (
    <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between bg-orange1 rounded-2xl px-8 lg:px-28 py-16">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-white text-sm lg:text-2xl font-sora">
            O plano escolhido foi:
          </span>
          <span className="hidden lg:flex text-yellow font-bold font-sora text-6xl text-wrap">
            {selectedPlanName}

            {/*a100 rmbh*/}
          </span>
          <span className="lg:hidden text-yellow font-bold font-sora py-4 text-5xl ">
            a100 <br /> rmbh
          </span>
        </div>
        <div className="flex flex-col lg:flex-row items-baseline lg:gap-4">
          <span className="text-sm text-white">Valor total por mês</span>
          <span className="text-white font-semibold font-sora text-xl">
            R$ {totalValue.toString().replace(".", ",")}
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
        <div
          className={`flex flex-col gap-4 px-8 lg:px-12 py-6 border-[1px] border-wite rounded-2xl text-white ${
            activeOption.value != 1 ? "lg:w-[600px]" : "lg:w-96"
          }`}
        >
          <span className="flex gap-2 text-sm">
            <span className="font-semibold">Plano:</span>a100 rmbh
          </span>
          <span className="flex gap-2 text-sm">
            <span className="font-semibold">Titular:</span>1 titular
          </span>
          <span className="flex gap-2 text-sm">
            <span className="font-semibold">Acomodação:</span>-
          </span>
          <span className="flex gap-2 text-sm">
            <span className="font-semibold">Dependentes:</span>03
          </span>
          <span className="flex gap-2 text-sm text-nowrap">
            <span className="font-semibold">
              Coparticipação:
            </span>com Copay
          </span>
        </div>
        {activeOption.value === 1 && (
          <div className="flex flex-col gap-6 px-8 lg:px-12 py-6 border-[1px] border-yellow rounded-2xl text-white lg:w-64">
            <a href="#" className="flex items-center gap-2">
              <Image
                src={"/Simulador/desktop-icon.png"}
                alt="icon"
                width=""
                height=""
                className="w-4"
              />
              <span className="text-sm font-semibold">
                Enviar simulação por e-mail
              </span>
            </a>
            <a href="#" className="flex items-center gap-2">
              <Image
                src={"/Simulador/user-icon.png"}
                alt="icon"
                width=""
                height=""
                className="w-4"
              />
              <span className="text-sm font-semibold">
                Receber contato de um consultor
              </span>
            </a>
            {
              /*
            <a href="#" className="flex items-center gap-2">
              <img src={"/store-icon.png"} alt="icon" className="w-4" />
              <span className="text-sm font-semibold">Nossas lojas</span>
            </a>
            */
            }
          </div>
        )}
      </div>
    </div>
  );
}
