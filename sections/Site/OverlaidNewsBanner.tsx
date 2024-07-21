import Image from "apps/website/components/Image.tsx";

export default function OverlaidNewsBanner() {
    return (
        <>
            <div className="relative flex items-center flex-col gap-10 h-[300px] bg-white lg:bg-gray4">
                <div className="flex px-10 lg:px-0 justify-center lg:bg-fixed lg:bg-center lg:bg-no-repeat lg:bg-cover flex-col gap-10 w-full max-w-[1400px]">
                    <div className="absolute px-10 lg:px-0 inset-0 flex h-[400px] lg:h-[500px] justify-center -mt-28">
                        <div className="flex gap-6 max-w-[1400px] overflow-hidden rounded-[20px]">
                            <div className="relative w-full lg:w-2/3">
                                <Image
                                    src={"/Site/casal-banner4.png"}
                                    alt={"Banner"}
                                    className="max-w-full h-full w-full object-cover rounded-[20px]"
                                />
                                <div className="absolute flex gap-7 lg:gap-0 flex-col lg:flex-row justify-between bottom-10 pl-10 pr-12 lg:pl-16 lg:pr-9 left-0 text-white w-full items-end">
                                    <div className="flex flex-col gap-5">
                                        <span className="font-light">
                                            22 de agosto
                                        </span>
                                        <span className="hidden lg:flex font-sora font-bold text-2xl">
                                            Minas Gerais ganha operadora
                                            de<br /> saúde fundada por mulheres
                                        </span>
                                        <span className="flex lg:hidden font-sora font-bold text-2xl">
                                            Minas Gerais<br />{" "}
                                            ganha operadora<br />{" "}
                                            de saúde fundada<br /> por mulheres
                                        </span>
                                    </div>
                                    <div className="flex w-full justify-center lg:justify-end items-start gap-11">
                                        <svg className="w-12 h-12 transform -scale-x-100 cursor-pointer overflow-visible">
                                            <use href="/sprites.svg#NewsPageArrowRight">
                                            </use>
                                        </svg>
                                        <button className="text-orange4 w-full lg:w-auto whitespace-nowrape font-bold text-xs lg:text-base bg-white bg-opacity-80 rounded-[20px] py-2 px-9">
                                            Leia Mais
                                        </button>
                                        <svg className="w-12 h-12 cursor-pointer overflow-visible">
                                            <use href="/sprites.svg#NewsPageArrowRight">
                                            </use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex relative w-1/3">
                                <Image
                                    src={"/Site/group-banner.png"}
                                    alt={"Banner"}
                                    className="max-w-full h-full w-full object-cover rounded-[20px]"
                                />
                                <div className="absolute flex flex-col w-full pl-14 gap-5 bottom-10 left-0 text-white">
                                    <span className="font-light">
                                        1 de setembro
                                    </span>
                                    <span className="font-sora font-bold text-2xl">
                                        Um novo jeito de <br />cuidar da saúde
                                    </span>
                                    <button className="self-start font-black">
                                        Leia mais
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
