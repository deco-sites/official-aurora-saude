import InputSelect from "site/components/input-select.tsx";
import ProgressTracker from "../components/progress-tracker.tsx";
import NextStepBtn from "site/islands/next-step-btn.tsx";
import FormTitleH1 from "site/components/form-title-h1.tsx";
import PlanCard from "site/components/plan-card.tsx";
import { plansInfos } from "site/helpers/plansInfos.ts";

interface FormStepFourProps {
  Component: React.ComponentType;
}

export default function FormStepFour({ Component }: FormStepFourProps) {
  const whoWillUseThePlan = [
    { value: "option1", text: "Somente eu" },
    { value: "option2", text: "Eu e meus dependentes" },
    { value: "option3", text: "Outra pessoa" },
  ];

  return (
    <>
      <div
        className="flex justify-center"
        style={{ width: "calc(100vw - 18px)" }}
      >
        <div className="flex gap-6 w-[1400px]">
          <div className="bg-bg-gray rounded-2xl p-8 w-full">
            <div>
              <div>
                <ProgressTracker currentStep={4} />
              </div>

              <FormTitleH1 text1={"Escolha seu plano"} />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {plansInfos.map((item) => (
                  <PlanCard
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
