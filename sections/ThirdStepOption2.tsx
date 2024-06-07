import FormTitleH2 from "../components/form-title-h2.tsx";
import InputText from "site/components/input-text.tsx";
import InputSelect from "site/components/input-select.tsx";
import AddBeneficiary from "site/islands/add-beneficiary.tsx";
import FormTitleH1 from "site/components/form-title-h1.tsx";

export default function ThirdStepOption1() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <FormTitleH1
          text1={"Você pode contratar via CNPJ incluindo empresas de 01 a 29 vidas,"}
          text2={"considerando dependentes e colaboradores. O mesmo vale para o MEI."}
        />

        <FormTitleH2 text={"Adicione colaboradores e dependentes:"} />

        <AddBeneficiary />
      </div>
    </>
  );
}
