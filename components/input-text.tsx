export interface InputProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
}

export default function InputText(
  { id, name, label, placeholder }: InputProps,
) {
  return (
    <div className="flex gap-6 items-center">
      <label className="text-[#ff8461]" htmlFor={name}>{label}:</label>
      <input
        className="px-6 py-2 rounded-full bg-[#f2f2f2] outline-none"
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
