import Image from "apps/website/components/Image.tsx";
import { useRef } from "preact/hooks";
import { useClickOutsideListener } from "site/helpers/Site/useClickOutsideListener.ts";

export default function DropdownMobileMenu({ option, openerRef, setOpen }) {
    const dropdownRef = useRef(null);
    useClickOutsideListener(dropdownRef, openerRef, setOpen);

    const backgroundBtnColors = {
        1: "bg-orange6",
        2: "bg-purple3",
        3: "bg-pink8",
        4: "bg-yellow3",
    };

    const backgroundColors = {
        1: "bg-orange1",
        2: "bg-darkPurple",
        3: "bg-pink2",
        4: "bg-yellow",
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 h-screen w-screen flex flex-col p-16 ${
                    backgroundColors[option.id]
                } z-50`}
                ref={dropdownRef}
            >
                <div className="flex justify-between border-b border-b-white pb-8">
                    <div
                        className={`flex items-center gap-5 lg:hidden rounded-3xl ${
                            backgroundBtnColors[option.id]
                        } text-white px-5 py-2`}
                    >
                        <span>Sou cliente</span>
                        <img
                            src={"/Site/down-arrow.svg"}
                            alt=""
                            className=""
                        />
                    </div>

                    <Image
                        src={"/Site/search-icon.svg"}
                        alt="Search Icon"
                        className="w-6 h-6"
                    />
                </div>

                <div className="flex flex-col gap-7 text-white font-sora font-bold text-2xl pt-8 pb-24">
                    <a href="#">
                        <span>Quem somos</span>
                    </a>
                    <a href="#">
                        <span>Nossos planos</span>
                    </a>
                    <a href="#">
                        <span>Jornada de cuidado</span>
                    </a>
                </div>
                <div className="flex justify-between py-7 border-y border-y-white">
                    <div className="flex gap-3">
                        <Image src={"/Site/user-icon.svg"} alt="" />
                        <span className="text-white font-bold text-sm">
                            Áreas Logadas
                        </span>
                    </div>
                    <Image src={"/Site/arrow-down-square.svg"} alt="" />
                </div>
                <div className="flex justify-between text-white text-xs py-7">
                    <span>Perguntas Frequentes</span>
                    <span>Quero ser Cliente</span>
                </div>
                <div className="flex justify-center pt-16">
                    <div
                        onClick={() => setOpen(false)}
                        className="flex gap-6 bg-yellow rounded-3xl py-3 px-20 text-pink2"
                    >
                        <span>Voltar</span>
                        <Image
                            src={"/Site/pink-back-arrow.svg"}
                            alt="Back Icon"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
