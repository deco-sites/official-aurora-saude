import Image from "apps/website/components/Image.tsx";
import { useClickOutsideListener } from "site/helpers/Site/useClickOutsideListener.ts";
import { useRef } from "preact/hooks";
import { MutableRefObject } from "https://esm.sh/v128/preact@10.19.6/compat/src/index.js";

interface LoggedAreasDropdownMenuProps {
    openerRef: MutableRefObject<HTMLElement | null>;
    setOpen: (state: boolean) => void;
}

export default function LoggedAreasDropdownMenu({
    openerRef,
    setOpen,
}: LoggedAreasDropdownMenuProps) {
    const dropdownRef = useRef(null);
    useClickOutsideListener(dropdownRef, openerRef, setOpen);

    return (
        <div
            ref={dropdownRef}
            className="absolute top-10 -left-7 flex flex-col rounded-2xl bg-[#ffb9a6] z-50"
        >
            <div className="flex justify-end pt-4 px-5">
                <Image
                    src={"/Site/close-icon.svg"}
                    alt="Close Icon"
                    className="cursor-pointer"
                    onClick={() => setOpen(false)}
                />
            </div>
            <div className="flex flex-col gap-3 pb-7 px-14">
                <a href="#">
                    <span>Sou Cliente</span>
                </a>
                <a href="#">
                    <span>Sou Empresa</span>
                </a>
                <a href="#">
                    <span>Sou Corretor</span>
                </a>
                <a href="#">
                    <span>Sou Prestador</span>
                </a>
            </div>
        </div>
    );
}
