import ControlFormSteps from "../../islands/Simulador/control-form-steps.tsx";
import Site from "site/apps/site.ts";
import type { App as A, AppContext as AC } from "deco/mod.ts";

export default function Section(props: ReturnType<typeof loader>) {
  return (
    <>
      <ControlFormSteps />
    </>
  );
}

export type App = ReturnType<typeof Site>;
export type AppContext = AC<App>;

export const loader = async (
  props: string,
  req: Request,
  ctx: AppContext,
) => {
  const { supabaseClient } = ctx;
  const { data, error } = await supabaseClient
    .from("technologies")
    .select("*");

  console.log("RETORNO DO SUPABASE", data);
  console.log("ERRO:", error);

  return {
    ctx,
    supabaseClient,
  };
};
