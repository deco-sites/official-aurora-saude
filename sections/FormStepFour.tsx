import InputSelect from "site/components/input-select.tsx";
import ProgressTracker from "../components/progress-tracker.tsx";
import NextStepBtn from "site/islands/next-step-btn.tsx";
import FormTitleH1 from "site/components/form-title-h1.tsx";
import PlanCard from "../islands/plan-card.tsx";
import { plansInfos } from "site/helpers/plansInfos.ts";
import { whoWillUseThePlan } from "site/helpers/whoWillUseThePlan.ts";

interface FormStepFourProps {
  Component: React.ComponentType;
}

export default function FormStepFour({ Component }: FormStepFourProps) {
  return (
    <>
      <div
        className="flex justify-center"
        style={{ width: "calc(100vw - 18px)" }}
      >
        <div className="flex gap-6 w-[1400px]">
          <div className="bg-gray1 rounded-2xl p-8 w-full">
            <div>
              <div>
                <ProgressTracker currentStep={4} />
              </div>

              <FormTitleH1 text1={"Escolha seu plano"} />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {plansInfos.map((item) => (
                  <PlanCard
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    segmentation={item.segmentation}
                    coverage={item.coverage}
                    coparticipation={item.coparticipation}
                    accommodation={item.accommodation}
                    color={item.color}
                  />
                ))}
              </div>

              {/*<Component />*/}

              <div className="flex justify-end py-8">
                <NextStepBtn options={whoWillUseThePlan} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
