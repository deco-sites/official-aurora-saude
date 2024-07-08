import FormTitleH2 from "../../components/Simulador/form-title-h2.tsx";
import InputText from "../../components/Simulador/input-text.tsx";
import InputSelect from "../../components/Simulador/input-select.tsx";
import { agerangeoptions } from "../../helpers/Simulador/ageRangeOptions.ts";
import { alreadyhaveplanoptions } from "../../helpers/Simulador/alreadyHavePlan.ts";
import { citiesOptions } from "../../helpers/Simulador/cities.ts";
import { useEffect, useState } from "preact/hooks";
import { useStepTwoOption1InputValues } from "../../sdk/Simulador/SecondStepOption1/useStepTwoOption1InputValues.ts";
import { PhoneMask } from "../../helpers/Simulador/phoneMask.ts";
import Image from "apps/website/components/Image.tsx";

export default function SecondStepOption1() {
  const [namePlaceholder, setNamePlaceholder] = useState("Nome e sobrenome");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Escreva aqui");
  const [telPlaceholder, setTelPlaceholder] = useState("Escreva aqui");
  const [cityPlaceholder, setCityPlaceholder] = useState("Escreva aqui");
  const [ageRangePlaceholder, setAgeRangePlaceholder] = useState("Selecione");
  const [havePlanPlaceholder, setHavePlanPlaceholder] = useState("Selecione");

  const {
    nameValue,
    emailValue,
    telValue,
    cityValue,
    ageRangeValue,
    alreadyHavePlanValue,

    nameError,
    emailError,
    telError,
    cityError,
    ageRangeError,
    alreadyHavePlanError,
  } = useStepTwoOption1InputValues();

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

  useEffect(() => {
    nameError.value = false;
    emailError.value = false;
  }, []);

  return (
    <>
      <div className="flex flex-col gap-8">
        <FormTitleH2 text={"Informações de contato:"} />

        <div className="relative flex gap-2 items-center lg:w-[600px]">
          <InputText
            id={"name"}
            name={"name"}
            label={"Nome e Sobrenome"}
            placeholder={namePlaceholder}
            value={nameValue.value}
            inputValueSetter={(value) => nameValue.value = value}
            wfull
          />

          {nameError.value && (
            <Image
              src={"/Simulador/error-circle-icon.png"}
              alt="Error Icon"
              className="h-5 w-5 absolute top-50 right-7 lg:left-[615px]"
              width=""
              height=""
            />
          )}
        </div>

        <div className="relative flex gap-2 items-center lg:w-[500px]">
          <InputText
            id={"email"}
            name={"email"}
            label={"E-mail"}
            placeholder={emailPlaceholder}
            value={emailValue.value}
            inputValueSetter={(value) => emailValue.value = value}
            wfull
          />
          {emailError.value && (
            <Image
              src={"/Simulador/error-circle-icon.png"}
              alt="Error Icon"
              className="h-5 w-5 absolute top-50 right-7 lg:left-[615px]"
              width=""
              height=""
            />
          )}
        </div>

        <div className="relative flex gap-2 items-center">
          <InputText
            id={"tel"}
            name={"tel"}
            label={"Telefone/WhatsApp"}
            placeholder={telPlaceholder}
            inputValueSetter={(value) => telValue.value = value}
            value={telValue.value}
            mask={PhoneMask}
          />
          {
            /*<img
            src={"/check-circle-icon.png"}
            alt="Check Icon"
            className="h-5 w-5 absolute top-50 right-2 lg:left-[470px]"
          />*/
          }

          {telError.value && (
            <Image
              src={"/Simulador/error-circle-icon.png"}
              alt="Error Icon"
              className="h-5 w-5 absolute top-50 right-7 lg:left-[615px]"
              width=""
              height=""
            />
          )}
        </div>

        <div className="relative flex gap-2 items-center">
          <InputSelect
            id={"city"}
            name={"city"}
            label={"Cidade"}
            options={citiesOptions}
            placeholder={cityPlaceholder}
            value={cityValue.value}
            inputValueSetter={(value) => cityValue.value = value}
          />
          {cityError.value && (
            <Image
              src={"/Simulador/error-circle-icon.png"}
              alt="Error Icon"
              className="h-5 w-5 absolute top-50 right-7 lg:left-[615px]"
              width=""
              height=""
            />
          )}
        </div>

        <FormTitleH2 text={"Informações de quem utilizará o plano:"} />

        <div className="relative flex gap-2 items-center">
          <InputSelect
            id={"agerange"}
            name={"agerange"}
            label={"Faixa Etária:"}
            options={agerangeoptions}
            placeholder={ageRangePlaceholder}
            value={ageRangeValue.value}
            inputValueSetter={(value) => ageRangeValue.value = value}
          />
          {ageRangeError.value && (
            <Image
              src={"/Simulador/error-circle-icon.png"}
              alt="Error Icon"
              className="h-5 w-5 absolute top-50 right-7 lg:left-[615px]"
              width=""
              height=""
            />
          )}
        </div>

        <div className="relative flex gap-2 items-center">
          <InputSelect
            id={"alreadyhaveplan"}
            name={"alreadyhaveplan"}
            label={"Já possui plano de saúde?"}
            options={alreadyhaveplanoptions}
            placeholder={havePlanPlaceholder}
            value={alreadyHavePlanValue.value}
            inputValueSetter={(value) => alreadyHavePlanValue.value = value}
          />
          {alreadyHavePlanError.value && (
            <Image
              src={"/Simulador/error-circle-icon.png"}
              alt="Error Icon"
              className="h-5 w-5 absolute top-50 right-7 lg:left-[615px]"
              width=""
              height=""
            />
          )}
        </div>
      </div>
    </>
  );
}
