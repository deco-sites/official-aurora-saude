import { useFormSteps } from "site/sdk/useFormSteps.ts";
import { useUI } from "site/sdk/useUI.ts";
import { useStepThreeInputValues } from "./useStepThreeInputValues.ts";
import { useBeneficiaryInputs } from "site/sdk/useBeneficiaryInputs.ts";

const { activeStep, changeStep } = useFormSteps();
const { activeOption } = useUI();
const { selectedBeneficiaryInput } = useBeneficiaryInputs();

const {
    whoUseThePlan,
    recipientqty,

    whoUseThePlanError,
} = useStepThreeInputValues();

export const CheckFields = () => {
    //activeStep.value - É o passo atual do formulário
    //activeOption.value - É a opção escolhida no primeiro step

    console.log("Razão Social", whoUseThePlan.value);

    changeStep(activeStep.value, "increase");
};

export const handleNextStepThirdStep = () => {
    console.log("Quantidade no input:", recipientqty.value);
    // Se o passo atual é 1, sempre permita avançar
    if (activeStep.value === 1) {
        changeStep(activeStep.value, "increase");
        return;
    }

    // Validação dos campos do passo atual
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
    }

    // Adicione outras validações para passos adicionais conforme necessário
    // if (activeStep.value === 3) {
    //   // validações para o passo 3
    // }
};
