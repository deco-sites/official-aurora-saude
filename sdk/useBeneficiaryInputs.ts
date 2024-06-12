import { signal } from "@preact/signals";

const inputs = signal<React.ReactNode[]>(["New Beneficiary"]);
const selectedBeneficiaryInput = signal("option1");

const state = {
  inputs,
  selectedBeneficiaryInput,
};

export const useBeneficiaryInputs = () => state;
