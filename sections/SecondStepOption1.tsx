import FormTitleH2 from "../components/form-title-h2.tsx";
import InputText from "site/components/input-text.tsx";
import InputSelect from "site/components/input-select.tsx";
import { agerangeoptions } from "site/helpers/ageRangeOptions.ts";
import { alreadyhaveplanoptions } from "site/helpers/alreadyHavePlan.ts";
import { citiesOptions } from "site/helpers/cities.ts";

export default function SecondStepOption1() {
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
          options={citiesOptions}
          placeholder={"Selecione"}
        />

        <FormTitleH2 text={"Informações de quem utilizará o plano:"} />
        <InputSelect
          id={"agerange"}
          name={"agerange"}
          label={"Faixa Etária:"}
          options={agerangeoptions}
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
