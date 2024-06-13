import { useState } from "preact/hooks";

export interface InputProps {
  id: string;
  name: string;
  placeholder?: string;
}

export default function InputNumber(
  { id, name, placeholder }: InputProps,
) {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValue((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="flex gap-2 items-center">
      <button onClick={handleDecrement}>
        <img src={"/trash-icon.png"} alt="Plus Icon" className="w-4" />
      </button>

      <input
        className="px-6 py-2 rounded-full bg-gray5 outline-none w-20 text-center text-black text-opacity-25"
        type="number"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value.toString().padStart(2, "0")}
        readOnly
      />

      <button onClick={handleIncrement}>
        <img src={"/plus-icon.png"} alt="Plus Icon" className="w-4" />
      </button>
    </div>
  );
}
