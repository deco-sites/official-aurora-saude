import FormTitleH1 from "site/components/form-title-h1.tsx";
import ProgressTracker from "../components/progress-tracker.tsx";
import NextStepBtn from "site/islands/next-step-btn.tsx";
import {
  handleNextStepSecondStepOp1,
} from "../sdk/SecondStepOption1/checkStepTwoOption1Fields.ts";

import { handleNextStepSecondStepOp2 } from "../sdk/SecondStepOption2/checkStepTwoOption2Fields.ts";
import { useUI } from "site/sdk/useUI.ts";
import PreviousStepBtn from "site/islands/previous-step-btn.tsx";
import changeStep from "site/islands/change-step-function.tsx";
import { useFormSteps } from "site/sdk/useFormSteps.ts";

interface FormStepTwoProps {
  Component: React.ComponentType;
}

export default function FormStepTwo({ Component }: FormStepTwoProps) {
  const { activeStep } = useFormSteps();

  const alreadyhaveplanoptions = [
    { value: "option1", text: "Opção 1" },
    { value: "option2", text: "Opção 2" },
    { value: "option3", text: "Opção 3" },
  ];

  const { activeOption } = useUI();

  console.log("TESTE 1 - BOTÃO VOLTAR", activeStep.value);
  return (
    <>
      <div className="flex justify-center sm:width-calc">
        <div className="flex gap-6 sm:w-[1400px]">
          <div className="bg-white sm:bg-gray1 rounded-2xl sm:p-8 w-full">
            <div className="overflow-x-auto sm:overflow-x-visible pl-8 sm:pl-0 w-screen sm:w-full scrollbar-none">
              <ProgressTracker currentStep={2} />
            </div>
            <div className="flex flex-col gap-4 px-8 sm:px-0">
              <FormTitleH1
                text1={"Faça a simulação para você"}
                text2={"ou para outra pessoa."}
              />

              {<Component />}
            </div>
            <div className="flex gap-4 justify-center py-14 px-8 sm:justify-between sm:px-0">
              <PreviousStepBtn
                options={alreadyhaveplanoptions}
                executionFunc={() => changeStep(activeStep.value, "decrease")}
              />

              <NextStepBtn
                options={alreadyhaveplanoptions}
                executionFunc={activeOption.value === 1
                  ? handleNextStepSecondStepOp1
                  : handleNextStepSecondStepOp2}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
