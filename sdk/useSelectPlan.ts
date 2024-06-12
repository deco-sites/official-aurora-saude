import { signal } from "@preact/signals";

const selectedPlan = signal<number[]>([]);

const state = {
  selectedPlan,
};

export const useSelectPlan = () => state;
