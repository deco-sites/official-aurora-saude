import { AppContext } from "site/apps/site.ts";

export interface Lead {
    nome: string;
    razao_social: string;
    cpf_cnpj: string;
    cidade: number;
    estado: string;
    telefone: string;
    email: string;
    cd_plano: number;
    somente_titular: boolean;
    possui_plano: boolean;
    cd_tab_preco: number;
    outra_pessoa: boolean;
}

export interface Props {
    leadToSave: Lead;
}

const saveLead = async (
    props: Props,
    req: Request,
    ctx: AppContext,
) => {
    const { supabaseClient } = ctx;

    console.log("Chamou a action SaveLead", props.leadToSave);

    const { data, error } = await supabaseClient
        .from("leads")
        .insert(props.leadToSave)
        .select();

    if (error) {
        console.log("Erro da saveLeads", error);
    } else {
        console.log("Data da saveLeads", data);
        console.log("cd_lead gerado", data?.[0].cd_lead);
    }

    return {
        data,
        error,
    };
};

export default saveLead;
