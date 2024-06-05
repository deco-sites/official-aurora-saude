import { useUI } from "../sdk/useUI.ts";

export default function OptionButton({ op }) {
  const {
    activeOption,
    selectedYellowText,
    selectedNormalText,
    selectedImage,
  } = useUI();

  return (
    <button
      className={`flex items-center justify-center text-sm bg-[#f3f3f3] rounded-full h-20 ${
        op.id === activeOption.value ? "shadow-outline-orange" : ""
      }`}
      onClick={() => {
        activeOption.value = op.id;
        selectedYellowText.value = op.yellowText;
        selectedNormalText.value = op.normaltext;
        selectedImage.value = op.image;
      }}
      key={op.id}
    >
      <div className="w-[30%] flex justify-center">
        <img src={op.icon} alt="" className="w-6" />
      </div>
      <div className="w-[70%] text-left pr-4">
        <span className="">{op.option}</span>
      </div>
    </button>
  );
}
