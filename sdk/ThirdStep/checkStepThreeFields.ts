import { useFormSteps } from "site/sdk/useFormSteps.ts";
import { useStepThreeInputValues } from "./useStepThreeInputValues.ts";
import { useBeneficiaryInputs } from "site/sdk/useBeneficiaryInputs.ts";
import { useUI } from "site/sdk/useUI.ts";

const { activeStep, changeStep } = useFormSteps();
const { selectedBeneficiaryInput } = useBeneficiaryInputs();

const {
    thirdStepSignal,
    idsWithEmptyRange,
} = useStepThreeInputValues();

export const checkSingleSelect = (id: number) => {
    idsWithEmptyRange.value = idsWithEmptyRange.value.filter((el) => id !== el);
};

export const checkFieldsForThirdStep = () => {
    console.log(
        "Array dos Beneficiários:",
        thirdStepSignal.value.beneficiariesValuesArr,
    );

    if (activeStep.value === 3) {
        idsWithEmptyRange.value = thirdStepSignal.value
            .beneficiariesValuesArr
            .filter((item) => item.range === "")
            .map((item) => item.id);

        console.log(
            "ID'S DOS ITENS VAZIOS",
            thirdStepSignal.value.idsWithEmptyRange,
        );
        console.log("Lucca", thirdStepSignal.value.whoUseThePlan);
    }
};

export const handleNextStepThirdStep = () => {
    if (thirdStepSignal.value.whoUseThePlan !== "somente_eu") {
        checkFieldsForThirdStep();
    }

    //TO-DO

    if (
        idsWithEmptyRange.value.length === 0 ||
        thirdStepSignal.value.whoUseThePlan === "somente_eu"
    ) {
        changeStep(activeStep.value, "increase");
    }

    // Validação dos campos do passo atual
    {
        /*
    if (activeStep.value === 3) {
        selectedBeneficiaryInput.value.trim() === "option1"
            ? whoUseThePlanError.value = true
            : whoUseThePlanError.value = false;

        // Se todos os campos do passo 2 estão preenchidos, avance para o próximo passo
        if (
            whoUseThePlanError.value === false
        ) {
            changeStep(activeStep.value, "increase");
        }
    }*/
    }
};
