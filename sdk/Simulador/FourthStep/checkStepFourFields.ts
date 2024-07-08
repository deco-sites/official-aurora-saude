import { useFormSteps } from "../useFormSteps.ts";

const { activeStep, changeStep } = useFormSteps();

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
