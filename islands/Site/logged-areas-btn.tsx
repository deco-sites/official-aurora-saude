import LoggedAreasDropdownMenu from "site/islands/Site/logged-areas-dropdown-menu.tsx";
import { useRef, useState } from "preact/hooks";

export default function LoggedAreasBtn() {
    const [open, setOpen] = useState(false);
    const avatarRef = useRef(null);

    return (
        <>
            <div
                className="flex items-center gap-2 cursor-pointer"
                ref={avatarRef}
                onClick={() => setOpen(!open)}
            >
                <img
                    src={"/Site/user-icon.svg"}
                    alt="User Icon"
                />
                <span className="font-semibold">
                    Áreas Logadas
                </span>
                <img
                    src={"/Site/down-arrow.svg"}
                    alt="Down Arrow"
                />

                {open && (
                    <LoggedAreasDropdownMenu
                        openerRef={avatarRef}
                        setOpen={setOpen}
                    />
                )}
            </div>
        </>
    );
}
