import { useFormSteps } from "../sdk/useFormSteps.ts";
import { useUI } from "site/sdk/useUI.ts";
import FormStepOne from "../sections/FormStepOne.tsx";
import FormStepTwo from "../sections/FormStepTwo.tsx";
import FormStepThree from "site/sections/FormStepThree.tsx";
import FormStepFour from "site/sections/FormStepFour.tsx";
import FormStepFive from "site/sections/FormStepFive.tsx";
import SecondStepOption1 from "site/sections/SecondStepOption1.tsx";
import SecondStepOption2 from "site/sections/SecondStepOption2.tsx";
import ThirdStepOption1 from "site/sections/ThirdStepOption1.tsx";
import ThirdStepOption2 from "site/sections/ThirdStepOption2.tsx";
import FormStepTwoforFourthOption from "site/sections/FormStepTwoforFourthOption.tsx";
import CompletedForm from "site/sections/CompletedForm.tsx";

export default function ControlFormSteps() {
  const { activeStep, StepComponent } = useFormSteps();
  const { activeOption } = useUI();
  console.log("clarinha", activeOption.value);
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
          {activeOption.value === 4 && <FormStepTwoforFourthOption />}
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
      {activeStep.value === 4 && <FormStepFour />}
      {activeStep.value === 5 && <FormStepFive />}
      {activeStep.value === 6 && <CompletedForm />}
    </>
  );
}
