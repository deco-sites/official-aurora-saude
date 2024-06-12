import NewSimulationButton from "../islands/new-simulation-btn.tsx";

export default function CompletedForm() {
  return (
    <div
      className="flex justify-center"
      style={{ width: "calc(100vw - 18px)" }}
    >
      <div className="flex gap-6 w-[1400px]">
        <div className="bg-bg-gray rounded-2xl h-[700px] text-center w-full gap-28 flex flex-col items-center justify-center">
          <span className="text-5xl text-orange font-extrabold">
            Solicitação enviada <br />com sucesso.
          </span>
          <NewSimulationButton />
        </div>
      </div>
    </div>
  );
}
