interface IFormTitle {
  text: string;
}

export default function FormTitle({ text }: IFormTitle) {
  return (
    <span
      className="text-[#a9a9a9] font-semibold text-lg"
      dangerouslySetInnerHTML={{ __html: text }}
    >
    </span>
  );
}
