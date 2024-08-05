import SearchButton from "site/islands/Site/search-button.tsx";
import { useSignal } from "@preact/signals";

export default function SearchButtonContainer({ option, expandedInput }) {
    //const expandedInput = useSignal(false);

    return (
        <div className="hidden lg:flex flex-grow justify-end gap-12">
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
                <div
                    className={`flex items-center text-center whitespace-nowrap ${
                        option.id === 3 ? "justify-between flex-grow" : "gap-14"
                    }`}
                >
                    {option?.menuItems.map((item) => (
                        <a
                            key={item.text}
                            href={item.link}
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
