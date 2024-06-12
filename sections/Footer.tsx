import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
}

function Footer({
  image =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  href = "https://deco.cx/",
  text = "Made with",
  alt = "Made with deco.cx",
  height = 20,
  width = 50,
}: Props) {
  return (
    <div
      className="flex py-6 justify-center border-t-[#f0ecec] border-t-[1px] mt-12"
      style={{ width: "calc(100vw - 18px)" }}
    >
      <footer className="flex items-center justify-between text-[#bcbcbc] text-xs w-[1400px]">
        <div className="bg-black p-1 inline-block">
          <div className="border-white border-[1px] p-[5px] inline-block">
            <span className="p-2">
              ANS No: 423629
            </span>
          </div>
        </div>

        <span>CNPJ: 49.955.478/0001-64</span>
        <span>
          Endereço: Alameda Oscar Niemeyer, 288 - sala 503 - Vila da Serra -
          Nova Lima- MG
        </span>
        <img src={"/ans-logo.png"} alt="ANS Logo" className="" />
        <span>Todos os Direitos Reservados © 2023</span>
      </footer>
    </div>
  );
}

export default Footer;
