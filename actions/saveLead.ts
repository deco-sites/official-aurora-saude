import { AppContext } from "site/apps/site.ts";

export interface Props {
    email: string;
}

const saveLead = async (
    props: Props,
    req: Request,
    ctx: AppContext,
): Promise<void> => {
    const { supabaseClient } = ctx;

    try {
        const { data, error } = await supabaseClient
            .from("leads")
            .insert([
                {
                    nome_razao_social: "Erick Souza",
                    cpf_cnpj: "15706200350",
                    cidade: "Magé",
                    estado: "RJ",
                    telefone: "21925494547",
                    email: "erick.nascimento@simbioseventures.com",
                    cd_plano: 1,
                    somente_titular: true,
                    possui_plano: false,
                    cd_tab_preco: 4,
                    outra_pessoa: false,
                },
            ])
            .select();
    } catch (error) {
        console.log(error);
    }
};

export default saveLead;
