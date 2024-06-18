import FormTitleH2 from "../components/form-title-h2.tsx";
import InputText from "site/components/input-text.tsx";
import InputSelect from "site/components/input-select.tsx";
import { useEffect, useState } from "preact/hooks";

export default function SecondStepOption2() {
  const [socialReasonPlaceholder, setSocialReasonPlaceholder] = useState(
    "Escreva aqui",
  );
  const [namePlaceholder, setNamePlaceholder] = useState("Nome Completo");
  const [telPlaceholder, setTelPlaceholder] = useState("Escreva aqui");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Escreva aqui");

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

        <InputText
          id={"corporatereason"}
          name={"corporatereason"}
          label={"Razão social"}
          placeholder={socialReasonPlaceholder}
        />

        <InputText
          id={"name"}
          name={"name"}
          label={"Nome e Sobrenome"}
          placeholder={namePlaceholder}
        />
        <InputText
          id={"tel"}
          name={"tel"}
          label={"Telefone/WhatsApp"}
          placeholder={telPlaceholder}
        />
        <InputText
          id={"email"}
          name={"email"}
          label={"E-mail"}
          placeholder={emailPlaceholder}
        />
      </div>
    </>
  );
}
