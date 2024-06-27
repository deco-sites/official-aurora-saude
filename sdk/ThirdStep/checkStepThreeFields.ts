import { useFormSteps } from "site/sdk/useFormSteps.ts";
import { useStepThreeInputValues } from "./useStepThreeInputValues.ts";
import { useBeneficiaryInputs } from "site/sdk/useBeneficiaryInputs.ts";

const { activeStep, changeStep } = useFormSteps();
const { selectedBeneficiaryInput } = useBeneficiaryInputs();

const {
    thirdStepSignal,
} = useStepThreeInputValues();

export const checkFieldsForThirdStep = () => {
    console.log(
        "Array dos Beneficiários:",
        thirdStepSignal.value.beneficiariesValuesArr,
    );

    if (activeStep.value === 3) {
        thirdStepSignal.value.idsWithEmptyRange = thirdStepSignal.value
            .beneficiariesValuesArr
            .filter((item) => item.range === "")
            .map((item) => item.id);

        console.log(
            "ID'S DOS ITENS VAZIOS",
            thirdStepSignal.value.idsWithEmptyRange,
        );
    }
};

export const handleNextStepThirdStep = () => {
    checkFieldsForThirdStep();

    if (thirdStepSignal.value.idsWithEmptyRange.length === 0) {
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
