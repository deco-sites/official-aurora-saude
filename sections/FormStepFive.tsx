import ProgressTracker from "site/components/progress-tracker.tsx";
import FormTitleH1 from "site/components/form-title-h1.tsx";
import SelectedPlan from "site/components/selected-plan.tsx";
import SelectedPlanDetails from "site/components/selected-plan-details.tsx";
import { useFormSteps } from "site/sdk/useFormSteps.ts";
import NewSimulationButton from "../islands/new-simulation-btn.tsx";

interface FormStepFourProps {
  Component: React.ComponentType;
}

export default function FormStepFive({ Component }: FormStepFourProps) {
  const { activeStep, changeStep } = useFormSteps();

  return (
    <>
      {/*<Component />*/}
      <div className="flex gap-6 w-[1400px]">
        <div className="bg-bg-gray rounded-2xl p-12 w-full">
          <ProgressTracker currentStep={5} />
          <div className="flex flex-col">
            <FormTitleH1 text1={"Seu plano"} />
            <SelectedPlan />
            <SelectedPlanDetails />
            <div className="flex justify-end gap-8 my-8">
              <button
                onClick={(e) => {
                  changeStep(activeStep.value, "increase");
                  //changeStep(currentStep + 1, e);
                  //console.log(activeOption); //Dou um console.log na opção escolhida inicialmente
                }}
                className="flex items-center gap-8 bg-[#FF8461] rounded-full text-white text-left px-12 py-4 text-sm"
              >
                <img src={"/phone-icon2.png"} alt="Icon" className="w-8" />
                Receber contato de <br /> um especialista
              </button>
              <NewSimulationButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
