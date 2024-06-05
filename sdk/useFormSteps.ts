import { signal } from "@preact/signals";
import changeStep from "../islands/change-step-function.tsx";

const activeStep = signal(1);

const state = {
  activeStep,
  changeStep,
};

export const useFormSteps = () => state;
