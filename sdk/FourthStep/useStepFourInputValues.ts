import { signal } from "@preact/signals";

interface Beneficiary {
    id: number;
    name: string;
    range: string;
    qty: number;
}

interface IFourthStepSchema {
    beneficiariesValuesArr: Beneficiary[];
}

const fourthStepSchema: IFourthStepSchema = {
    beneficiariesValuesArr: [{
        id: 1,
        name: "agerange-1",
        range: "",
        qty: 1,
    }],
};

//SecondStep Option 1
const fourthStepSignal = signal(fourthStepSchema);

const state = {
    fourthStepSignal,
};

export const useStepThreeInputValues = () => state;
