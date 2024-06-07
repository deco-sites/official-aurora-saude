import FormTitle from "site/components/form-title.tsx";
import InputText from "site/components/input-text.tsx";
import InputSelect from "site/components/input-select.tsx";
import AddBeneficiary from "site/islands/add-beneficiary.tsx";

export default function ThirdStepOption1() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <span className="text-[#767676] font-semibold text-lg my-8">
          Você pode contratar via CNPJ incluindo empresas de 01 a 29 vidas,{" "}
          <br />{" "}
          considerando dependentes e colaboradores. O mesmo vale para o MEI.
        </span>

        <FormTitle text={"Adicione colaboradores e dependentes:"} />

        <AddBeneficiary />
      </div>
    </>
  );
}
