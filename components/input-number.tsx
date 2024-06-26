import { useState } from "preact/hooks";
import { useStepThreeInputValues } from "site/sdk/ThirdStep/useStepThreeInputValues.ts";

export interface InputProps {
  id: string;
  name: string;
  value: number;
  placeholder?: string;
  handleDeleteLine?: () => void;
  showTrashIcon: boolean;
  inputValueSetter: (value: number) => void;
}

export default function InputNumber(
  {
    id,
    name,
    value,
    placeholder,
    handleDeleteLine,
    showTrashIcon,
    inputValueSetter,
  }: InputProps,
) {
  //const { recipientqty } = useStepThreeInputValues();

  const handleButtonClick = (operation: "increment" | "decrement") => {
    if (operation === "increment") {
      inputValueSetter(value + 1);
      //setUseValue((prev) => prev + 1);
    } else {
      const max = value > 1 ? value - 1 : 1;
      inputValueSetter(max);
      //setUseValue((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Bateu aki");
    const value = e.target.value;

    if (inputValueSetter) {
      inputValueSetter(value);
    }
  };

  return (
    <>
      <div className="flex items-center gap-8 w-full">
        <div className="flex gap-2 items-center justify-center w-full sm:w-auto">
          <button onClick={() => handleButtonClick("decrement")}>
            <img src={"/minus-icon.png"} alt="Plus Icon" className="w-4" />
          </button>

          <input
            className="px-6 py-2 rounded-full bg-gray5 outline-none w-20 text-center text-black text-opacity-25"
            type="number"
            id={id}
            name={name}
            value={value.toString().padStart(2, "0")}
            placeholder={placeholder}
            onChange={handleChange}
            //readOnly
          />

          <button onClick={() => handleButtonClick("increment")}>
            <img src={"/plus-icon.png"} alt="Plus Icon" className="w-4" />
          </button>
        </div>

        {showTrashIcon && (
          <button onClick={handleDeleteLine}>
            <img src={"/trash-icon.png"} alt="Plus Icon" className="w-4" />
          </button>
        )}
      </div>
    </>
  );
}
