import InputSelect from "site/components/input-select.tsx";
import InputNumber from "site/components/input-number.tsx";
import { useBeneficiaryInputs } from "../sdk/useBeneficiaryInputs.ts";
import { useSignal } from "@preact/signals";
import { agerangeoptions } from "site/helpers/ageRangeOptions.ts";
import { useStepThreeInputValues } from "site/sdk/ThirdStep/useStepThreeInputValues.ts";
import {
  handleArrDataChange,
  handleDataChange,
} from "../helpers/handleDataChange.ts";

export default function AddBeneficiary() {
  const { thirdStepSignal } = useStepThreeInputValues();
  let beneficiariesArr = thirdStepSignal.value.beneficiariesValuesArr;

  const handleAddInput = () => {
    console.log("ESTOU AQUI", thirdStepSignal.value.beneficiariesValuesArr);

    const newId = thirdStepSignal.value.beneficiariesValuesArr.length > 0
      ? thirdStepSignal.value
        .beneficiariesValuesArr[
          thirdStepSignal.value.beneficiariesValuesArr.length - 1
        ].id + 1
      : 1;

    thirdStepSignal.value = {
      ...thirdStepSignal.value,
      beneficiariesValuesArr: [
        ...thirdStepSignal.value.beneficiariesValuesArr,
        {
          id: newId,
          name: `agerange-${newId}`,
          range: "",
          qty: 1,
        },
      ],
    };
  };

  const handleDeleteLine = (id) => {
    thirdStepSignal.value = {
      ...thirdStepSignal.value,
      beneficiariesValuesArr: thirdStepSignal.value
        .beneficiariesValuesArr.filter((item) => item.id !== id),
    };
  };

  return (
    <div className="flex flex-col gap-6">
      {thirdStepSignal.value.beneficiariesValuesArr.map((item, index) => {
        return (
          <div key={item.id} className="flex gap-6">
            <div className="w-full sm:w-1/4">
              <InputSelect
                id={`agerange-${item.id}`}
                name={`agerange-${item.id}`}
                label={"Faixa Etária:"}
                options={agerangeoptions}
                placeholder={"Selecione"}
                value={item.range}
                inputValueSetter={(value) =>
                  handleArrDataChange(
                    thirdStepSignal,
                    "beneficiariesValuesArr",
                    value,
                    item,
                    "id",
                    "range",
                  )}
                wfull
              />
            </div>

            <InputNumber
              id={`recipientqty-${item.id}`}
              name={`recipientqty-${item.id}`}
              value={item.qty}
              placeholder={"00"}
              handleDeleteLine={() => handleDeleteLine(item.id)}
              showTrashIcon={thirdStepSignal.value.beneficiariesValuesArr
                .length > 1}
              inputValueSetter={(value) =>
                handleArrDataChange(
                  thirdStepSignal,
                  "beneficiariesValuesArr",
                  value,
                  item,
                  "id",
                  "qty",
                )}
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
