import InputText from "site/components/input-text.tsx";
import ProgressTracker from "../components/progress-tracker.tsx";
import InputSelect from "site/components/input-select.tsx";
import FormTitle from "site/components/form-title.tsx";
import NextStepBtn from "site/islands/next-step-btn.tsx";

export default function FormStepTwo() {
  const steps = [
    "Tipo de Simulação",
    "Sobre você",
    "Beneficiários",
    "Escolha seu plano",
    "Envio",
  ];

  const alreadyhaveplanoptions = [
    { value: "option1", text: "Opção 1" },
    { value: "option2", text: "Opção 2" },
    { value: "option3", text: "Opção 3" },
  ];
  return (
    <>
      <div
        className="flex justify-center"
        style={{ width: "calc(100vw - 18px)" }}
      >
        <div className="flex gap-6 w-[1400px]">
          <div className="bg-bg-gray rounded-2xl p-8 w-full">
            <div className="flex flex-col gap-8">
              <div>
                <ProgressTracker steps={steps} currentStep={2} />
              </div>
              <span className="text-[#767676] font-semibold text-lg my-8">
                Faça a simulação para você <br /> ou para outra pessoa.
              </span>
              <FormTitle text={"Informações de contato:"} />

              <InputText
                id={"name"}
                name={"name"}
                label={"Nome e Sobrenome"}
                placeholder={"Marcela Matos"}
              />
              <InputText
                id={"email"}
                name={"email"}
                label={"E-mail"}
                placeholder={"Escreva aqui"}
              />
              <InputText
                id={"tel"}
                name={"tel"}
                label={"Telefone/WhatsApp"}
                placeholder={"Escreva aqui"}
              />
              <InputSelect
                id={"city"}
                name={"city"}
                label={"Cidade"}
                options={alreadyhaveplanoptions}
                placeholder={"Selecione"}
              />

              <FormTitle text={"Informações de quem utilizará o plano:"} />
              <InputSelect
                id={"agerange"}
                name={"agerange"}
                label={"Faixa Etária:"}
                options={alreadyhaveplanoptions}
                placeholder={"Selecione"}
              />
              <InputSelect
                id={"alreadyhaveplan"}
                name={"alreadyhaveplan"}
                label={"Já possui plano de saúde?"}
                options={alreadyhaveplanoptions}
                placeholder={"Selecione"}
              />
              <div className="flex justify-end py-8">
                <NextStepBtn options={alreadyhaveplanoptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
