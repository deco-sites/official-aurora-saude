import FormTitle from "site/components/form-title.tsx";
import InputText from "site/components/input-text.tsx";
import InputSelect from "site/components/input-select.tsx";

export default function SecondStepOption2() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <FormTitle text={"Informações de contato:"} />

        <InputText
          id={"corporatereason"}
          name={"corporatereason"}
          label={"Razão social"}
          placeholder={"Escreva aqui"}
        />
        <FormTitle text={"Informações de contato:"} />

        <InputText
          id={"name"}
          name={"name"}
          label={"Nome e Sobrenome"}
          placeholder={"Marcela Matos"}
        />
        <InputText
          id={"tel"}
          name={"tel"}
          label={"Telefone/WhatsApp"}
          placeholder={"Escreva aqui"}
        />
        <InputText
          id={"email"}
          name={"email"}
          label={"E-mail"}
          placeholder={"Escreva aqui"}
        />
      </div>
    </>
  );
}
