import InputSelect from "site/components/input-select.tsx";
import ProgressTracker from "../components/progress-tracker.tsx";
import NextStepBtn from "site/islands/next-step-btn.tsx";

interface FormStepTwoProps {
  Component: React.ComponentType;
}

export default function FormStepThree({ Component }: FormStepTwoProps) {
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
                <ProgressTracker currentStep={3} />
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[#767676] font-semibold text-lg my-8">
                  Informe os dados das pessoas <br /> que utilizarão o plano.
                </span>
                <InputSelect
                  id={"whowilluse"}
                  name={"whowilluse"}
                  label={"Quem utilizará o plano?"}
                  options={whoWillUseThePlan}
                  placeholder={"Somente eu"}
                />
                {<Component />}
              </div>
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
