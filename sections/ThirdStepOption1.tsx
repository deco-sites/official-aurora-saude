import FormTitleH2 from "../components/form-title-h2.tsx";
import InputText from "site/components/input-text.tsx";
import InputSelect from "site/components/input-select.tsx";
import InputNumber from "site/components/input-number.tsx";
import AddBeneficiary from "site/islands/add-beneficiary.tsx";
import FormTitleH1 from "site/components/form-title-h1.tsx";
import { useBeneficiaryInputs } from "site/sdk/useBeneficiaryInputs.ts";
import { whoWillUseThePlan } from "site/helpers/whoWillUseThePlan.ts";
import { useStepThreeInputValues } from "../sdk/ThirdStep/useStepThreeInputValues.ts";
import { handleDataChange } from "../helpers/handleDataChange.ts";

export default function ThirdStepOption1() {
  const { selectedBeneficiaryInput } = useBeneficiaryInputs();

  const {
    thirdStepSignal,
  } = useStepThreeInputValues();

  const textOptions = [
    "Adicione os dependentes:",
    "Adicione os dados dos beneficiários:",
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="pb-36">
          <FormTitleH1
            text1={"Informe os dados das pessoas"}
            text2={"que utilizarão o plano."}
          />
        </div>

        <div className="pb-24">
          <InputSelect
            id={"whowilluse"}
            name={"whowilluse"}
            label={"Quem utilizará o plano?"}
            options={whoWillUseThePlan}
            placeholder={"Somente eu"}
            value={thirdStepSignal.value.whoUseThePlan}
            inputValueSetter={(value) =>
              handleDataChange(thirdStepSignal, `whoUseThePlan`, value)}
          />
        </div>

        {thirdStepSignal.value.whoUseThePlan != "somente_eu" && (
          <div className="flex flex-col gap-8">
            <FormTitleH2
              text={thirdStepSignal.value.whoUseThePlan ===
                  "eu_e_meus_dependentes"
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
