interface Option {
  value: string;
  text: string;
}

export interface InputProps {
  id: string;
  name: string;
  label: string;
  options: Option[];
  placeholder: string;
}

export default function InputSelect(
  { id, name, label, options, placeholder }: InputProps,
) {
  console.log(options);
  return (
    <div className="flex gap-6 items-center">
      <label className="text-[#ff8461]" htmlFor={name}>{label}</label>
      <div className="relative">
        <select
          className="px-6 py-2 rounded-full bg-[#f2f2f2] outline-none text-[#9ca3be] appearance-none pr-8" // Adicionando pr-8 para espaçar a seta
          id={id}
          name={name}
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
