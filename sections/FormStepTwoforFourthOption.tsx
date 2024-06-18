import PlanCard from "../islands/plan-card.tsx";
import FormTitleH1 from "site/components/form-title-h1.tsx";
import InputText from "site/components/input-text.tsx";
import InputSelect from "site/components/input-select.tsx";
import { useFormSteps } from "site/sdk/useFormSteps.ts";
import NewSimulationButton from "site/islands/new-simulation-btn.tsx";
import { plansInfos } from "site/helpers/plansInfos.ts";
import ReceiveContactButton from "site/islands/receive-contact-btn.tsx";
import { citiesOptions } from "site/helpers/cities.ts";
import { lifesqty } from "site/helpers/lifesQty.ts";
import { useEffect, useRef, useState } from "preact/hooks";
import { useSelectPlanButtons } from "site/sdk/useSelectPlanButtons.ts";
import PlanMobileButton from "site/islands/PlanMobileButton.tsx";
import FormTitleH2 from "site/components/form-title-h2.tsx";

const plans = [
  { id: 1, text1: "a100", text2: "", color: "orange" },
  { id: 2, text1: "a300", text2: "enfermaria", color: "green" },
  { id: 3, text1: "a500", text2: "enfermaria", color: "yellow" },
  { id: 4, text1: "a500", text2: "apartamento", color: "yellow" },
];

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
      <div className="flex justify-center sm:width-calc">
        <div className="flex flex-col gap-6 w-screen sm:w-[1400px]">
          <div className="flex flex-col-reverse sm:flex-row gap-6 w-full sm:max-h-96 p-8 sm:p-0">
            <div className="flex items-center justify-center bg-pink1 rounded-2xl px-11 py-16 sm:p-24 w-full sm:w-[40%] h-full">
              <span className="flex flex-col text-white text-2xl sm:text-xl font-semibold font-sora">
                <span className="text-yellow">
                  Plano de saúde<br /> precisa estar junto.<br />
                </span>
                Mais segurança para<br /> sua empresa e<br />{" "}
                tranquilidade para seus<br />
                colaboradores.
              </span>
            </div>
            <div className="w-full sm:w-[60%] h-full flex items-center justify-center">
              <img
                src={"/banner5.png"}
                alt="Banner"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-gray1 rounded-2xl sm:p-8 w-full">
            <div
              ref={plansDivTwoRef}
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
                  onlybutton
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col p-8 sm:hidden">
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
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="sm:w-[60%]">
                  <InputText
                    id={"socialreason"}
                    name={"socialreason"}
                    label={"Razão Social"}
                    placeholder={socialReasonPlaceholder}
                    wfull
                  />
                </div>
                <div className="sm:w-[40%]">
                  <InputText
                    id={"cnpj"}
                    name={"cnpj"}
                    label={"CNPJ"}
                    placeholder={cnpjPlaceholder}
                    wfull
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="sm:w-1/2">
                  <InputText
                    id={"name"}
                    name={"name"}
                    label={"Nome Completo"}
                    placeholder={namePlaceholder}
                    wfull
                  />
                </div>
                <div className="sm:w-1/2">
                  <InputText
                    id={"email"}
                    name={"email"}
                    label={"E-mail"}
                    placeholder={emailPlaceholder}
                    wfull
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="sm:w-[55%]">
                  <InputText
                    id={"tel"}
                    name={"tel"}
                    label={"Telefone/WhatsApp"}
                    placeholder={telPlaceholder}
                    wfull
                  />
                </div>
                <div className="sm:w-[45%]">
                  <InputText
                    id={"lifesqty"}
                    name={"lifesqty"}
                    label={"Quantidade de Vidas"}
                    placeholder={lifesQtyPlaceholder}
                    wfull
                  />
                </div>
              </div>
              <div className="sm:w-[40%]">
                <InputSelect
                  id={"city"}
                  name={"city"}
                  label={"Cidade"}
                  placeholder={cityPlaceholder}
                  options={citiesOptions}
                  wfull
                />
              </div>

              <div className="flex gap-6 my-8">
                <input type="checkbox" />
                <span className="text-xs text-black text-opacity-25">
                  Concordo em receber o contato e as informações comerciais da
                  Aurora Saúde por meio dos dados fornecidos acima, que serão
                  armazenados apenas para esta finalidade.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-8 my-8">
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
                <ReceiveContactButton number={5} mission={"increase"} />
                <NewSimulationButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
