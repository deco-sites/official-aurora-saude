import ControlFormSteps from "../islands/control-form-steps.tsx";

export interface Props {}

export default function Section() {
  return (
    <>
      <div className="flex justify-center lg:width-calc">
        <div className="flex gap-6 w-[1400px]">
          <ControlFormSteps />
        </div>
      </div>
    </>
  );
}
