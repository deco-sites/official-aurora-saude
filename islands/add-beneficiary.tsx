import InputSelect from "site/components/input-select.tsx";
import InputNumber from "site/components/input-number.tsx";
import { useBeneficiaryInputs } from "../sdk/useBeneficiaryInputs.ts";
import { useState } from "preact/hooks";
import { agerangeoptions } from "site/helpers/ageRangeOptions.ts";

export default function AddBeneficiary() {
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
            <div className="w-1/4">
              <InputSelect
                id={"agerange"}
                name={"agerange"}
                label={"Faixa Etária:"}
                options={agerangeoptions}
                placeholder={"Selecione"}
                wfull
              />
            </div>
            <InputNumber
              id={"recipientqty"}
              name={"recipientqty"}
              placeholder={"00"}
            />
          </div>
        );
      })}

      <button
        className="bg-orange1 rounded-full text-white py-2 px-8 text-xs w-max"
        onClick={handleAddInput}
      >
        + Adicionar
      </button>
    </div>
  );
}
