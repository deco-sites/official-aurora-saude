import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  /**
   * @format rich-text
   * @description the text of button
   */
  text: string;
  icon?: ImageWidget;
  link: string;
}

export interface Props {
  logo: {
    src: ImageWidget;
    alt: string;
    width: number;
  };
  buttonReceiveContact: CTA;
  buttonBackToSite: CTA;
}

export default function Section(
  { logo, buttonReceiveContact, buttonBackToSite }: Props,
) {
  return (
    <div
      className="flex justify-center"
      style={{ width: "calc(100vw - 18px)" }}
    >
      <header className="flex items-center justify-between py-10 min-w-[1400px] max-w-[1660px]">
        <Image
          src={"/logo_simulador.png"}
          alt="Aurora Simulador Logo"
          className="object-cover"
          style={{ width: `${logo.width}px` }}
        />

        <div className="flex gap-4">
          <a href={buttonReceiveContact.link}>
            <button className="flex items-center gap-2 bg-gray5 text-gray7 text-xs px-5 rounded-full py-3">
              <Image src={buttonReceiveContact.icon} alt="" className="w-4" />
              <div
                dangerouslySetInnerHTML={{ __html: buttonReceiveContact.text }}
              />
            </button>
          </a>

          <a href={buttonBackToSite.link}>
            <button className="bg-orange1 text-white text-xs px-5 rounded-full py-3">
              <div
                dangerouslySetInnerHTML={{ __html: buttonBackToSite.text }}
              />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
}
