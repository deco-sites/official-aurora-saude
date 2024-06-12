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
      <label className="text-[#ff8461] text-nowrap" htmlFor={name}>
        {label}:
      </label>
      <input
        className={`px-6 py-2 rounded-full bg-[#f2f2f2] outline-none ${
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
