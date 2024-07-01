import { signal } from "@preact/signals";
import { whoWillUseThePlan } from "site/helpers/whoWillUseThePlan.ts";

interface Beneficiary {
    id: number;
    name: string;
    range: string;
    qty: number;
}

interface IThirdStepSchema {
    whoUseThePlan: string;
    beneficiariesValuesArr: Beneficiary[];
    idsWithEmptyRange: number[];
}

const thirdStepSchema: IThirdStepSchema = {
    whoUseThePlan: "somente_eu",
    beneficiariesValuesArr: [{
        id: 1,
        name: "agerange-1",
        range: "",
        qty: 1,
    }],
    idsWithEmptyRange: [],
};

//SecondStep Option 1
const thirdStepSignal = signal(thirdStepSchema);
const idsWithEmptyRange = signal<number[]>([]);

const state = {
    thirdStepSignal,
    idsWithEmptyRange,
};

export const useStepThreeInputValues = () => state;
