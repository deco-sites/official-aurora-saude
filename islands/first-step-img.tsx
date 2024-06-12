import Image from "apps/website/components/Image.tsx";
import { useUI } from "../sdk/useUI.ts";

export default function FirstStepImage({}) {
  const { selectedYellowText, selectedNormalText, selectedImage } = useUI();
  return (
    <div className="flex items-center relative w-3/4">
      <Image
        src={selectedImage.value}
        alt=""
        className="rounded-2xl h-banner-height object-cover w-full"
      />
      <span className="absolute font-getho left-40 w-[150px] text-[#fcff73] text-2xl font-semibold">
        {selectedYellowText.value}{" "}
        <span className="text-white">{selectedNormalText.value}</span>
      </span>
    </div>
  );
}
