import { signal } from "@preact/signals";

//const selectedPlan = signal<number[]>([1]);
const selectedPlan = signal(1);

const state = {
  selectedPlan,
};

export const useSelectPlan = () => state;
