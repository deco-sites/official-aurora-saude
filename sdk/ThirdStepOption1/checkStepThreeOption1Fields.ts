import { useFormSteps } from "site/sdk/useFormSteps.ts";
import { useUI } from "site/sdk/useUI.ts";
import { useStepThreeOption1InputValues } from "site/sdk/ThirdStepOption1/useStepThreeOption1InputValues.ts";
import { useBeneficiaryInputs } from "site/sdk/useBeneficiaryInputs.ts";

const { activeStep, changeStep } = useFormSteps();
const { activeOption } = useUI();
const { selectedBeneficiaryInput } = useBeneficiaryInputs();

const {
    whoUseThePlan,

    whoUseThePlanError,
} = useStepThreeOption1InputValues();

export const CheckFields = () => {
    //activeStep.value - É o passo atual do formulário
    //activeOption.value - É a opção escolhida no primeiro step

    console.log("Razão Social", whoUseThePlan.value);

    changeStep(activeStep.value, "increase");
};

export const handleNextStepThirdStepOp1 = () => {
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
