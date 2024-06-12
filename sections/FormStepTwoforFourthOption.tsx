import PlanCard from "site/components/plan-card.tsx";
import FormTitleH1 from "site/components/form-title-h1.tsx";
import InputText from "site/components/input-text.tsx";
import InputSelect from "site/components/input-select.tsx";
import { useFormSteps } from "site/sdk/useFormSteps.ts";
import NewSimulationButton from "site/islands/new-simulation-btn.tsx";

export default function FormStepTwoforFourthOption() {
  const { activeStep, changeStep } = useFormSteps();

  const plansInfos = [
    {
      title: "a100",
      description:
        "O a100 é um plano com cobertura ambulatorial que compreende consultas médicas em número ilimitado, exames de diagnóstico, fisioterapia e muitos outros procedimentos que podem ser realizados em consultórios, clínicas e laboratórios, além do atendimento de urgência e emergência 24 horas por dia, até as primeiras 12 horas. Com acesso a rede de prestadores de alta qualidade e telemedicina 24 horas por dia, trazendo tranquilidade e conforto.",
      segmentation: "Ambulatorial",
      coverage:
        "Belo Horizonte, Betim, Brumadinho, Caeté, Contagem, Esmeraldas, Ibirité, Igarapé, Juatuba, Lagoa Santa, Mateus Leme, Matozinhos, Nova Lima, Pedro Leopoldo, Ribeirão das Neves, Sabará, Santa Luzia, São Joaquim de Bicas, São José da Lapa, Sarzedo, Sete Lagoas, Vespasiano.",
      coparticipation: "com Copay",
      accommodation: "-",
      color: "orange",
    },
    {
      title: "a300 enfermaria",
      description:
        "O a300 é para quem busca segurança com investimento sob medida. O plano cobre todos os procedimentos ambulatoriais e hospitalares, como consultas médicas, exames diagnósticos, cirurgias e internações hospitalares na acomodação enfermaria. Com uma rede muito qualificada e telemedicina 24 horas por dia, trazendo tranquilidade e conforto.",
      segmentation: "Amb + Hosp + Obst",
      coverage:
        "Belo Horizonte, Betim, Brumadinho, Caeté, Contagem, Esmeraldas, Ibirité, Igarapé, Juatuba, Lagoa Santa, Mateus Leme, Matozinhos, Nova Lima, Pedro Leopoldo, Ribeirão das Neves, Sabará, Santa Luzia, São Joaquim de Bicas, São José da Lapa, Sarzedo, Sete Lagoas, Vespasiano.",
      coparticipation: "com Copay",
      accommodation: "Enfermaria",
      color: "green",
    },
    {
      title: "a500 enfermaria",
      description:
        "O a500 é para quem quer ter a maior rede de atendimento e flexibilidade na escolha dos hospitais na acomodação enfermaria. Nossa rede de médicos, hospitais e clínicas é extensa e de alta qualidade. Isso significa que você pode escolher os melhores profissionais e instalações para atender às suas necessidades. Com coparticipação, que garante seu planejamento de despesas. Telemedicina 24 horas por dia, trazendo tranquilidade e conforto.",
      segmentation: "Amb + Hosp + Obst",
      coverage:
        "Belo Horizonte, Betim, Brumadinho, Caeté, Contagem, Esmeraldas, Ibirité, Igarapé, Juatuba, Lagoa Santa, Mateus Leme, Matozinhos, Nova Lima, Pedro Leopoldo, Ribeirão das Neves, Sabará, Santa Luzia, São Joaquim de Bicas, São José da Lapa, Sarzedo, Sete Lagoas, Vespasiano.",
      coparticipation: "com Copay",
      accommodation: "Enfermaria",
      color: "yellow",
    },
    {
      title: "a500 apartamento",
      description:
        "O a500 é para quem quer ter a maior rede de atendimento e flexibilidade na escolha dos hospitais na acomodação apartamento. Nossa rede de médicos, hospitais e clínicas é extensa e de alta qualidade. Isso significa que você pode escolher os melhores profissionais e instalações para atender às suas necessidades. Com coparticipação, que garante seu planejamento de despesas. Telemedicina 24 horas por dia, trazendo tranquilidade e conforto.",
      segmentation: "Amb + Hosp + Obst",
      coverage:
        "Belo Horizonte, Betim, Brumadinho, Caeté, Contagem, Esmeraldas, Ibirité, Igarapé, Juatuba, Lagoa Santa, Mateus Leme, Matozinhos, Nova Lima, Pedro Leopoldo, Ribeirão das Neves, Sabará, Santa Luzia, São Joaquim de Bicas, São José da Lapa, Sarzedo, Sete Lagoas, Vespasiano.",
      coparticipation: "com Copay",
      accommodation: "Apartamento",
      color: "yellow",
    },
  ];

  const lifesqty = [
    { value: "option1", text: "Opção 1" },
    { value: "option2", text: "Opção 2" },
  ];

  const cities = [
    { value: "option1", text: "Opção 1" },
    { value: "option2", text: "Opção 2" },
  ];
  return (
    <>
      <div
        className="flex justify-center"
        style={{ width: "calc(100vw - 18px)" }}
      >
        <div className="flex flex-col gap-6 w-[1400px]">
          <div className="flex gap-6 w-full max-h-96">
            <div className="flex items-center justify-center bg-[#ff50a4] rounded-2xl p-24 w-[40%] h-full">
              <span className="flex flex-col text-white text-xl font-semibold">
                <span className="text-[#FCFF73]">
                  Plano de saúde<br /> precisa estar junto.<br />
                </span>
                Mais segurança para<br /> sua empresa e<br />{" "}
                tranquilidade para seus<br />
                colaboradores.
              </span>
            </div>
            <div className="w-[60%] h-full flex items-center justify-center">
              <img
                src={"/banner5.png"}
                alt="Banner"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-bg-gray rounded-2xl p-8 w-full">
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
                  onlybutton
                />
              ))}
            </div>
          </div>
          <div className="bg-bg-gray rounded-2xl p-8 w-full">
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
                  <InputSelect
                    id={"lifesqty"}
                    name={"lifesqty"}
                    label={"Quantidade de Vidas"}
                    placeholder={"Selecione"}
                    options={lifesqty}
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
                  options={cities}
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

              <div className="flex justify-end gap-8 my-8">
                <button
                  onClick={(e) => {
                    changeStep(5, "increase");
                    //changeStep(currentStep + 1, e);
                    //console.log(activeOption); //Dou um console.log na opção escolhida inicialmente
                  }}
                  className="flex items-center gap-8 bg-orange rounded-full text-white text-left px-12 py-4 text-sm"
                >
                  <img src={"/phone-icon2.png"} alt="Icon" className="w-8" />
                  Receber contato de <br /> especialistas
                </button>
                <NewSimulationButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
