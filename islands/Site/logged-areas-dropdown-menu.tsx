import Image from "apps/website/components/Image.tsx";
import { useClickOutsideListener } from "site/helpers/Site/useClickOutsideListener.ts";
import { useRef } from "preact/hooks";
import { MutableRefObject } from "https://esm.sh/v128/preact@10.19.6/compat/src/index.js";
import Icon from "site/components/ui/Icon.tsx";

interface LoggedAreasDropdownMenuProps {
    openerRef: MutableRefObject<HTMLElement | null>;
    setOpen: (state: boolean) => void;
}

export default function LoggedAreasDropdownMenu({
    openerRef,
    setOpen,
    option,
}: LoggedAreasDropdownMenuProps) {
    const dropdownRef = useRef(null);
    useClickOutsideListener(dropdownRef, openerRef, setOpen);

    const handleClickInside = (event: MouseEvent) => {
        event.stopPropagation();
    };

    const bgColors = {
        1: "bg-orange7",
        2: "bg-purple4",
        3: "bg-pink9",
        4: "bg-yellow4",
    };

    return (
        <div
            ref={dropdownRef}
            className={`absolute top-10 -left-7 flex flex-col rounded-2xl ${
                bgColors[option.id]
            } z-50`}
            onClick={handleClickInside}
        >
            <div className="flex justify-end pt-4 px-5">
                <Icon
                    className={`h-auto cursor-pointer `}
                    id={`${option.id === 4 ? "PinkCloseIcon" : "CloseIcon"}`}
                    strokeWidth={1}
                    size={16}
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpen(false);
                    }}
                />
            </div>
            <div
                className={`flex flex-col gap-3 pb-7 px-14 ${
                    option.id === 4 ? "text-pink4" : "text-white"
                }`}
            >
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
