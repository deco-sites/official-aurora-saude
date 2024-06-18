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

export default function FormStepTwoforFourthOption() {
  const { activeStep, changeStep } = useFormSteps();

  return (
    <>
      <div className="flex justify-center sm:width-calc">
        <div className="flex flex-col gap-6 sm:w-[1400px]">
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

          <div className="bg-gray1 rounded-2xl p-8 w-full">
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
                  onlybutton
                />
              ))}
            </div>
          </div>
          <div className="bg-gray1 rounded-2xl p-8 w-full">
            <div className="flex flex-col gap-6">
              <FormTitleH1 text1="Solicite o contato dos nossos especialistas:" />
              <div className="flex gap-8">
                <div className="w-[60%]">
                  <InputText
                    id={"socialreason"}
                    name={"socialreason"}
                    label={"Razão Social"}
                    placeholder={"Marcela Matos"}
                    wfull
                  />
                </div>
                <div className="w-[40%]">
                  <InputText
                    id={"cnpj"}
                    name={"cnpj"}
                    label={"CNPJ"}
                    placeholder={"Marcela Matos"}
                    wfull
                  />
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-1/2">
                  <InputText
                    id={"name"}
                    name={"name"}
                    label={"Nome Completo"}
                    placeholder={"Escreva aqui"}
                    wfull
                  />
                </div>
                <div className="w-1/2">
                  <InputText
                    id={"email"}
                    name={"email"}
                    label={"E-mail"}
                    placeholder={"Escreva aqui"}
                    wfull
                  />
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-[55%]">
                  <InputText
                    id={"tel"}
                    name={"tel"}
                    label={"Telefone/WhatsApp"}
                    placeholder={"Escreva aqui"}
                    wfull
                  />
                </div>
                <div className="w-[45%]">
                  <InputText
                    id={"lifesqty"}
                    name={"lifesqty"}
                    label={"Quantidade de Vidas"}
                    placeholder={"Escreva aqui"}
                    wfull
                  />
                </div>
              </div>
              <div className="w-[40%]">
                <InputSelect
                  id={"city"}
                  name={"city"}
                  label={"Cidade"}
                  placeholder={"Selecione"}
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
