import { useState } from "preact/hooks";
import { useStepThreeInputValues } from "site/sdk/ThirdStep/useStepThreeInputValues.ts";

export interface InputProps {
  id: string;
  name: string;
  value: number;
  placeholder?: string;
  handleDeleteLine?: () => void;
  showTrashIcon: boolean;
}

export default function InputNumber(
  { id, name, value, placeholder, handleDeleteLine, showTrashIcon }: InputProps,
) {
  //const { recipientqty } = useStepThreeInputValues();
  const [useValue, setUseValue] = useState(1);

  const handleIncrement = () => {
    //recipientqty.value += 1;
    setUseValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    //recipientqty.value = recipientqty.value > 1 ? recipientqty.value - 1 : 1;
    setUseValue((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <div className="flex items-center gap-8">
        <div className="flex gap-2 items-center justify-center w-full sm:w-auto">
          <button onClick={handleDecrement}>
            <img src={"/minus-icon.png"} alt="Plus Icon" className="w-4" />
          </button>

          <input
            className="px-6 py-2 rounded-full bg-gray5 outline-none w-20 text-center text-black text-opacity-25"
            type="number"
            id={id}
            name={name}
            value={useValue.toString().padStart(2, "0")}
            placeholder={placeholder}
            //readOnly
          />

          <button onClick={handleIncrement}>
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
