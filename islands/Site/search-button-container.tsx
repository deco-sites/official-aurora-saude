import SearchButton from "site/islands/Site/search-button.tsx";
import { useSignal } from "@preact/signals";

export default function SearchButtonContainer({ option }) {
    const expandedInput = useSignal(false);

    return (
        <div className="hidden lg:flex gap-12">
            {expandedInput.value && (
                <input
                    type="text"
                    placeholder="Escreva aqui o que você está procurando"
                    id=""
                    name=""
                    className="w-[500px] px-12 rounded-full text-white bg-orange1 border border-white outline-none placeholder-white"
                />
            )}

            {!expandedInput.value && (
                <div className="flex items-center gap-16">
                    {option?.menuItems.map((item) => (
                        <a
                            key={item.text}
                            href="#"
                            className={`${
                                option.name === "prestador"
                                    ? "text-pink2"
                                    : "text-white"
                            } font-bold text-lg font-sora`}
                        >
                            {item.text}
                        </a>
                    ))}
                </div>
            )}

            <SearchButton option={option} expandedInput={expandedInput} />
        </div>
    );
}