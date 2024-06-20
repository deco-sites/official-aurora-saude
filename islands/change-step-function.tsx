import { useFormSteps } from "site/sdk/useFormSteps.ts";

{
  /*
export default function changeStep(step, action) {
  const { activeStep } = useFormSteps();

  console.log("chamou a função", step);

  if (action === "increase") {
    activeStep.value = step + 1;
  } else if (action === "decrease") {
    activeStep.value = step;
  }
}*/
}

export default function changeStep(
  currentStep: number,
  direction: "increase" | "decrease",
) {
  const { activeStep } = useFormSteps();
  if (direction === "increase") {
    activeStep.value = currentStep + 1;
  } else if (direction === "decrease") {
    activeStep.value = currentStep;
  }
}
