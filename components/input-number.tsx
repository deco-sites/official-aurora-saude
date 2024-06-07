export interface InputProps {
  id: string;
  name: string;
  placeholder?: string;
}

export default function InputNumber(
  { id, name, placeholder }: InputProps,
) {
  return (
    <div className="flex gap-2 items-center">
      <button>
        <img src={"/trash-icon.png"} alt="Plus Icon" className="w-4" />
      </button>
      <input
        className="px-6 py-2 rounded-full bg-[#f2f2f2] outline-none w-20 text-center text-black text-opacity-25"
        type="number"
        id={id}
        name={name}
        placeholder={placeholder}
      />

      <button>
        <img src={"/plus-icon.png"} alt="Plus Icon" className="w-4" />
      </button>
    </div>
  );
}
