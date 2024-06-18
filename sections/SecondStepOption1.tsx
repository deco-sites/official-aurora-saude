import FormTitleH2 from "../components/form-title-h2.tsx";
import InputText from "site/components/input-text.tsx";
import InputSelect from "site/components/input-select.tsx";
import { agerangeoptions } from "site/helpers/ageRangeOptions.ts";
import { alreadyhaveplanoptions } from "site/helpers/alreadyHavePlan.ts";
import { citiesOptions } from "site/helpers/cities.ts";
import { useEffect, useState } from "preact/hooks";

export default function SecondStepOption1() {
  const [namePlaceholder, setNamePlaceholder] = useState("Nome e sobrenome");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Escreva aqui");
  const [telPlaceholder, setTelPlaceholder] = useState("Escreva aqui");
  const [cityPlaceholder, setCityPlaceholder] = useState("Escreva aqui");
  const [ageRangePlaceholder, setAgeRangePlaceholder] = useState("Selecione");
  const [havePlanPlaceholder, setHavePlanPlaceholder] = useState("Selecione");

  useEffect(() => {
    const updateNamePlaceholder = () => {
      if (window.innerWidth < 640) {
        setNamePlaceholder("Nome completo");
        setEmailPlaceholder("E-mail");
        setTelPlaceholder("Telefone/Whatsapp");
        setCityPlaceholder("Cidade");
        setAgeRangePlaceholder("Faixa etária");
        setHavePlanPlaceholder("Já possui plano de saúde?");
      } else {
        setNamePlaceholder("Nome completo");
        setEmailPlaceholder("Escreva aqui");
        setTelPlaceholder("Escreva aqui");
        setCityPlaceholder("Selecione");
        setAgeRangePlaceholder("Selecione");
        setHavePlanPlaceholder("Selecione");
      }
    };

    updateNamePlaceholder(); // Set initial placeholder based on screen size
    window.addEventListener("resize", updateNamePlaceholder);

    return () => window.removeEventListener("resize", updateNamePlaceholder);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-8">
        <FormTitleH2 text={"Informações de contato:"} />

        <InputText
          id={"name"}
          name={"name"}
          label={"Nome e Sobrenome"}
          placeholder={namePlaceholder}
        />
        <InputText
          id={"email"}
          name={"email"}
          label={"E-mail"}
          placeholder={emailPlaceholder}
        />
        <InputText
          id={"tel"}
          name={"tel"}
          label={"Telefone/WhatsApp"}
          placeholder={telPlaceholder}
        />
        <InputSelect
          id={"city"}
          name={"city"}
          label={"Cidade"}
          options={citiesOptions}
          placeholder={cityPlaceholder}
        />

        <FormTitleH2 text={"Informações de quem utilizará o plano:"} />
        <InputSelect
          id={"agerange"}
          name={"agerange"}
          label={"Faixa Etária:"}
          options={agerangeoptions}
          placeholder={ageRangePlaceholder}
        />
        <InputSelect
          id={"alreadyhaveplan"}
          name={"alreadyhaveplan"}
          label={"Já possui plano de saúde?"}
          options={alreadyhaveplanoptions}
          placeholder={havePlanPlaceholder}
        />
      </div>
    </>
  );
}
