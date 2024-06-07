import { signal } from "@preact/signals";

const inputs = signal<React.ReactNode[]>([]);

const state = {
  inputs,
};

export const useBeneficiaryInputs = () => state;
