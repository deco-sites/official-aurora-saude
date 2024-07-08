import PlanCard from "../../islands/Simulador/plan-card.tsx";
import FormTitleH1 from "../../components/Simulador/form-title-h1.tsx";
import InputText from "../../components/Simulador/input-text.tsx";
import InputSelect from "../../components/Simulador/input-select.tsx";
import { useFormSteps } from "../../sdk/Simulador/useFormSteps.ts";
import NewSimulationButton from "../../islands/Simulador/new-simulation-btn.tsx";
import { plansInfos } from "../../helpers/Simulador/plansInfos.ts";
import ReceiveContactButton from "../../islands/Simulador/receive-contact-btn.tsx";
import { citiesOptions } from "../../helpers/Simulador/cities.ts";
//import { lifesqty } from "../../helpers/Simulador/lifesQty.ts";
import { useEffect, useRef, useState } from "preact/hooks";
import { useSelectPlanButtons } from "../../sdk/Simulador/useSelectPlanButtons.ts";
import PlanMobileButton from "../../islands/Simulador/PlanMobileButton.tsx";
import FormTitleH2 from "../../components/Simulador/form-title-h2.tsx";
//import { CnpjMask } from "../../helpers/Simulador/cnpjMask.ts";
import { plans } from "../../helpers/Simulador/plansCards.ts";
import PreviousStepBtn from "../../islands/Simulador/previous-step-btn.tsx";
import { whoWillUseThePlan } from "../../helpers/Simulador/whoWillUseThePlan.ts";
import Image from "apps/website/components/Image.tsx";

