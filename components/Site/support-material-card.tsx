export default function SupportMaterialCard() {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center bg-white w-full rounded-[20px] px-10 py-7">
            <div className="flex flex-col">
                <span className="text-pink1 text-sm font-light">00/00/00</span>
                <span className="font-sora font-semibold text-gray10">
                    Nome do material de<br /> apoio em até quatro linhas
                </span>
                <div className="flex flex-col lg:flex-row text-xs font-light text-black text-opacity-25">
                    <span>Categoria</span>
                    <span>Belo Horizonte / MG</span>
                </div>
            </div>
            <button className="flex justify-center items-center gap-2 bg-pink1 text-white rounded-full py-1 px-12">
                <span>Baixar</span>
                <svg className="w-8 h-8">
                    <use href="/sprites.svg#DownloadIcon" />
                </svg>
            </button>
        </div>
    );
}
