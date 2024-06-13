import { useUI } from "../sdk/useUI.ts";

export default function OptionButton({ op }) {
  const {
    activeOption,
    selectedYellowText,
    selectedNormalText,
    selectedImage,
  } = useUI();

  return (
    <div
      className={`p-1 rounded-full ${
        op.id === activeOption.value ? "shadow-outline-orange1" : ""
      }`}
    >
      <button
        className={`flex items-center justify-center text-sm bg-[#f3f3f3] rounded-full w-full h-20`}
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
          <span
            className="text-sm text-black text-opacity-55"
            dangerouslySetInnerHTML={{ __html: op.option }}
          >
          </span>
        </div>
      </button>
    </div>
  );
}
