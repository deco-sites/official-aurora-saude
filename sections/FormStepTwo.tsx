import FormTitleH1 from "site/components/form-title-h1.tsx";
import ProgressTracker from "../components/progress-tracker.tsx";
import NextStepBtn from "site/islands/next-step-btn.tsx";

interface FormStepTwoProps {
  Component: React.ComponentType;
}

export default function FormStepTwo({ Component }: FormStepTwoProps) {
  const alreadyhaveplanoptions = [
    { value: "option1", text: "Opção 1" },
    { value: "option2", text: "Opção 2" },
    { value: "option3", text: "Opção 3" },
  ];
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
                <ProgressTracker currentStep={2} />
              </div>
              <div className="flex flex-col gap-4">
                <FormTitleH1
                  text1={"Faça a simulação para você"}
                  text2={"ou para outra pessoa."}
                />

                {<Component />}
              </div>
              <div className="flex justify-end py-8">
                <NextStepBtn options={alreadyhaveplanoptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
