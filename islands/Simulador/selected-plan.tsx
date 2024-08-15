import Image from "apps/website/components/Image.tsx";
import { useUI } from "../../sdk/Simulador/useUI.ts";
import { useStepTwoOption1InputValues } from "site/sdk/Simulador/SecondStepOption1/useStepTwoOption1InputValues.ts";
import { useStepThreeInputValues } from "site/sdk/Simulador/ThirdStep/useStepThreeInputValues.ts";
import { useStepTwoOption2InputValues } from "site/sdk/Simulador/SecondStepOption2/useStepTwoOption2InputValues.ts";
import { useSelectPlan } from "site/sdk/Simulador/useSelectPlan.ts";
import { useEffect, useState } from "preact/hooks";
import getPrices from "site/actions/getPrices.ts";
import { invoke } from "../../runtime.ts";
import { signal, useSignalEffect } from "@preact/signals";

interface ISelectedPlan {
  selectedPlanName: string;
}

export default function SelectedPlan({ selectedPlanName }: ISelectedPlan) {
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
  const { selectedPlan, transformedArray } = useSelectPlan();

  console.log("Opção escolhida na primeira tela:", activeOption.value);
  console.log("Estado digitado na segunda tela:", ufValue.value);
  console.log("Cidade digitada na segunda tela:", cityValue.value);
  console.log("Estado digitado na segunda tela:", ufValue2.value);
  console.log("Cidade digitada na segunda tela:", cityValue2.value);
  console.log("Idade selecionada na segunda tela:", ageRangeValue.value);
  console.log("Quem utilizará o plano:", thirdStepSignal.value.whoUseThePlan);
  console.log(
    "Array de Beneficiários:",
    thirdStepSignal.value.beneficiariesValuesArr,
  );
  console.log("Id do plano selecionado:", selectedPlan.value);
  console.log("Planos puxados do banco:", transformedArray.value);

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

  // Primeiro useEffect para atualizar cd_plano e filledRanges
  const filledRanges = signal([]);
  const cd_plano = signal(0);
  useEffect(() => {
    const selectedPlanObject = transformedArray.value.find(
      (plan) => plan.id === selectedPlan.value,
    );

    if (selectedPlanObject) {
      cd_plano.value = selectedPlanObject.cd_plano;
      console.log("CD_PLANO", cd_plano.value);
    } else {
      console.log("Plano não encontrado");
    }

    filledRanges.value = thirdStepSignal.value.beneficiariesValuesArr.map(
      (item) => item.range,
    );
    filledRanges.value = [...new Set(filledRanges.value)];
    console.log("Array de idades no formato que preciso", filledRanges.value);
  }, [selectedPlan.value, transformedArray.value, thirdStepSignal.value]);

  // Segundo useEffect para chamar fetchPrices quando cd_plano e filledRanges estiverem prontos
  useEffect(() => {
    if (cd_plano.value && filledRanges.value.length > 0) {
      fetchPrices();
    }
  }, [cd_plano.value, filledRanges.value]);

  const fetchedPrices = signal([]);
  const [loading, setLoading] = useState(false)
  async function fetchPrices() {
    setLoading(true)
    const prices = await invoke.site.actions.getPrices(
      {
        plan_code: cd_plano.value,
        ageranges: filledRanges.value,
      },
    );
    fetchedPrices.value = prices;
    setLoading(false)
    console.log("FetchedPrices:", fetchedPrices.value.data);
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
            R$ XXX,XX
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
