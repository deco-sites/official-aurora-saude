interface IFormTitle {
  text1: string;
  text2?: string;
}

export default function FormTitleH1({ text1, text2 }: IFormTitle) {
  return (
    <span className="text-[#767676] font-semibold text-lg my-8">
      {text1} <br /> {text2}
    </span>
  );
}
