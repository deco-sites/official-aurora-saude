import InputSelect from "site/components/input-select.tsx";
import ProgressTracker from "../components/progress-tracker.tsx";
import NextStepBtn from "site/islands/next-step-btn.tsx";

interface FormStepTwoProps {
  Component: React.ComponentType;
}

export default function FormStepThree({ Component }: FormStepTwoProps) {
  const whoWillUseThePlan = [
    { value: "option1", text: "Somente eu" },
    { value: "option2", text: "Eu e meus dependentes" },
    { value: "option3", text: "Outra pessoa" },
  ];
  return (
    <>
      <div
        className="flex justify-center"
        style={{ width: "calc(100vw - 18px)" }}
      >
        <div className="flex gap-6 w-[1400px]">
          <div className="bg-gray1 rounded-2xl p-8 w-full">
            <div>
              <div>
                <ProgressTracker currentStep={3} />
              </div>
              <div>
                {<Component />}
              </div>
              <div className="flex justify-end py-8">
                <NextStepBtn options={whoWillUseThePlan} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
