import InputSelect from "site/components/input-select.tsx";
import ProgressTracker from "../components/progress-tracker.tsx";
import NextStepBtn from "site/islands/next-step-btn.tsx";
import { whoWillUseThePlan } from "site/helpers/whoWillUseThePlan.ts";
import { handleNextStepThirdStepOp1 } from "site/sdk/ThirdStepOption1/checkStepThreeOption1Fields.ts";
import { useUI } from "site/sdk/useUI.ts";

interface FormStepTwoProps {
  Component: React.ComponentType;
}

const { activeOption } = useUI();

export default function FormStepThree({ Component }: FormStepTwoProps) {
  return (
    <>
      <div className="flex justify-center sm:width-calc">
        <div className="flex gap-6 sm:w-[1400px]">
          <div className="bg-white sm:bg-gray1 rounded-2xl sm:p-8 w-full">
            <div className="overflow-x-auto sm:overflow-x-visible pl-8 sm:pl-0 w-screen sm:w-full scrollbar-none">
              <ProgressTracker currentStep={3} />
            </div>
            <div className="flex flex-col gap-4 px-8 sm:px-0">
              {<Component />}
            </div>
            <div className="flex justify-center sm:justify-end py-8 px-8 sm:px-0">
              <NextStepBtn
                options={whoWillUseThePlan}
                executionFunc={activeOption.value === 1
                  ? handleNextStepThirdStepOp1
                  : "handleNextStepThirdStepOp2"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
