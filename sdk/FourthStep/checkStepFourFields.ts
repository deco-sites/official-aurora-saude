import { useFormSteps } from "site/sdk/useFormSteps.ts";

import { useBeneficiaryInputs } from "site/sdk/useBeneficiaryInputs.ts";
import { useSelectPlanButtons } from "site/sdk/useSelectPlanButtons.ts";

const { activeStep, changeStep } = useFormSteps();
const { selectedBeneficiaryInput } = useBeneficiaryInputs();

const { activePlanBtn } = useSelectPlanButtons();

export const handleNextStepFourthStep = () => {
    //console.log("Verificação quarto passo", activePlanBtn.value);

    changeStep(activeStep.value, "increase");

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
