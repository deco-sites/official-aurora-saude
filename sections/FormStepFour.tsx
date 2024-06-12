import InputSelect from "site/components/input-select.tsx";
import ProgressTracker from "../components/progress-tracker.tsx";
import NextStepBtn from "site/islands/next-step-btn.tsx";
import FormTitleH1 from "site/components/form-title-h1.tsx";
import PlanCard from "site/components/plan-card.tsx";

interface FormStepFourProps {
  Component: React.ComponentType;
}

export default function FormStepFour({ Component }: FormStepFourProps) {
  const whoWillUseThePlan = [
    { value: "option1", text: "Somente eu" },
    { value: "option2", text: "Eu e meus dependentes" },
    { value: "option3", text: "Outra pessoa" },
  ];

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
