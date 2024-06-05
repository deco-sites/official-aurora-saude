import { useFormSteps } from "../sdk/useFormSteps.ts";
import FormStepOne from "../sections/FormStepOne.tsx";
import FormStepTwo from "../sections/FormStepTwo.tsx";

export default function ControlFormSteps() {
  const { activeStep } = useFormSteps();
  return (
    <>
      {activeStep.value === 1 ? <FormStepOne /> : <FormStepTwo />}
    </>
  );
}
