import { signal } from "@preact/signals";

//SecondStep Option 1
const whoUseThePlan = signal("");
const recipientqty = signal(0);

const whoUseThePlanError = signal(false);

const state = {
    whoUseThePlan,
    recipientqty,

    whoUseThePlanError,
};

export const useStepThreeInputValues = () => state;
