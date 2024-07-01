import FormTitleH1 from "site/components/form-title-h1.tsx";
import FormTitleH2 from "site/components/form-title-h2.tsx";

export default function SelectedPlanDetails() {
  return (
    <>
      <div className="flex flex-col">
        <div className="my-20">
          <FormTitleH1 text1={"Detalhamento do"} text2={"seu plano"} />
        </div>
        <div className="flex flex-col lg:flex-row justify-between border-b pb-16">
          <div className="flex flex-col gap-8 mb-8 lg:mb-0 pb-8 lg:pb-0 border-b-gray1 border-b-2 lg:border-none">
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <FormTitleH2 text={"Tipo de Simulação"} />
                <a href="#" className="cursor-pointer">
                  <img
                    src={"/pen-icon.png"}
                    alt="Edit Icon"
                    className="w-4 h-4"
                  />
                </a>
              </div>
              <div className="flex flex-col text-sm text-[#a9a9a9]">
                <span>Para mim e minha família</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <FormTitleH2 text={"Contato"} />
                <a href="#" className="cursor-pointer">
                  <img
                    src={"/pen-icon.png"}
                    alt="Edit Icon"
                    className="w-4 h-4"
                  />
                </a>
              </div>
              <div className="flex flex-col text-sm text-[#a9a9a9]">
                <span>Marcela Matos</span>
                <span>marcela@matos.com</span>
                <span>Possuo plano de saúde</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 mb-8 lg:mb-0 pb-8 lg:pb-0 border-b-gray1 border-b-2 lg:border-none">
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <FormTitleH2 text={"Titular"} />
                <a href="#" className="cursor-pointer">
                  <img
                    src={"/pen-icon.png"}
                    alt="Edit Icon"
                    className="w-4 h-4"
                  />
                </a>
              </div>
              <div className="flex flex-col text-sm text-[#a9a9a9]">
                <span>a100 rmbh</span>
                <span>R$ XXX,XX/mês por pessoa</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <FormTitleH2 text={"Dependentes 19-23 anos"} />
                <a href="#" className="cursor-pointer">
                  <img
                    src={"/pen-icon.png"}
                    alt="Edit Icon"
                    className="w-4 h-4"
                  />
                </a>
              </div>
              <div className="flex flex-col text-sm text-[#a9a9a9]">
                <span>a100 rmbh</span>
                <span>02 dependentes</span>
                <span>R$ XXX,XX/mês por pessoa</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <FormTitleH2 text={"Dependentes 24-28 anos"} />
                <a href="#" className="cursor-pointer">
                  <img
                    src={"/pen-icon.png"}
                    alt="Edit Icon"
                    className="w-4 h-4"
                  />
                </a>
              </div>
              <div className="flex flex-col text-sm text-[#a9a9a9]">
                <span>a100 rmbh</span>
                <span>01 dependente</span>
                <span>R$ XXX,XX/mês por pessoa</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <FormTitleH2 text={"Dependentes 29-33 anos"} />
                <a href="#" className="cursor-pointer">
                  <img
                    src={"/pen-icon.png"}
                    alt="Edit Icon"
                    className="w-4 h-4"
                  />
                </a>
              </div>
              <div className="flex flex-col text-sm text-[#a9a9a9]">
                <span>a100 rmbh</span>
                <span>02 dependentes</span>
                <span>R$ XXX,XX/mês por pessoa</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <FormTitleH2 text={"Dependentes 34-38 anos"} />
                <a href="#" className="cursor-pointer">
                  <img
                    src={"/pen-icon.png"}
                    alt="Edit Icon"
                    className="w-4 h-4"
                  />
                </a>
              </div>
              <div className="flex flex-col text-sm text-[#a9a9a9]">
                <span>a100 rmbh</span>
                <span>01 dependente</span>
                <span>R$ XXX,XX/mês por pessoa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
