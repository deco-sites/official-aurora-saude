import FormTitleH2 from "../../components/Simulador/form-title-h2.tsx";
import InputText from "../../components/Simulador/input-text.tsx";

import { useEffect, useState } from "preact/hooks";
import { useStepTwoOption2InputValues } from "../../sdk/Simulador/SecondStepOption2/useStepTwoOption2InputValues.ts";
import Image from "apps/website/components/Image.tsx";

export default function SecondStepOption2() {
  const [socialReasonPlaceholder, setSocialReasonPlaceholder] = useState(
    "Escreva aqui",
  );
  const [namePlaceholder, setNamePlaceholder] = useState("Nome Completo");
  const [telPlaceholder, setTelPlaceholder] = useState("Escreva aqui");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Escreva aqui");

  const {
    socialReasonValue,
    name2Value,
    tel2Value,
    email2Value,

    socialReasonError,
    name2Error,
    tel2Error,
    email2Error,
  } = useStepTwoOption2InputValues();

  useEffect(() => {
    const updateNamePlaceholder = () => {
      if (window.innerWidth < 640) {
        setSocialReasonPlaceholder("Razão social");
        setNamePlaceholder("Nome e sobrenome");
        setTelPlaceholder("Telefone/Whatsapp");
        setEmailPlaceholder("E-mail");
      } else {
        setSocialReasonPlaceholder("Escreva aqui");
        setNamePlaceholder("Nome completo");
        setTelPlaceholder("Escreva aqui");
        setEmailPlaceholder("Escreva aqui");
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

        <div className="relative flex gap-2 items-center lg:w-[500px]">
          <InputText
            id={"corporatereason"}
            name={"corporatereason"}
            label={"Razão social"}
            placeholder={socialReasonPlaceholder}
            value={socialReasonValue.value}
            inputValueSetter={(value) => socialReasonValue.value = value}
            wfull
          />
          {socialReasonError.value && (
            <Image
              src={"/Simulador/error-circle-icon.png"}
              alt="Error Icon"
              width=""
              height=""
              className="h-5 w-5 absolute top-50 right-2 lg:left-[520px]"
            />
          )}
        </div>

        <div className="relative flex gap-2 items-center lg:w-[500px]">
          <InputText
            id={"name"}
            name={"name"}
            label={"Nome e Sobrenome"}
            placeholder={namePlaceholder}
            value={name2Value.value}
            inputValueSetter={(value) => name2Value.value = value}
            wfull
          />
          {name2Error.value && (
            <Image
              src={"/Simulador/error-circle-icon.png"}
              alt="Error Icon"
              width=""
              height=""
              className="h-5 w-5 absolute top-50 right-2 lg:left-[520px]"
            />
          )}
        </div>

        <div className="relative flex gap-2 items-center">
          <InputText
            id={"tel"}
            name={"tel"}
            label={"Telefone/WhatsApp"}
            placeholder={telPlaceholder}
            value={tel2Value.value}
            inputValueSetter={(value) => tel2Value.value = value}
          />
          {tel2Error.value && (
            <Image
              src={"/Simulador/error-circle-icon.png"}
              alt="Error Icon"
              width=""
              height=""
              className="h-5 w-5 absolute top-50 right-2 lg:left-[520px]"
            />
          )}
        </div>

        <div className="relative flex gap-2 items-center lg:w-[500px]">
          <InputText
            id={"email"}
            name={"email"}
            label={"E-mail"}
            placeholder={emailPlaceholder}
            value={email2Value.value}
            inputValueSetter={(value) => email2Value.value = value}
            wfull
          />
          {email2Error.value && (
            <Image
              src={"/Simulador/error-circle-icon.png"}
              alt="Error Icon"
              width=""
              height=""
              className="h-5 w-5 absolute top-50 right-2 lg:left-[520px]"
            />
          )}
        </div>
      </div>
    </>
  );
}
