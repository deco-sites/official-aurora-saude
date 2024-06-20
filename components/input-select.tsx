import { Signal } from "@preact/signals-core";

interface Option {
  value: string;
  text: string;
}

export interface InputProps {
  id: string;
  name: string;
  label: string;
  options: Option[];
  placeholder?: string;
  signalValue?: Signal<string>;
  wfull?: boolean;
  value?: string;
  inputValueSetter?: (value: string) => void;
}

export default function InputSelect(
  {
    id,
    name,
    label,
    options,
    placeholder,
    signalValue,
    wfull,
    value,
    inputValueSetter,
  }: InputProps,
) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (inputValueSetter) {
      inputValueSetter(value);
    }
    if (signalValue) {
      signalValue.value = value;
    }
  };

  return (
    <div className="flex gap-6 items-center w-full">
      <label className="hidden sm:flex text-orange1 text-nowrap" htmlFor={name}>
        {label}
      </label>
      <div className={`relative w-full sm:w-auto ${wfull && "sm:w-full"}`}>
        <select
          className={`px-6 py-5 sm:py-2 rounded-md sm:rounded-full bg-black bg-opacity-[3%] outline-none text-[#9ca3be] appearance-none pr-8 w-full ${
            wfull && "w-full"
          }`} // Adicionando pr-8 para espaçar a seta
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
        >
          <option value="" selected disabled hidden>{placeholder}</option>
          {options.map((op) => (
            <option key={op.value} value={op.value}>{op.text}</option>
          ))}
        </select>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="w-4 h-4 fill-current text-[#9ca3be]"
            viewBox="0 0 20 20"
          >
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
