export default function SendingConfirmation({ signalToChange }) {
    return (
        <>
            <div className="flex justify-center px-10 lg:px-0">
                <div className="lg:max-w-[1400px] w-full pt-12 pb-16 lg:p-32">
                    <div className="flex flex-col gap-8 lg:flex-row justify-between items-center lg:items-end">
                        <span className="text-orange4 font-sora font-bold text-2xl text-center lg:text-start">
                            Solicitação enviada.<br /> Retornaremos o seu<br />
                            {" "}
                            contato em até 3 dias<br /> úteis.
                        </span>
                        <button
                            onClick={() => signalToChange.value = false}
                            className="bg-orange4 text-white rounded-full text-xl py-5 px-28"
                        >
                            Voltar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
