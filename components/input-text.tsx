export interface InputProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  wfull?: boolean;
}

export default function InputText(
  { id, name, label, placeholder, wfull }: InputProps,
) {
  return (
    <div className="flex gap-6 items-center w-full">
      <label className="text-orange1 text-nowrap" htmlFor={name}>
        {label}:
      </label>
      <input
        className={`px-6 py-2 rounded-full bg-gray5 outline-none ${
          wfull && "w-full"
        }`}
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
