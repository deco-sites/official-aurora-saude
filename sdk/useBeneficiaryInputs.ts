import { signal } from "@preact/signals";

const inputs = signal<React.ReactNode[]>(["New Beneficiary"]);

const state = {
  inputs,
};

export const useBeneficiaryInputs = () => state;
