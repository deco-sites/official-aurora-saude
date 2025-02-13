import { invoke } from "../../runtime.ts";

export async function getAgeRangeCodeFunction(selectedAgeRange: string) {
  const ageRange_code = await invoke.site.actions.getAgeRangeCode({
    selectedAgeRange: selectedAgeRange,
  });

  return ageRange_code.data?.[0].cd_faixa;
}