export default function FormStepTwoforFourthOption() {
  const [socialReasonPlaceholder, setSocialReasonPlaceholder] = useState(
    "Nome e sobrenome",
  );
  const [cnpjPlaceholder, setCNPJPlaceholder] = useState("Escreva aqui");
  const [namePlaceholder, setNamePlaceholder] = useState("Escreva aqui");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Escreva aqui");
  const [telPlaceholder, setTelPlaceholder] = useState("Selecione");
  const [lifesQtyPlaceholder, setLifesQtyPlaceholder] = useState("Selecione");
  const [cityPlaceholder, setCityPlaceholder] = useState("Selecione");

  useEffect(() => {
    const updateNamePlaceholder = () => {
      if (window.innerWidth < 640) {
        setSocialReasonPlaceholder("Razão Social");
        setCNPJPlaceholder("CNPJ");
        setNamePlaceholder("Nome Completo");
        setEmailPlaceholder("E-mail");
        setTelPlaceholder("Telefone/Whatsapp");
        setLifesQtyPlaceholder("Quantidade de Vidas");
        setCityPlaceholder("Cidade");
      } else {
        setSocialReasonPlaceholder("Escreva aqui ");
        setCNPJPlaceholder("Escreva aqui");
        setNamePlaceholder("Escreva aqui");
        setEmailPlaceholder("Escreva aqui");
        setTelPlaceholder("Escreva aqui");
        setLifesQtyPlaceholder("Escreva aqui");
        setCityPlaceholder("Selecione");
      }
    };

    updateNamePlaceholder(); // Set initial placeholder based on screen size
    window.addEventListener("resize", updateNamePlaceholder);

    return () => window.removeEventListener("resize", updateNamePlaceholder);
  }, []);

  const { activeStep, changeStep } = useFormSteps();
  const plansDivTwoRef = useRef<HTMLDivElement | null>(null);
  const { activePlanBtn } = useSelectPlanButtons();
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (isScrolling || !plansDivTwoRef.current) return;

    const cards = plansDivTwoRef.current.children;
    const center = plansDivTwoRef.current.scrollLeft +
      plansDivTwoRef.current.clientWidth / 2;

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
    const div = plansDivTwoRef.current;
    if (div) {
      div.addEventListener("scroll", handleScroll);
      return () => div.removeEventListener("scroll", handleScroll);
    }
  }, [isScrolling]);

  const scrollToCard = (id: number) => {
    const index = plansInfos.findIndex((plan) => plan.id === id);
    if (index !== -1 && plansDivTwoRef.current) {
      const card = plansDivTwoRef.current.children[index] as HTMLElement; // Asserção de tipo para HTMLElement
      setIsScrolling(true);
      plansDivTwoRef.current.scrollTo({
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
    if (index !== -1 && plansDivTwoRef.current) {
      const card = plansDivTwoRef.current.children[index] as HTMLElement; // Asserção de tipo para HTMLElement
      const cardStart = card.offsetLeft;
      const cardEnd = cardStart + card.clientWidth;
      const center = plansDivTwoRef.current.scrollLeft +
        plansDivTwoRef.current.clientWidth / 2;
      if (!(center >= cardStart && center <= cardEnd)) {
        scrollToCard(activePlanBtn.value);
      }
    }
  }, [activePlanBtn.value]);

  return (
    <>
      <div className="flex justify-center lg:width-calc mt-32">
        <div className="flex flex-col lg:gap-4 w-screen lg:w-[1400px]">
          <div className="bg-gray1 lg:bg-transparent flex flex-col-reverse lg:flex-row gap-4 w-full lg:max-h-[600px] p-8 lg:p-0">
            <div className="flex items-center justify-center bg-pink1 rounded-2xl px-11 py-16 lg:p-24 w-full lg:w-1/2 h-full">
              <span className="flex flex-col text-white text-2xl lg:text-xl font-semibold font-sora">
                <span className="text-yellow">
                  Plano de saúde<br /> precisa estar junto.<br />
                </span>
                Mais segurança para<br /> sua empresa e<br />{" "}
                tranquilidade para seus<br />
                colaboradores.
              </span>
            </div>
            <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
              <Image
                src={"/Simulador/banner5.png"}
                alt="Banner"
                width=""
                height=""
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-gray1 pb-12 pt-16 rounded-2xl lg:p-8 w-full">
            <div
              ref={plansDivTwoRef}
              className="flex px-8 gap-4 overflow-x-scroll lg:grid lg:grid-cols-2 lg:gap-10 scrollbar-none snap-mandatory snap-x"
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
                  onlybutton
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col p-8 lg:hidden">
            <FormTitleH1 text1="Selecione o seu plano" />
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

          <div className="bg-gray1 rounded-2xl p-8 w-full">
            <div className="flex flex-col gap-6">
              <FormTitleH2 text="Solicite o contato dos nossos especialistas:" />
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-[60%]">
                  <InputText
                    id={"socialreason"}
                    name={"socialreason"}
                    label={"Razão Social"}
                    placeholder={socialReasonPlaceholder}
                    wfull
                  />
                </div>
                <div className="lg:w-[40%]">
                  <InputText
                    id={"cnpj"}
                    name={"cnpj"}
                    label={"CNPJ"}
                    placeholder={cnpjPlaceholder}
                    wfull
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <InputText
                    id={"name"}
                    name={"name"}
                    label={"Nome Completo"}
                    placeholder={namePlaceholder}
                    wfull
                  />
                </div>
                <div className="lg:w-1/2">
                  <InputText
                    id={"email"}
                    name={"email"}
                    label={"E-mail"}
                    placeholder={emailPlaceholder}
                    wfull
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-[55%]">
                  <InputText
                    id={"tel"}
                    name={"tel"}
                    label={"Telefone/WhatsApp"}
                    placeholder={telPlaceholder}
                    wfull
                  />
                </div>
                <div className="lg:w-[45%]">
                  <InputText
                    id={"lifesqty"}
                    name={"lifesqty"}
                    label={"Quantidade de Vidas"}
                    placeholder={lifesQtyPlaceholder}
                    wfull
                  />
                </div>
              </div>
              <div className="lg:w-[30%]">
                <InputSelect
                  id={"city"}
                  name={"city"}
                  label={"Cidade"}
                  placeholder={cityPlaceholder}
                  options={citiesOptions}
                  wfull
                />
              </div>

              <div className="flex gap-4 items-center my-8">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center p-3 rounded-full cursor-pointer"
                    htmlFor="agreeCheckbox"
                  >
                    <input
                      type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-orange2 checked:bg-orange1 checked:before:bg-orange1 hover:scale-105 hover:before:opacity-0"
                      id="agreeCheckbox"
                      required
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-2.5 w-2.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        >
                        </path>
                      </svg>
                    </span>
                  </label>
                </div>

                <span className="text-xs text-black text-opacity-25">
                  Concordo em receber o contato e as informações comerciais da
                  Aurora Saúde por meio dos dados fornecidos acima, que serão
                  armazenados apenas para esta finalidade.
                </span>
              </div>

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                {
                  /*<button
                  onClick={(e) => {
                    changeStep(5, "increase");
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
                  Receber contato de <br /> especialistas
                </button>*/
                }
                <PreviousStepBtn
                  options={whoWillUseThePlan}
                  executionFunc={() => changeStep(activeStep.value, "decrease")}
                />
                <div className="flex flex-col lg:flex-row justify-end gap-8 my-8">
                  <ReceiveContactButton number={5} mission={"increase"} />
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
