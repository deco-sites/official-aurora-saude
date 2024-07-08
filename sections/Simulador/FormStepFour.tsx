import ProgressTracker from "../../components/Simulador/progress-tracker.tsx";
import NextStepBtn from "../../islands/Simulador/next-step-btn.tsx";
import FormTitleH1 from "../../components/Simulador/form-title-h1.tsx";
import PlanCard from "../../islands/Simulador/plan-card.tsx";
import { plansInfos } from "../../helpers/Simulador/plansInfos.ts";
import { whoWillUseThePlan } from "../../helpers/Simulador/whoWillUseThePlan.ts";
import PlanMobileButton from "../../islands/Simulador/PlanMobileButton.tsx";
import { useEffect, useRef, useState } from "preact/hooks";
import { useSelectPlanButtons } from "../../sdk/Simulador/useSelectPlanButtons.ts";
import { handleNextStepFourthStep } from "../../sdk/Simulador/FourthStep/checkStepFourFields.ts";
import { plans } from "../../helpers/Simulador/plansCards.ts";
import PreviousStepBtn from "../../islands/Simulador/previous-step-btn.tsx";
import { useFormSteps } from "../../sdk/Simulador/useFormSteps.ts";
import changeStep from "../../islands/Simulador/change-step-function.tsx";

/*interface FormStepFourProps {
  Component: React.ComponentType;
}*/

export default function FormStepFour() {
  const { activeStep } = useFormSteps();
  //const $PlansDiv = useRef<HTMLDivElement | null>(null);
  const plansDivRef = useRef<HTMLDivElement | null>(null);
  const { activePlanBtn } = useSelectPlanButtons();
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (isScrolling || !plansDivRef.current) return;

    const cards = plansDivRef.current.children;
    const center = plansDivRef.current.scrollLeft +
      plansDivRef.current.clientWidth / 2;

    Array.from(cards).forEach((card, index) => {
      const cardElement = card as HTMLElement; // Asserção de tipo para HTMLElement
      const cardStart = cardElement.offsetLeft;
      const cardEnd = cardStart + cardElement.clientWidth;
      if (center >= cardStart && center <= cardEnd) {
        if (activePlanBtn.value !== plansInfos[index].id) {
          activePlanBtn.value = plansInfos[index].id;
        }
      }
    });
  };

  useEffect(() => {
    const div = plansDivRef.current;
    if (div) {
      div.addEventListener("scroll", handleScroll);
      return () => div.removeEventListener("scroll", handleScroll);
    }
  }, [isScrolling]);

  const scrollToCard = (id: number) => {
    const index = plansInfos.findIndex((plan) => plan.id === id);
    if (index !== -1 && plansDivRef.current) {
      const card = plansDivRef.current.children[index] as HTMLElement; // Asserção de tipo para HTMLElement
      setIsScrolling(true);
      plansDivRef.current.scrollTo({
        left: card.offsetLeft,
        behavior: "smooth",
      });
      setTimeout(() => setIsScrolling(false), 500); // Ajuste o tempo conforme necessário
    }
  };

  useEffect(() => {
    const index = plansInfos.findIndex((plan) =>
      plan.id === activePlanBtn.value
    );
    if (index !== -1 && plansDivRef.current) {
      const card = plansDivRef.current.children[index] as HTMLElement; // Asserção de tipo para HTMLElement
      const cardStart = card.offsetLeft;
      const cardEnd = cardStart + card.clientWidth;
      const center = plansDivRef.current.scrollLeft +
        plansDivRef.current.clientWidth / 2;
      if (!(center >= cardStart && center <= cardEnd)) {
        scrollToCard(activePlanBtn.value);
      }
    }
  }, [activePlanBtn.value]);

  return (
    <>
      <div className="flex justify-center lg:width-calc mt-32">
        <div className="flex gap-6 lg:w-[1400px]">
          <div className="bg-white lg:bg-gray1 rounded-2xl lg:p-8 w-full">
            <div className="overflow-x-auto lg:overflow-x-visible pl-8 lg:pl-0 w-screen lg:w-full scrollbar-none">
              <ProgressTracker currentStep={4} />
            </div>

            <div className="flex flex-col gap-4 lg:px-0 w-screen lg:w-auto">
              <div className="pl-8 lg:pl-0">
                <FormTitleH1 text1={"Escolha seu plano"} />
              </div>

              <div
                ref={plansDivRef}
                className="flex px-8 lg:pl-0 gap-4 overflow-x-scroll lg:grid lg:grid-cols-2 lg:gap-10 scrollbar-none snap-mandatory snap-x"
              >
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
                    scrollToCard={scrollToCard}
                  />
                ))}
              </div>

              <div className="flex flex-col p-8 lg:hidden">
                <FormTitleH1 text1="Selecione o seu plano" />
                {/*ref={$PlansDiv}    scrolledDiv={$PlansDiv}*/}
                <div className="grid grid-cols-2 gap-2">
                  {plans.map((plan) => (
                    <PlanMobileButton
                      key={plan.id}
                      text1={plan.text1}
                      text2={plan.text2}
                      id={plan.id}
                      color={plan.color}
                      scrollToCard={scrollToCard}
                    />
                  ))}
                </div>
              </div>

              {/*<Component />*/}

              <div className="flex gap-4 justify-center py-14 px-8 lg:justify-between lg:px-0">
                <PreviousStepBtn
                  options={whoWillUseThePlan}
                  executionFunc={() => changeStep(activeStep.value, "decrease")}
                />

                <NextStepBtn
                  options={whoWillUseThePlan}
                  executionFunc={handleNextStepFourthStep}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
