import { useState } from "preact/hooks";

interface Option {
    value: string;
    text: string;
}

export interface InputProps {
    label: string;
    options: Option[];
    value: string;
    inputValueSetter: (value: string) => void;
}

const CustomSelect = (
    { options, label, value, inputValueSetter }: InputProps,
) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        inputValueSetter(option);
        setIsOpen(false);
    };

    return (
        <div className="flex gap-6 items-center w-full flex-1">
            <label className="hidden lg:flex text-orange1 text-nowrap">
                {label}
            </label>

            <div className="relative w-full">
                {/* Select box */}
                <div
                    className={`flex items-center justify-between bg-gray1 text-black text-opacity-25 rounded-md cursor-pointer px-6 py-5 lg:py-2`}
                    onClick={toggleDropdown}
                >
                    <span>{value || "Selecione"}</span>
                    <svg
                        className={`transform transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                        } ml-auto`}
                        width="14"
                        height="7"
                        viewBox="0 0 16 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                            fill="black"
                            fillOpacity="0.25"
                        />
                    </svg>
                </div>

                {/* Dropdown */}
                {isOpen && (
                    <div
                        className={`absolute left-0 mt-[14px] bg-gray1 text-black text-opacity-25 rounded-md px-[57px] py-[30px] w-full`}
                    >
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className="text-center cursor-pointer mb-[33px] last:mb-0"
                                onClick={() => handleOptionClick(option.text)}
                            >
                                {option.text}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomSelect;
