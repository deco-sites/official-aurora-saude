import { useFormSteps } from "../../sdk/Simulador/useFormSteps.ts";
import { useUI } from "../../sdk/Simulador/useUI.ts";
import FormStepOne from "../../sections/Simulador/FormStepOne.tsx";
import FormStepTwo from "../../sections/Simulador/FormStepTwo.tsx";
import FormStepThree from "../../sections/Simulador/FormStepThree.tsx";
import FormStepFour from "../../sections/Simulador/FormStepFour.tsx";
import FormStepFive from "../../sections/Simulador/FormStepFive.tsx";
import SecondStepOption1 from "../../sections/Simulador/SecondStepOption1.tsx";
import SecondStepOption2 from "../../sections/Simulador/SecondStepOption2.tsx";
import ThirdStepOption1 from "../../sections/Simulador/ThirdStepOption1.tsx";
import ThirdStepOption2 from "../../sections/Simulador/ThirdStepOption2.tsx";
import FormStepTwoforFourthOption from "../../sections/Simulador/FormStepTwoforFourthOption.tsx";
import CompletedForm from "../../sections/Simulador/CompletedForm.tsx";
import { useEffect } from "preact/hooks";

export default function ControlFormSteps() {
  const { activeStep } = useFormSteps();
  const { activeOption } = useUI();

  useEffect(() => {
    if (typeof globalThis !== "undefined") {
      globalThis.scrollTo(0, 0);
    }

    console.log("Chamou essa bagaça aqui");
  }, [activeStep.value]);

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
