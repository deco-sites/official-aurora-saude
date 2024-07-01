import Image from "apps/website/components/Image.tsx";
import { useUI } from "../sdk/useUI.ts";

export default function FirstStepImage({}) {
  const { selectedYellowText, selectedNormalText, selectedImage } = useUI();
  return (
    <div className="px-6 flex items-center relative lg:w-3/4 lg:px-0">
      <Image
        src={selectedImage.value}
        alt=""
        className="rounded-2xl h-banner-height object-cover w-full"
      />
      <span className="absolute font-sora left-16 bottom-9 w-3/5 text-3xl lg:left-40 lg:w-40 lg:bottom-[30%] text-yellow lg:text-2xl font-semibold">
        {selectedYellowText.value}{" "}
        <span className="text-white">{selectedNormalText.value}</span>
      </span>
    </div>
  );
}
