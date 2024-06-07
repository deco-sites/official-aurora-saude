import { useFormSteps } from "site/sdk/useFormSteps.ts";

export default function changeStep(step, action) {
  const { activeStep } = useFormSteps();

  console.log("chamou a função", step);
  if (action === "increase") {
    activeStep.value = step + 1;
  } else if (action === "decrease") {
    activeStep.value = step;
  }
}
