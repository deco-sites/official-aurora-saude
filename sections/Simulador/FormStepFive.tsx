import ProgressTracker from "../../components/Simulador/progress-tracker.tsx";
import FormTitleH1 from "../../components/Simulador/form-title-h1.tsx";
import SelectedPlan from "../../islands/Simulador/selected-plan.tsx";
import SelectedPlanDetails from "../../components/Simulador/selected-plan-details.tsx";
import { useFormSteps } from "../../sdk/Simulador/useFormSteps.ts";
import NewSimulationButton from "../../islands/Simulador/new-simulation-btn.tsx";
import ReceiveContactButton from "../../islands/Simulador/receive-contact-btn.tsx";
import PreviousStepBtn from "../../islands/Simulador/previous-step-btn.tsx";
import { whoWillUseThePlan } from "../../helpers/Simulador/whoWillUseThePlan.ts";
import { useUI } from "../../sdk/Simulador/useUI.ts";
import { useStepTwoOption1InputValues } from "../../sdk/Simulador/SecondStepOption1/useStepTwoOption1InputValues.ts";
import { useStepTwoOption2InputValues } from "../../sdk/Simulador/SecondStepOption2/useStepTwoOption2InputValues.ts";
import { useStepThreeInputValues } from "../../sdk/Simulador/ThirdStep/useStepThreeInputValues.ts";
import { useSelectPlanButtons } from "../../sdk/Simulador/useSelectPlanButtons.ts";
import { plansInfos } from "../../helpers/Simulador/plansInfos.ts";

/*interface FormStepFourProps {
  Component: React.ComponentType;
}*/

export default function FormStepFive() {
  const { activeStep, changeStep } = useFormSteps();

  //Step 1
  const { activeOption } = useUI();
  console.log("Step1", activeOption.value);

  //Step 2
  const {
    nameValue,
    emailValue,
    telValue,
    cityValue,
    ageRangeValue,
    alreadyHavePlanValue,
  } = useStepTwoOption1InputValues();

  console.log(
    "Step2",
    nameValue.value,
    emailValue.value,
    telValue.value,
    cityValue.value,
    ageRangeValue.value,
    alreadyHavePlanValue.value,
  );

  //Step 2 option 2
  const {
    socialReasonValue,
    name2Value,
    tel2Value,
    email2Value,
  } = useStepTwoOption2InputValues();

  console.log(
    "step2 option 2",
    socialReasonValue.value,
    name2Value.value,
    tel2Value.value,
    email2Value.value,
  );

  //Step 3
  const {
    thirdStepSignal,
  } = useStepThreeInputValues();
  console.log(
    "step 3",
    thirdStepSignal.value.whoUseThePlan,
    thirdStepSignal.value.beneficiariesValuesArr,
  );

  //Step 4
  const { activePlanBtn } = useSelectPlanButtons();
  console.log("Step4", activePlanBtn.value);

  return (
    <>
      {/*<Component />*/}

      <div className="flex justify-center lg:width-calc mt-32">
        <div className="flex gap-6 lg:w-[1400px]">
          <div className="bg-white lg:bg-gray1 rounded-2xl lg:p-8 w-full">
            <div className="overflow-x-auto lg:overflow-x-visible pl-8 lg:pl-0 w-screen lg:w-full scrollbar-none">
              <ProgressTracker currentStep={5} />
            </div>
            <div className="flex flex-col gap-4 lg:gap-0 px-8 lg:px-0 w-screen lg:w-auto">
              <div className="my-16">
                <FormTitleH1 text1={"Seu plano"} />
              </div>

              <SelectedPlan
                selectedPlanName={plansInfos[activePlanBtn.value - 1].title}
              />
              <SelectedPlanDetails
                simulationType={activeOption.value}
                name={nameValue.value}
                email={emailValue.value}
                alreadyHavePlan={alreadyHavePlanValue.value}
                whoUseThePlan={thirdStepSignal.value.whoUseThePlan}
                beneficiariesArr={thirdStepSignal.value.beneficiariesValuesArr}
              />
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                {
                  /*<button
                onClick={(e) => {
                  changeStep(activeStep.value, "increase");
                  //changeStep(currentStep + 1, e);
                  //console.log(activeOption); //Dou um console.log na opção escolhida inicialmente
                }}
                className="flex items-center gap-8 bg-orange1 rounded-full text-white text-left px-12 py-4 text-sm"
              >
                <img
                  src={"/yellow-phone-icon.png"}
                  alt="Icon"
                  className="w-7"
                />
                Receber contato de <br /> um especialista
              </button>*/
                }
                <PreviousStepBtn
                  options={whoWillUseThePlan}
                  executionFunc={() => changeStep(activeStep.value, "decrease")}
                />
                <div className="flex flex-col lg:flex-row justify-end gap-8 my-8">
                  <ReceiveContactButton
                    number={activeStep.value}
                    mission={"increase"}
                  />
                  <NewSimulationButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
