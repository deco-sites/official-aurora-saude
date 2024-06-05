export default function ProgressTracker({ steps, currentStep }) {
  console.log(currentStep);
  return (
    <div className="flex justify-between items-center w-full py-6">
      {steps.map((step, index) => (
        <div key={index} className="relative flex flex-col flex-1">
          <button
            className={`w-6 h-6 rounded-full flex items-center justify-center z-50 ${
              index + 1 <= currentStep
                ? "bg-[#ff8461] text-white"
                : "bg-[#ffdcd2] text-[#ffdcd2]"
            }`}
          >
          </button>
          <div
            className={`mt-2 ${
              index + 1 <= currentStep ? "text-[#ff8461]" : "text-[#ffdcd2]"
            }`}
          >
            <span className="font-semibold">{step}</span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`absolute top-3 w-full h-px 
              ${index + 1 <= currentStep ? "bg-[#ff8461]" : "bg-[#ffdcd2]"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
