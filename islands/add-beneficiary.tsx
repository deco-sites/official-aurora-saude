import InputSelect from "site/components/input-select.tsx";
import InputNumber from "site/components/input-number.tsx";
import { useBeneficiaryInputs } from "../sdk/useBeneficiaryInputs.ts";
import InputText from "site/components/input-text.tsx";
import { useEffect, useState } from "preact/hooks";

export default function AddBeneficiary() {
  const agerangeoptions = [
    { value: "option1", text: "Opção 1" },
    { value: "option2", text: "Opção 2" },
    { value: "option3", text: "Opção 3" },
  ];

  const { inputs } = useBeneficiaryInputs();
  const [test, setTest] = useState<string[]>([
    "New Beneficiary",
    "New Beneficiary",
  ]);

  const handleAddInput = () => {
    inputs.value.push([...inputs.value, "New Beneficiary"]);
    setTest([...test, "oi"]);
    console.log(inputs.value);
  };

  return (
    <div className="flex flex-col gap-6">
      {test.map(() => {
        return (
          <div className="flex gap-6">
            <InputSelect
              id={"agerange"}
              name={"agerange"}
              label={"Faixa Etária:"}
              options={agerangeoptions}
              placeholder={"Selecione"}
            />
            <InputNumber
              id={"recipientqty"}
              name={"recipientqty"}
              placeholder={"00"}
            />
          </div>
        );
      })}

      <button
        className="bg-[#ff8461] rounded-full text-white py-2 px-8 text-xs w-max"
        onClick={handleAddInput}
      >
        + Adicionar
      </button>
    </div>
  );
}
