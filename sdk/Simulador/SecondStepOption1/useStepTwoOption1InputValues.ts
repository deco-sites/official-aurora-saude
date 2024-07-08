import { signal } from "@preact/signals";

const nameValue = signal("");
const emailValue = signal("");
const telValue = signal("");
const cityValue = signal("");
const ageRangeValue = signal("");
const alreadyHavePlanValue = signal("");

const nameError = signal(false);
const emailError = signal(false);
const telError = signal(false);
const cityError = signal(false);
const ageRangeError = signal(false);
const alreadyHavePlanError = signal(false);

const state = {
  nameValue,
  emailValue,
  telValue,
  cityValue,
  ageRangeValue,
  alreadyHavePlanValue,

  nameError,
  emailError,
  telError,
  cityError,
  ageRangeError,
  alreadyHavePlanError,
};

export const useStepTwoOption1InputValues = () => state;
