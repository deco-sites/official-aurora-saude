import FormTitleH2 from "../components/form-title-h2.tsx";
import InputText from "site/components/input-text.tsx";
import InputSelect from "site/components/input-select.tsx";
import InputNumber from "site/components/input-number.tsx";
import AddBeneficiary from "site/islands/add-beneficiary.tsx";
import FormTitleH1 from "site/components/form-title-h1.tsx";
import { useBeneficiaryInputs } from "site/sdk/useBeneficiaryInputs.ts";
import { whoWillUseThePlan } from "site/helpers/whoWillUseThePlan.ts";
import { useStepThreeOption1InputValues } from "site/sdk/ThirdStepOption1/useStepThreeOption1InputValues.ts";

export default function ThirdStepOption1() {
  const { selectedBeneficiaryInput } = useBeneficiaryInputs();

  const {
    whoUseThePlan,

    whoUseThePlanError,
  } = useStepThreeOption1InputValues();

  const textOptions = [
    "Adicione os dependentes:",
    "Adicione os dados dos beneficiários:",
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        <FormTitleH1
          text1={"Informe os dados das pessoas"}
          text2={"que utilizarão o plano."}
        />

        <div className="relative flex gap-2 items-center">
          <InputSelect
            id={"whowilluse"}
            name={"whowilluse"}
            label={"Quem utilizará o plano?"}
            options={whoWillUseThePlan}
            placeholder={"Somente eu"}
            value={selectedBeneficiaryInput.value}
            signalValue={selectedBeneficiaryInput}
            inputValueSetter={(value) => selectedBeneficiaryInput.value = value}
          />
          {whoUseThePlanError.value && (
            <img
              src={"/error-circle-icon.png"}
              alt="Error Icon"
              className="h-5 w-5 absolute top-50 right-2 sm:left-[470px]"
            />
          )}
        </div>

        {selectedBeneficiaryInput.value != "somente_eu" && (
          <div className="flex flex-col gap-8">
            <FormTitleH2
              text={selectedBeneficiaryInput.value === "eu_e_meus_dependentes"
                ? textOptions[0]
                : textOptions[1]}
            />

            <AddBeneficiary />
          </div>
        )}
      </div>
    </>
  );
}
