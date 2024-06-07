import FormTitle from "site/components/form-title.tsx";
import InputText from "site/components/input-text.tsx";
import InputSelect from "site/components/input-select.tsx";
import InputNumber from "site/components/input-number.tsx";
import AddBeneficiary from "site/islands/add-beneficiary.tsx";

export default function ThirdStepOption1() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <FormTitle text={"Adicione os dados dos beneficiários:"} />

        <AddBeneficiary />
      </div>
    </>
  );
}
