import FormTitleH2 from "../components/form-title-h2.tsx";
import InputText from "site/components/input-text.tsx";
import InputSelect from "site/components/input-select.tsx";
import InputNumber from "site/components/input-number.tsx";
import AddBeneficiary from "site/islands/add-beneficiary.tsx";
import FormTitleH1 from "site/components/form-title-h1.tsx";
import { useBeneficiaryInputs } from "site/sdk/useBeneficiaryInputs.ts";

export default function ThirdStepOption1() {
  const { selectedBeneficiaryInput } = useBeneficiaryInputs();

  const whoWillUseThePlan = [
    { value: "option1", text: "Somente eu" },
    { value: "option2", text: "Eu e meus dependentes" },
    { value: "option3", text: "Outra pessoa" },
  ];

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

        <InputSelect
          id={"whowilluse"}
          name={"whowilluse"}
          label={"Quem utilizará o plano?"}
          options={whoWillUseThePlan}
          placeholder={"Somente eu"}
          signalValue={selectedBeneficiaryInput}
        />

        {/*aqui entrará a condicional para renderizar a div abaixo com base no valor selecionado do input acima*/}
        {selectedBeneficiaryInput.value != "option1" && (
          <div className="flex flex-col gap-8">
            <FormTitleH2
              text={selectedBeneficiaryInput.value === "option2"
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
