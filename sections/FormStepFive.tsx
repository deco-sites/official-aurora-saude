import ProgressTracker from "site/components/progress-tracker.tsx";
import FormTitleH1 from "site/components/form-title-h1.tsx";
import SelectedPlan from "../islands/selected-plan.tsx";
import SelectedPlanDetails from "site/components/selected-plan-details.tsx";
import { useFormSteps } from "site/sdk/useFormSteps.ts";
import NewSimulationButton from "../islands/new-simulation-btn.tsx";
import ReceiveContactButton from "site/islands/receive-contact-btn.tsx";
import PreviousStepBtn from "site/islands/previous-step-btn.tsx";
import { whoWillUseThePlan } from "site/helpers/whoWillUseThePlan.ts";

interface FormStepFourProps {
  Component: React.ComponentType;
}

export default function FormStepFive({ Component }: FormStepFourProps) {
  const { activeStep, changeStep } = useFormSteps();

  return (
    <>
      {/*<Component />*/}

      <div className="flex gap-6 sm:w-[1400px]">
        <div className="bg-white sm:bg-gray1 rounded-2xl sm:p-8 w-full">
          <div className="overflow-x-auto sm:overflow-x-visible pl-8 sm:pl-0 w-screen sm:w-full scrollbar-none">
            <ProgressTracker currentStep={5} />
          </div>
          <div className="flex flex-col gap-4 sm:gap-0 px-8 sm:px-0 w-screen sm:w-auto">
            <FormTitleH1 text1={"Seu plano"} />
            <SelectedPlan />
            <SelectedPlanDetails />
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
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
              <div className="flex flex-col sm:flex-row justify-end gap-8 my-8">
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
    </>
  );
}
