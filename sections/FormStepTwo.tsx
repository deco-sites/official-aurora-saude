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
      <div className="flex justify-center sm:width-calc">
        <div className="flex gap-6 sm:w-[1400px]">
          <div className="bg-white sm:bg-gray1 rounded-2xl sm:p-8 w-full">
            <div className="overflow-x-auto sm:overflow-x-visible pl-8 sm:pl-0 w-screen sm:w-full scrollbar-none">
              <ProgressTracker currentStep={2} />
            </div>
            <div className="flex flex-col gap-4 px-8 sm:px-0">
              <FormTitleH1
                text1={"Faça a simulação para você"}
                text2={"ou para outra pessoa."}
              />

              {<Component />}
            </div>
            <div className="flex justify-center sm:justify-end py-8 px-8 sm:px-0">
              <NextStepBtn options={alreadyhaveplanoptions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
