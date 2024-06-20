import { signal } from "@preact/signals";

//SecondStep Option 1
const whoUseThePlan = signal("");

const whoUseThePlanError = signal(false);

const state = {
    whoUseThePlan,

    whoUseThePlanError,
};

export const useStepThreeOption1InputValues = () => state;
