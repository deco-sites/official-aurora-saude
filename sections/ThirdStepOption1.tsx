import FormTitle from "site/components/form-title.tsx";
import InputText from "site/components/input-text.tsx";
import InputSelect from "site/components/input-select.tsx";
import InputNumber from "site/components/input-number.tsx";
import AddBeneficiary from "site/islands/add-beneficiary.tsx";

export default function ThirdStepOption1() {
  const whoWillUseThePlan = [
    { value: "option1", text: "Somente eu" },
    { value: "option2", text: "Eu e meus dependentes" },
    { value: "option3", text: "Outra pessoa" },
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        <span className="text-[#767676] font-semibold text-lg my-8">
          Informe os dados das pessoas <br /> que utilizarão o plano.
        </span>

        <InputSelect
          id={"whowilluse"}
          name={"whowilluse"}
          label={"Quem utilizará o plano?"}
          options={whoWillUseThePlan}
          placeholder={"Somente eu"}
        />

        <div className="flex flex-col gap-8">
          <FormTitle text={"Adicione os dados dos beneficiários:"} />

          <AddBeneficiary />
        </div>
      </div>
    </>
  );
}
