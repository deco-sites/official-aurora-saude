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

    const name = "Lucca";

    try {
        const { data, error } = await supabaseClient
            .from("technologies")
            .insert([
                { name: name, image: "teste" },
            ])
            .select();
    } catch (error) {
        console.log(error);
    }
};

export default saveLead;
