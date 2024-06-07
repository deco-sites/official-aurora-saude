import { useFormSteps } from "../sdk/useFormSteps.ts";
import { useUI } from "site/sdk/useUI.ts";
import FormStepOne from "../sections/FormStepOne.tsx";
import FormStepTwo from "../sections/FormStepTwo.tsx";
import FormStepThree from "site/sections/FormStepThree.tsx";
import SecondStepOption1 from "site/sections/SecondStepOption1.tsx";
import SecondStepOption2 from "site/sections/SecondStepOption2.tsx";
import ThirdStepOption1 from "site/sections/ThirdStepOption1.tsx";
import ThirdStepOption2 from "site/sections/ThirdStepOption2.tsx";

export default function ControlFormSteps() {
  const { activeStep, StepComponent } = useFormSteps();
  const { activeOption } = useUI();

  return (
    <>
      {activeStep.value === 1 && <FormStepOne />}
      {activeStep.value === 2 && (
        <>
          {activeOption.value === 1 && (
            <FormStepTwo Component={SecondStepOption1} />
          )}
          {(activeOption.value === 2 || activeOption.value === 3) && (
            <FormStepTwo Component={SecondStepOption2} />
          )}
        </>
      )}

      {activeStep.value === 3 && (
        <>
          {activeOption.value === 1 && (
            <FormStepThree Component={ThirdStepOption1} />
          )}
          {(activeOption.value === 2 || activeOption.value === 3) && (
            <FormStepThree Component={ThirdStepOption2} />
          )}
        </>
      )}
    </>
  );
}
