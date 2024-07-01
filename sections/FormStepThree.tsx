import InputSelect from "site/components/input-select.tsx";
import ProgressTracker from "../components/progress-tracker.tsx";
import NextStepBtn from "site/islands/next-step-btn.tsx";
import { whoWillUseThePlan } from "site/helpers/whoWillUseThePlan.ts";
import { handleNextStepThirdStep } from "../sdk/ThirdStep/checkStepThreeFields.ts";
import { useUI } from "site/sdk/useUI.ts";
import PreviousStepBtn from "site/islands/previous-step-btn.tsx";
import changeStep from "site/islands/change-step-function.tsx";
import { useFormSteps } from "site/sdk/useFormSteps.ts";

interface FormStepTwoProps {
  Component: React.ComponentType;
}

const { activeOption } = useUI();
const { activeStep } = useFormSteps();

export default function FormStepThree({ Component }: FormStepTwoProps) {
  return (
    <>
      <div className="flex justify-center lg:width-calc mt-32">
        <div className="flex gap-6 lg:w-[1400px]">
          <div className="bg-white lg:bg-gray1 rounded-2xl lg:p-8 w-full">
            <div className="overflow-x-auto lg:overflow-x-visible pl-8 lg:pl-0 w-screen lg:w-full scrollbar-none">
              <ProgressTracker currentStep={3} />
            </div>
            <div className="flex flex-col gap-4 px-8 lg:px-0">
              {<Component />}
            </div>
            <div className="flex gap-4 justify-center py-14 px-8 lg:justify-between lg:px-0">
              <PreviousStepBtn
                options={whoWillUseThePlan}
                executionFunc={() => changeStep(activeStep.value, "decrease")}
              />
              <NextStepBtn
                options={whoWillUseThePlan}
                executionFunc={handleNextStepThirdStep}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
