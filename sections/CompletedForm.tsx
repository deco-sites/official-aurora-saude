import NewSimulationButton from "../islands/new-simulation-btn.tsx";

export default function CompletedForm() {
  return (
    <div className="flex justify-center sm:width-calc">
      <div className="flex gap-6 sm:w-[1400px] px-8 sm:px-0">
        <div className="bg-gray1 rounded-2xl px-8 sm:px-0 h-[700px] text-center w-full gap-28 flex flex-col items-center justify-center">
          <span className="text-4xl sm:text-5xl text-orange1 font-extrabold font-sora">
            Solicitação enviada <br />com sucesso.
          </span>
          <NewSimulationButton />
        </div>
      </div>
    </div>
  );
}
