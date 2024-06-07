import FormTitleH2 from "../components/form-title-h2.tsx";
import InputText from "site/components/input-text.tsx";
import InputSelect from "site/components/input-select.tsx";

export default function SecondStepOption1() {
  const alreadyhaveplanoptions = [
    { value: "option1", text: "Opção 1" },
    { value: "option2", text: "Opção 2" },
    { value: "option3", text: "Opção 3" },
  ];

  return (
    <>
      <div className="flex flex-col gap-8">
        <FormTitleH2 text={"Informações de contato:"} />

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

        <FormTitleH2 text={"Informações de quem utilizará o plano:"} />
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
      </div>
    </>
  );
}
