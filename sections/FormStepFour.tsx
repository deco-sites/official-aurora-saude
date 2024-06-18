import ProgressTracker from "../components/progress-tracker.tsx";
import NextStepBtn from "site/islands/next-step-btn.tsx";
import FormTitleH1 from "site/components/form-title-h1.tsx";
import PlanCard from "../islands/plan-card.tsx";
import { plansInfos } from "site/helpers/plansInfos.ts";
import { whoWillUseThePlan } from "site/helpers/whoWillUseThePlan.ts";
import PlanMobileButton from "../islands/PlanMobileButton.tsx";
import { useEffect, useRef, useState } from "preact/hooks";
import { useSelectPlanButtons } from "site/sdk/useSelectPlanButtons.ts";

interface FormStepFourProps {
  Component: React.ComponentType;
}

const plans = [
  { id: 1, text1: "a100", text2: "", color: "orange" },
  { id: 2, text1: "a300", text2: "enfermaria", color: "green" },
  { id: 3, text1: "a500", text2: "enfermaria", color: "yellow" },
  { id: 4, text1: "a500", text2: "apartamento", color: "yellow" },
];

export default function FormStepFour({ Component }: FormStepFourProps) {
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
      <div className="flex justify-center sm:width-calc">
        <div className="flex gap-6 sm:w-[1400px]">
          <div className="bg-white sm:bg-gray1 rounded-2xl sm:p-8 w-full">
            <div className="overflow-x-auto sm:overflow-x-visible pl-8 sm:pl-0 w-screen sm:w-full scrollbar-none">
              <ProgressTracker currentStep={4} />
            </div>

            <div className="flex flex-col gap-4 sm:px-0 w-screen sm:w-auto">
              <div className="pl-8 sm:pl-0">
                <FormTitleH1 text1={"Escolha seu plano"} />
              </div>

              <div
                ref={plansDivRef}
                className="flex px-8 sm:pl-0 gap-4 overflow-x-scroll sm:grid sm:grid-cols-3 sm:gap-10 scrollbar-none snap-mandatory snap-x"
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
                  />
                ))}
              </div>

              <div className="flex flex-col p-8 sm:hidden">
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

              <div className="flex justify-center sm:justify-end px-8 py-8">
                <NextStepBtn options={whoWillUseThePlan} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
