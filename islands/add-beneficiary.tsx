import InputSelect from "site/components/input-select.tsx";
import InputNumber from "site/components/input-number.tsx";
import { useBeneficiaryInputs } from "../sdk/useBeneficiaryInputs.ts";
import { useState } from "preact/hooks";
import { agerangeoptions } from "site/helpers/ageRangeOptions.ts";
import { useStepThreeInputValues } from "site/sdk/ThirdStep/useStepThreeInputValues.ts";

export default function AddBeneficiary() {
  {
    /*const { inputs } = useBeneficiaryInputs();
  const [beneficiariesArr, setBeneficiariesArr] = useState<string[]>([
    "New Beneficiary",
  ]);

  const handleAddInput = () => {
    //inputs.value.push([...inputs.value, "New Beneficiary"]);
    setBeneficiariesArr([...beneficiariesArr, "New Beneficiary"]);
    //console.log(inputs.value);
  };
  */
  }

  const [beneficiariesArr, setBeneficiariesArr] = useState([
    { id: 1, name: "New Beneficiary" },
  ]);

  const handleAddInput = () => {
    const newId = beneficiariesArr.length > 0
      ? beneficiariesArr[beneficiariesArr.length - 1].id + 1
      : 1;
    setBeneficiariesArr([
      ...beneficiariesArr,
      {
        id: newId,
        name: "New Beneficiary",
      },
    ]);
  };

  const handleDeleteLine = (id, index) => {
    //setBeneficiariesArr(beneficiariesArr.filter((item) => id !== item.id));
    setBeneficiariesArr((prevBeneficiaries) =>
      prevBeneficiaries.filter((item) => item.id !== id)
    );
  };

  const {
    recipientqty,
  } = useStepThreeInputValues();

  return (
    <div className="flex flex-col gap-6">
      {beneficiariesArr.map((item, index) => {
        return (
          <div key={item.id} className="flex gap-6">
            <div className="w-full sm:w-1/4">
              <InputSelect
                id={`agerange-${item.id}`}
                name={`agerange-${item.id}`}
                label={"Faixa Etária:"}
                options={agerangeoptions}
                placeholder={"Selecione"}
                wfull
              />
            </div>

            <InputNumber
              id={`recipientqty-${item.id}`}
              name={`recipientqty-${item.id}`}
              value={recipientqty.value}
              placeholder={"00"}
              handleDeleteLine={() => handleDeleteLine(item.id, index)}
              showTrashIcon={beneficiariesArr.length > 1}
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
