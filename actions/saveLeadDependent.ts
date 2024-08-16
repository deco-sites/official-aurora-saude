import { AppContext } from "site/apps/site.ts";

export interface Props {
    email: string;
}

const saveLeadDependent = async (
    props: Props,
    req: Request,
    ctx: AppContext,
) => {
    const { supabaseClient } = ctx;

    console.log("Chamou a action SaveLeadDependent");

    const { data, error } = await supabaseClient
        .from("leads")
        .insert([
            {
                cd_faixa: 2,
                quantidade: 3,
                cd_lead: 1,
                cd_tab_preco: 1,
            },
        ])
        .select();

    if (error) {
        console.log("Erro da saveLeads", error);
    } else {
        console.log("Data da saveLeads", data);
    }

    return {
        data,
        error,
    };
};

export default saveLeadDependent;
