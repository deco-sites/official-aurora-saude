export default function SearchButton({ option, expandedInput }) {
    function handleClick() {
        console.log("entrou aqui na função");
        console.log(expandedInput.value);
        expandedInput.value = !expandedInput.value;
        console.log(expandedInput.value);
    }

    return (
        <div
            onClick={handleClick}
            className={`flex gap-2 ${
                option.name === "prestador"
                    ? "text-pink2 border-pink2"
                    : "text-white border-white"
            } items-center border rounded-full px-7 py-3 cursor-pointer`}
        >
            <img
                src={option.name === "prestador"
                    ? "/Site/search-icon-pink.svg"
                    : "/Site/search-icon.svg"}
                alt=""
                className="w-7 h-7"
            />
            <span>Buscar</span>
        </div>
    );
}
