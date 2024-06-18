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
      <label className="hidden sm:flex text-orange1 text-nowrap" htmlFor={name}>
        {label}:
      </label>
      <input
        className={`px-6 py-5 sm:py-2 rounded-md sm:rounded-full bg-black bg-opacity-[3%] outline-none w-full sm:w-auto ${
          wfull && "sm:w-full"
        }`}
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
